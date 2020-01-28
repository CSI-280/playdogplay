import React from 'react';
import './Grid.css';
import LikeButton from './LikeButton.js';
import DogListing from './DogListing.js'


function Grid() {
    return (
    <div className="grid-container">
        <div className="header">
          <h1>PlayDogPlay</h1>
          
        </div>
            <a href="#" className="navbar" id="navbar1">Home</a>
            <a href="#" className="navbar" id="navbar2">Find a pet</a>
            <a href="#" className="navbar" id="navbar3">About</a>
            <a href="#" className="navbar" id="navbar4">Learn more</a>
            <a href="#" className="navbar" id="navbar5">Contact</a>
        <div className="left">
          <DogListing/>
        </div>
        <div className="middle">
          <LikeButton/>
        </div>
        <div className="right">
        
        
        </div>
        <div className="footer">
        
        
        </div>
      </div>
    );
  }
  
  export default Grid;