import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div>
      <h1>UrlParameter!</h1>
      <p>parameter = {id}</p>
      <p>query parameter = {query.get("name")}</p>
    </div>
  );
};
