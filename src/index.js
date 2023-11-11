import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import { ThemeProvider, TaskListProvider } from "./Context/ContextExport";
// basename={window.location.pathname || ""}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter >
    <ThemeProvider>
      <TaskListProvider>
        <App />
      </TaskListProvider>
    </ThemeProvider>
  </HashRouter>
);

reportWebVitals();
