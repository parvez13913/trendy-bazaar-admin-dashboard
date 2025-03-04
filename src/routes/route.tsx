import NotFoundPage from "@/pages/shared/not-found";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/components/Layout/MainLayout";
import ProtectedRoute from "@/components/ProtectedRoute";
import CreateAdminPage from "@/pages/create-admin/create-admin";
import RequestAdminPage from "@/pages/create-admin/request-admin";
import ForgotPasswordPage from "@/pages/forgot-password/forgot-password";
import LoginPage from "@/pages/Login";
import ManageAdmin from "@/pages/manage-admin/manage-admin";
import CreateProductCategoryPage from "@/pages/product-category/create-product-category";
import CreateProductPage from "@/pages/product/product";
import EditProfilePage from "@/pages/profile/edit-profile";
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
        path: "edit-profile",
        element: <EditProfilePage />,
      },
      {
        path: "create-product-category",
        element: <CreateProductCategoryPage />,
      },
      {
        path: "create-product",
        element: <CreateProductPage />,
      },
      {
        path: "request-admin-register",
        element: (
          <ProtectedRoute allowedRoles={["SUPER_ADMIN"]}>
            <RequestAdminPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "manage-admin",
        element: (
          <ProtectedRoute allowedRoles={["SUPER_ADMIN"]}>
            <ManageAdmin />
          </ProtectedRoute>
        ),
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
