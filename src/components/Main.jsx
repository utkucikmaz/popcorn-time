import React, { useState } from "react";
import Movie from "./Movie";

export default function Main(props) {
    return (
        <div>
            {props.movies.map((movie) => {
                return (
                    <Movie
                        key={movie.id}
                        movieDetails={movie}
                        callbackToDelete={props.callbackToDelete}
                    />
                );
            })}
        </div>
    );
}
