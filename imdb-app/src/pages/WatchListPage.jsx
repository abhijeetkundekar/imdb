import React from "react";

const WatchListPage = ({ watchList }) => {
  return (
    <div>
      <h1>Watch List</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(watchList).map((movie) => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WatchListPage;
