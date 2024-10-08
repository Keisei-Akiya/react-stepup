import { memo } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayoutWrapper } from "../components/templates/HeaderLayoutWrapper";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HeaderLayoutWrapper />}>
          <Route index element={<Home />} />
          <Route path="user_management" element={<UserManagement />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  );
});
