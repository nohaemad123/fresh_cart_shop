import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "flowbite";
import "./i18n"; // استدعاء الترجمة

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
