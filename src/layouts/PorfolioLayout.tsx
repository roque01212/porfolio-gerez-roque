import { CustomFooter } from "@/components/CustomFooter";

import { Outlet } from "react-router";

export const PorfolioLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Outlet />
      <CustomFooter />
    </div>
  );
};
