import { Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";
import { Page404 } from "../Page404";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {Page1Routes}
      {Page2Routes}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
