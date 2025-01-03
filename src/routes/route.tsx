import NotFoundPage from "@/pages/shared/not-found";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/components/Layout/MainLayout";
import CreateAdminPage from "@/pages/create-admin/create-admin";
import RequestAdminPage from "@/pages/create-admin/request-admin";
import LoginPage from "@/pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "request-admin-register",
        element: <RequestAdminPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "create-admin",
    element: <CreateAdminPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
