import React, { Component } from 'react';

class Cast extends Component {
  render() {
      return(
     
      <div>
    
      <h4>{this.props.movie.cast.role}</h4>
      <h4>{this.props.movie.cast.name}</h4>
      <Cast/>
      </div>
    
     
    );
  } 
}

export default Cast;