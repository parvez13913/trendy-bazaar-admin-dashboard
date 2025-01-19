import NotFoundPage from "@/pages/shared/not-found";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/components/Layout/MainLayout";
import CreateAdminPage from "@/pages/create-admin/create-admin";
import RequestAdminPage from "@/pages/create-admin/request-admin";
import ForgotPasswordPage from "@/pages/forgot-password/forgot-password";
import LoginPage from "@/pages/Login";
import ManageAdmin from "@/pages/manage-admin/manage-admin";
import ProfilePage from "@/pages/profile/profile";
import ResetPasswordPage from "@/pages/reset-password/reset-password";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "request-admin-register",
        element: <RequestAdminPage />,
      },
      {
        path: "manage-admin",
        element: <ManageAdmin />,
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
    path: "forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "reset-password",
    element: <ResetPasswordPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
