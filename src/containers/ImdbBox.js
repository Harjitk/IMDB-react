import React, { Component } from 'react';
import MovieList from "../components/MovieList";

class ImdbBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [{
        id:1,
        title: "Mission Impossible Fallout",
        showtime: "https://www.imdb.com/title/tt4912910/"
      },
      {
        id:2,
        title: "Cafe Society",
        showtime: "https://www.imdb.com/title/tt4513674/"
      },
      {
        id:3,
        title: "Morgan",
        showtime: "https://www.imdb.com/title/tt4520364/"
      },
      {
        id:4,
        title: "The 9th Life of Louis Drax",
        showtime: "https://www.imdb.com/title/tt3991412/"
      },
      {
        id:5,
        title: "Naam Hai Akira",
        showtime: ""
      },
      {
        id:6,
        title: "Equity",
        showtime: "https://www.imdb.com/title/tt5465370/"
      },
      {
        id:7,
        title: "Things To Come",
        showtime: "https://www.imdb.com/title/tt0028358/"
      }]
    }
  }

  render(){
    return <div className="imdb box">
      <h2> Movie List</h2>
      <MovieList data={this.state.data}></MovieList>
    </div>
  }
}

export default ImdbBox;
