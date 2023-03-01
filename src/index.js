import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from "./routes/root";
import Login from "./routes/login";
import ErrorPage from "./error-page";
// import Dashboard from "./pages/Dashboard";
// import AuthLayout from "./pages/AuthLayout";
import Dashboard from "./pages/Dashboard";

// JSX Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path="/" element={<Root />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
    // <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
    //   <Route path="dashboard" element={<Dashboard />} />
    //   <Route element={<AuthLayout />} errorElement={<ErrorPage />}>
    //     <Route path="login" element={<Login />} />
    //     <Route path="logout" element={<Logout />} />
    //   </Route>
    // </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
