import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  const { arr } = location.state || {};
  console.log(arr);

  return (
    <div>
      <h1>Page1DetailA</h1>
    </div>
  );
};
