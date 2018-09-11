import React from "react";
import ReactDOM from "react-dom";
import MovieRow from "./MovieRow.js";
import $ from "jquery";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};

    //console.log("My Initializer");
    /*
    const movies = [
      {
        id: 0,
        title: "avengers: infinity war",
        overview: "this my first overview"
      },
      {
        id: 1,
        title: "the avengers",
        overview: "this is my second overview"
      }
    ];
    this.state = { rows: <p /> };
    

    var movieRows = [];

    movies.forEach(movie => {
      const movieRow = <MovieRow movie={movie} />;
      movieRows.push(movieRow);
    });

    this.state = { rows: movieRows };

    */

    //this.performSearch("ant man");
  }

  performSearch(searchTerm) {
    const urlString =
      "https://api.themoviedb.org/3/search/movie?api_key=617c7d4346f7dbef634d15198b16f4ec&page=1&include_adult=false&query=" +
      searchTerm;
    $.ajax({
      url: urlString,
      success: data => {
        console.log("it works!", data.results[0].title);
        const results = data.results;

        var movieRows = [];

        results.forEach(movie => {
          movie.poster_src =
            "https://image.tmdb.org/t/p/w185/" + movie.poster_path;
          //console.log(movie.poster_path);
          const movieRow = <MovieRow movie={movie} />;
          movieRows.push(movieRow);
        });

        this.setState({ rows: movieRows });
      },
      error: () => {
        console.error("error");
      }
    });
  }

  searchChangeHandler(e) {
    console.log(e.target.value);
    const searchTerm = e.target.value;
    this.performSearch(searchTerm);
  }

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="logo" width="50" src="green-icon.svg" />
              </td>
              <td>Movies</td>
            </tr>
          </tbody>
        </table>

        <input
          onChange={this.searchChangeHandler.bind(this)}
          className="searchBar"
          placeholder="Enter movie title here"
        />

        {this.state.rows}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
