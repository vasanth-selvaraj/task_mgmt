import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import HashRouter from "hash-router";
import { ThemeProvider, TaskListProvider } from "./Context/ContextExport";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter basename={window.location.pathname || ""}>
    <ThemeProvider>
      <TaskListProvider>
        <App />
      </TaskListProvider>
    </ThemeProvider>
  </HashRouter>
);

reportWebVitals();
