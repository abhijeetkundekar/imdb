import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LoginForm from "./components.js/login-form.jsx";
import StopWatch from "./components.js/stopWatch.jsx";
import Carousel from "./components.js/carousel.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <LoginForm /> */}
    {/* <StopWatch /> */}
    <Carousel />
  </StrictMode>
);
