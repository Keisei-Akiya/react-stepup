import axios from "axios";
import { useCallback, useState } from "react";

import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState<boolean>(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({ title: "You are logged in.", status: "success" });
            navigate("/home");
          } else {
            showMessage({ title: "User not found", status: "error" });
          }
        })
        .catch(() => {
          showMessage({ title: "You can't log in.", status: "error" });
          alert("You can't log in.");
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [navigate, showMessage]
  );
  return { login, loading };
};
