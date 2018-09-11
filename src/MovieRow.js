import React from "react";

class MovieRow extends React.Component {
  render() {
    return (
      <div>
        <table id={this.props.movie.id}>
          <tbody>
            <tr>
              <td>
                <img alt="poster" src={this.props.movie.poster_src} />
              </td>
              <td>
                {this.props.movie.title}
                <p>{this.props.movie.overview}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MovieRow;
