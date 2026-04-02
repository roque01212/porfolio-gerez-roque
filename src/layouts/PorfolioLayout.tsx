import { CustomFooter } from "@/components/CustomFooter";
import { CustomNavbar } from "@/components/CustomNavbar";

import { Outlet } from "react-router";

export const PorfolioLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomNavbar />
      <Outlet />
      <CustomFooter />
    </div>
  );
};
