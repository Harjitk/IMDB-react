import React, { Component } from "react";

const Movie = (props) => {
  return(
    <div className="movie">
      <h4 className="movie-title">{props.title}</h4>
        <a href={props.showtime}>See More</a>
    </div>
  )};

 export default Movie;
