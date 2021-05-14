import React, { Component } from 'react';

class Result extends Component {
    render() {
        return (
          <div>
            <h1>Title: {this.props.data.Title}</h1>
            <h1>Release Date: {this.props.data.Released}</h1>
            <h1>Plot: {this.props.data.Plot}</h1>
            <img
              src={this.props.data.Poster}
              alt=""
            />
          </div>
        );
    }
}

export default Result;