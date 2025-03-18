import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import MovieListPage from "./pages/MovieListPage.jsx";
import WatchListPage from "./pages/WatchListPage.jsx";
import MovieDetailsPage from "./pages/MovieDetailsPage.jsx";
import Header from "./components/Header.jsx";

createRoot(document.getElementById("root")).render(<App />);
