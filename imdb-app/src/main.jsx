import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

import Header from "./components/Header.jsx";
import { Provider } from "react-redux";
import { store } from "./lib/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
