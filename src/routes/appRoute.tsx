import { PorfolioLayout } from "@/layouts/PorfolioLayout";
import { HomePage } from "@/pages/HomePage";
import { ImagePage } from "@/pages/ImagePage";
import { createBrowserRouter, Navigate } from "react-router";

export const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <PorfolioLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "image/:id",
        element: <ImagePage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
