import React, { useEffect } from "react";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../lib/moviesSlice";

const MovieListPage = () => {
  const totalPages = useSelector((state) => state.movieList.totalPages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies(1));
  }, []);

  const handlePageChange = (pageNo) => {
    dispatch(fetchMovies(pageNo));
  };

  return (
    <div className="movie-list-page">
      <h1>Movie List Page</h1>
      <MovieList />
      <div className="pagination-section">
        <Pagination onPageChange={handlePageChange} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default MovieListPage;
