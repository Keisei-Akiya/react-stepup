import { useLocation, useNavigate } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  const { arr } = location.state || {};
  console.log(arr);

  const navigate = useNavigate();

  const onClickBack = () => {
    navigate("/page1");
  };

  return (
    <div>
      <h1>Page1DetailA</h1>
      <button onClick={onClickBack}>Back</button>
    </div>
  );
};
