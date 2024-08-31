import { memo } from "react";
import { Outlet } from "react-router-dom";

import { HeaderLayout } from "./HeaderLayout";

// HeaderLayoutを適用するためのラッパーコンポーネント
export const HeaderLayoutWrapper = memo(() => (
  <HeaderLayout>
    <Outlet />
  </HeaderLayout>
));
