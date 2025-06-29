import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../Css/index.css";
import { App } from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { Bounce } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition={Bounce}
    />
  </StrictMode>
);
