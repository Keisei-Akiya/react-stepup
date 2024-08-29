import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export const Page1 = () => {
  const location = useLocation();
  const isDetail = location.pathname.includes("detail");

  const arr = [...Array(100).keys()];
  console.log(arr);

  const navigate = useNavigate();

  const onClickDetailA = () => {
    navigate("/page1/detailA");
  };

  return (
    <div>
      {!isDetail && (
        <>
          <h1>Page1</h1>
          <nav>
            <Link to="detailA" state={{ arr }}>
              Detail A
            </Link>
            <br />
            <Link to="detailB">Detail B</Link>
            <br />
            <button onClick={onClickDetailA}>Detail A</button>
          </nav>
        </>
      )}
      <Outlet />
    </div>
  );
};
