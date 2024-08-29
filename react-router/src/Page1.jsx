import { Link, Outlet, useLocation } from "react-router-dom";

export const Page1 = () => {
  const location = useLocation();
  const isDetail = location.pathname.includes("detail");

  const arr = [...Array(100).keys()];
  console.log(arr);

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
          </nav>
        </>
      )}
      <Outlet />
    </div>
  );
};
