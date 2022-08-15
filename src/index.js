import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loging from "./components/Loging";
import PrivateRoute from "./components/PrivatRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="Loging"
        element={
          <PrivateRoute isAuth={false}>
            <Loging />
          </PrivateRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);
