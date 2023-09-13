import React from "react";
import styles from "./Movie.module.css";

export default function Movie(props) {
    const movie = props.movieDetails;
    return (
        <div>
            <div key={movie.id} className={styles.Movie}>
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
                        props.callbackToDelete(movie.id);
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
