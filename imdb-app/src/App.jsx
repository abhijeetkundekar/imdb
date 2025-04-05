import { lazy, StrictMode, Suspense, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header";

const LazyMovieListPage = lazy(() => import("./pages/MovieListPage.jsx"));
const LazywatchListPage = lazy(() => import("./pages/WatchListPage.jsx"));
const LazyMovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage.jsx"));
function App() {
  const [watchList, setWatchList] = useState({});

  return (
    <BrowserRouter>
      <StrictMode>
        <Header />
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            {/* Add routes here */}
            <Route
              path="/"
              element={
                <LazyMovieListPage
                  watchList={watchList}
                  setWatchList={setWatchList}
                />
              }
            />
            {/* watch list */}
            <Route
              path="/watchlist"
              element={<LazywatchListPage watchList={watchList} />}
            />
            <Route path="/details" element={<LazyMovieDetailsPage />} />
            <Route path="*" element={<h2>Page Not Found!</h2>} />
          </Routes>
        </Suspense>
      </StrictMode>
    </BrowserRouter>
  );
}

export default App;
