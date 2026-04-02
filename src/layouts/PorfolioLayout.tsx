import { CustomFooter } from "@/components/CustomFooter";
import { ScrollToTop } from "@/components/ScrollToTop";

import { Outlet } from "react-router";

export const PorfolioLayout = () => {
  return (
    <div className="min-h-screen bg-background ">
      <ScrollToTop />
      <Outlet />
      <CustomFooter />
    </div>
  );
};
