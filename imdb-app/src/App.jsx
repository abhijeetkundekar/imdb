import { StrictMode, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header";
import MovieListPage from "./pages/MovieListPage";
import WatchListPage from "./pages/WatchListPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  const [watchList, setWatchList] = useState({});

  return (
    <BrowserRouter>
      <StrictMode>
        <Header />
        <Routes>
          {/* Add routes here */}
          <Route
            path="/"
            element={
              <MovieListPage
                watchList={watchList}
                setWatchList={setWatchList}
              />
            }
          />
          {/* watch list */}
          <Route
            path="/watchlist"
            element={<WatchListPage watchList={watchList} />}
          />
          <Route path="/details" element={<MovieDetailsPage />} />
          <Route path="*" element={<h2>Page Not Found!</h2>} />
        </Routes>
      </StrictMode>
    </BrowserRouter>
  );
}

export default App;
