import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ThankYou from "./ThankYou.jsx";
import "./index.css";

const path = window.location.pathname;

const Page = path === "/thank-you" ? <ThankYou /> : <App />;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>{Page}</React.StrictMode>
);