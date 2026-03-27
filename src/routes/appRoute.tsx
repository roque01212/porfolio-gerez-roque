import { HomePage } from "@/pages/HomePage";
import { createBrowserRouter, Navigate } from "react-router";

export const appRoute = createBrowserRouter([
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
