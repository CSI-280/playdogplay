import React from 'react';
import './Grid.css';
import LikeButton from './LikeButton.js';


function Grid() {
    return (
    <div class="grid-container">
        <div class="header">
          <h1>PlayDogPlay</h1>
          
        </div>
            <a href="#" class="navbar" id="navbar1">Home</a>
            <a href="#" class="navbar" id="navbar2">Find a pet</a>
            <a href="#" class="navbar" id="navbar3">About</a>
            <a href="#" class="navbar" id="navbar4">Learn more</a>
            <a href="#" class="navbar" id="navbar5">Contact</a>
        <div class="left">
        

        </div>
        <div class="middle">
          <LikeButton/>
        </div>
        <div class="right">
        
        
        </div>
        <div class="footer">
        
        
        </div>
      </div>
    );
  }
  
  export default Grid;