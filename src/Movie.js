import React, { Component } from 'react';
import Review from './Review';


class Movie extends Component {
  render() {
    return (
        <div>
        
        <h1>{ this.props.movie.id }</h1>
        <h2>{ this.props.movie.title }</h2>
        <strong> { this.props.movie.rating } </strong>
        <h3>{ this.props.movie.description }</h3>
        <div><img src = { this.props.movie.poster }/></div>
        <Review />
        </div>
    );
  }
}

export default Movie;
