import axios from "axios";
import { useCallback, useState } from "react";

import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            navigate("/home");
          } else {
            alert("User not found");
          }
        })
        .catch(() => {
          alert("You can't log in.");
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [navigate]
  );
  return { login, loading };
};
