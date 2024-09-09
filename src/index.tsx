import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MovieProvider } from "./context/movieContext";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <MovieProvider>
        <App />
      </MovieProvider>
    </Router>
  </React.StrictMode>,
);
