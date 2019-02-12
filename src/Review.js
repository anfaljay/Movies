import React, { Component } from 'react';
import Cast from "./Cast";

class Review extends Component {
  render() {
    // const casts= this.props.movie.cast;
    // const casts = casts.map(casts => < Cast casts={casts} />);
    return (
        <div>
            <h3>Review:</h3>
            <ul>{Cast}</ul>
        </div>
    );
  }
}

export default Review;
