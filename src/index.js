import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from "./routes/root";
import Login from "./routes/Login";
import ErrorPage from "./error-page";

// JSX Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Login />} errorElement={<ErrorPage />}>
      <Route>
        <Route path="/home" element={<Root />}></Route>
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
