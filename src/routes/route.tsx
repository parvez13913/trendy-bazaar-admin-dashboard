import LoginPage from "@/pages/login";
import NotFoundPage from "@/pages/shared/not-found";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/components/Layout/MainLayout";
import RequestAdminPage from "@/pages/create-admin/request-admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "request-join-admin",
        element: <RequestAdminPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
