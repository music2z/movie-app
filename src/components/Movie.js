import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie({year, title, summary, poster, genres}){
    return(
        <div>
            <img src={poster} />
            <h1>{title}</h1>
            <h5>{year}</h5>
            <ul>
                {genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                ))}
            </ul>
            <p>{summary.slice(0, 140)}...</p>
        </div>
    )
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired
};

export default Movie;