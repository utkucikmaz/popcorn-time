import React from "react";
import { useState } from "react";

export default function AddMovie(props) {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [imgURL, setimgURL] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const movieDetails = {
            title: title,
            rating: rating,
            imgURL: imgURL,
        };
        props.callbackToAddMovie(movieDetails);
        // clear form
        setTitle("");
        setRating("");
        setimgURL("");
    };

    return (
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
                        name="image"
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
    );
}
