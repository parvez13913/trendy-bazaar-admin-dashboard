import CreateAdminPage from "@/pages/create-admin/create-admin";
import LoginPage from "@/pages/login";
import NotFoundPage from "@/pages/shared/not-found";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/components/Layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "create-admin",
        element: <CreateAdminPage />,
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
