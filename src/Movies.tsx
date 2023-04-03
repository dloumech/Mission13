import { useState } from 'react';
import data from './MovieData.json';
import styles from './M13.module.css';

const mds = data.MovieData;

function MovieList() {
  const [listOfMovies, setListOMovies] = useState(mds);

  const addMovie = () => {
    setListOMovies([
      ...mds,
      {
        Category: 'Action/Adventure',
        Title: 'Gladiator',
        Year: 2000,
        Director: 'Ridley Scott',
        Rating: 'R',
        Edited: 'No',
      },
    ]);
  };

  return (
    <>
      <div className="text-center">
        <h1>Joel's Beloved Movie Collection</h1>
      </div>
      <br></br>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Category</th>
                <th>Edited</th>
              </tr>
            </thead>
            <tbody>
              {mds.map((m) => (
                <tr>
                  <td>{m.Title}</td>
                  <td>{m.Year}</td>
                  <td>{m.Director}</td>
                  <td>{m.Rating}</td>
                  <td>{m.Category}</td>
                  <td>{m.Edited}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
}

export default MovieList;
