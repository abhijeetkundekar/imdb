import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import MovieListPage from "./pages/MovieListPage.jsx";
import WatchListPage from "./pages/WatchListPage.jsx";
import MovieDetailsPage from "./pages/MovieDetailsPage.jsx";
import Header from "./components/Header.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Header />
      <Routes>
        {/* Add routes here */}
        <Route path="/" element={<MovieListPage />} />
        {/* watch list */}
        <Route path="/watchlist" element={<WatchListPage />} />
        <Route path="/details" element={<MovieDetailsPage />} />
        <Route path="*" element={<h2>Page Not Found!</h2>} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
