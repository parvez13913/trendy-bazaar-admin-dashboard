import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
