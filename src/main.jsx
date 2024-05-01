import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import SharedState from "./context/SharedState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <SharedState>
        <App />
      </SharedState>
  </React.StrictMode>
);
