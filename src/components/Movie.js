import React from "react";
import PropTypes from "prop-types";
import { getByTitle } from "@testing-library/react";

function Movie(id, year, title, summary, poster){
    return(
        <h1>111</h1>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;