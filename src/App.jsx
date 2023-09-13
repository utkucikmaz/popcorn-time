import { useState } from "react";
import "./App.css";
import movies from "./data/movies.json";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
    const deleteMovie = (movieId) => {
        const newList = moviesToDisplay.filter((e) => movieId !== e.id);
        setMoviesToDisplay(newList);
    };
    return (
        <>
            <Header numberOfMovies={moviesToDisplay.length} />
            <Main movies={moviesToDisplay} callbackToDelete={deleteMovie} />
            <Footer />
        </>
    );
}

export default App;
