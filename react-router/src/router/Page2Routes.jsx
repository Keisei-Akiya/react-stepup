import { Route } from "react-router-dom";
import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const Page2Routes = [
  <Route key="page2" path="/page2" element={<Page2 />} />,
  <Route key="page2-with-id" path="/page2/:id" element={<UrlParameter />} />,
];
