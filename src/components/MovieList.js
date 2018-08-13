import React, { Component } from "react";
import Movie from "./Movie";

const MovieList = (props) => {
  const allMovies = props.data.map(movie => {
    return(
      <Movie title={movie.title} key={movie.id} showtime={movie.showtime}>
      </Movie>
    );
  })
return <div className="movie-list">{allMovies}</div>

}
export default MovieList;
