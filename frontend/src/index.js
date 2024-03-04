import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Modal from "react-modal";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { BrowserRouter } from "react-router-dom";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
const root = ReactDOM.createRoot(document.getElementById("root"));
if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}
Modal.setAppElement("#root");

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
