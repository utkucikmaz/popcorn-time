import React, { useState } from "react";
import styles from "./Main.module.css";
import movies from "../data/movies.json";

export default function Main() {
    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

    const deleteMovie = (movieId) => {
        const newList = moviesToDisplay.filter((e) => {
            return movieId !== e.id;
        });
        setMoviesToDisplay(newList);
    };
    let message;
    if (moviesToDisplay.length > 0) {
        message = <h1>Number of movies: {moviesToDisplay.length}</h1>;
    } else {
        message = <h1>Sorry, no movies to display</h1>;
    }
    return (
        <div>
            {message}
            {moviesToDisplay.map((movie) => {
                return (
                    <div key={movie.id} className={styles.card}>
                        <h1>{movie.title}</h1>
                        {movie.imgURL ? (
                            <img src={movie.imgURL} alt="movie poster" />
                        ) : (
                            <img src="https://dummyimage.com/182x268/ffffff/000000" />
                        )}

                        <h3>Rating: {movie.rating}</h3>
                        {movie.rating > 8 && <p>RECOMMENDED</p>}
                        <h2>{movie.year}</h2>
                        {movie.genres.map((genre) => {
                            return (
                                <div>
                                    <ul>
                                        <li>{genre}</li>
                                    </ul>
                                </div>
                            );
                        })}
                        <button
                            onClick={() => {
                                deleteMovie(movie.id);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
