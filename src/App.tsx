import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/path";

function App() {
  return (
    <div>
      {/* <ToastContainer /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
