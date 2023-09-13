import { useState } from "react";

import movies from "./data/movies.json";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./App.css";

function App() {
    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [imgURL, setimgURL] = useState("");

    const deleteMovie = (movieTitle) => {
        const newList = moviesToDisplay.filter((element) => {
            return element.title !== movieTitle;
        });
        setMoviesToDisplay(newList);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newMovie = {
            title: title,
            rating: rating,
            imgURL: imgURL,
        };

        const newList = [newMovie, ...moviesToDisplay];

        setMoviesToDisplay(newList);

        // clear form
        setTitle("");
        setRating("");
        setimgURL("");
    };

    return (
        <>
            <Header numberOfMovies={moviesToDisplay.length} />

            <section>
                <form onSubmit={handleSubmit}>
                    <label>
                        Title :
                        <input
                            type="text"
                            name="title"
                            required={true}
                            placeholder="enter the title"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                        />
                    </label>
                    <br />
                    <label>
                        Rate :
                        <input
                            type="number"
                            name="rating"
                            min={1}
                            max={10}
                            required={true}
                            placeholder="enter the rate"
                            value={rating}
                            onChange={(e) => {
                                setRating(e.target.value);
                            }}
                        />
                    </label>
                    <br />
                    <label>
                        Image :
                        <input
                            type="text"
                            name="imgURL"
                            placeholder="enter the image url"
                            value={imgURL}
                            onChange={(e) => {
                                setimgURL(e.target.value);
                            }}
                        />
                    </label>
                    <br />
                    <button>Create</button>
                </form>
            </section>

            <Main movies={moviesToDisplay} callbackToDelete={deleteMovie} />
            <Footer />
        </>
    );
}

export default App;
