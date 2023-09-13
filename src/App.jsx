import { useState } from "react";

import movies from "./data/movies.json";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./App.css";

function App() {
    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

    const [title, setTitle] = useState("");

    const deleteMovie = (movieId) => {
        const newList = moviesToDisplay.filter((element) => {
            return element.id !== movieId;
        });
        setMoviesToDisplay(newList);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newMovie = {
            title: title,
        };

        const newList = [newMovie, ...moviesToDisplay];

        setMoviesToDisplay(newList);

        // clear form
        setTitle("");
    };

    return (
        <>
            <Header numberOfMovies={moviesToDisplay.length} />

            <section>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="enter the title"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />

                    <button>Create</button>
                </form>
            </section>

            <Main movies={moviesToDisplay} callbackToDelete={deleteMovie} />
            <Footer />
        </>
    );
}

export default App;
