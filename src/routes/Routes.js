import { Route, Routes as DomRoutes } from "react-router-dom";
import Root from "../pages/Root";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import Page404 from "../pages/Page404";

export default function Routes() {
  return (
    <DomRoutes errorElement={<ErrorPage />}>
      <Route path="/" element={<Root />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Page404 />} />
    </DomRoutes>
  );
}
