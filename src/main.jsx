import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container-fluid bg-slate-200 py-10">
      <div className=" w-[80%] mx-auto">
        
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </div>

    </div>
  </React.StrictMode>
);
