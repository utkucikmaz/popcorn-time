import React, { useState } from "react";
import movies from "../data/movies.json";
import Movie from "./Movie";

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
                    <Movie
                        movieDetails={movie}
                        callbackToDelete={deleteMovie}
                    />
                );
            })}
        </div>
    );
}
