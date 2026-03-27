import { RouterProvider } from "react-router";
import { appRoute } from "./routes/appRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();

export const PorfolioApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={appRoute} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
