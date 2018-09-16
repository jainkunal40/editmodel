import { Link } from 'react-router-dom'
import React, { Component } from 'react';

var buttonStyle = {
  margin: '10px 10px 10px 0'
};

class Home extends Component {
  render() {
    return (
        <div className="text-center">
        <Link to='/panel'>
        <button
        className=" btn btn-warning"
        style={buttonStyle}>Go to Panel</button></Link></div>
    ); 
  }
}

export default Home;
