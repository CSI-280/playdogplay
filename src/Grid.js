import React from 'react';
import './Grid.css';

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
                <div class="button" id="like_button_container"></div>
                <script src="like_button.js"></script>
            </div>
        <div class="right">
        
        
        </div>
        <div class="footer">
        
        
        </div>
      </div>
    );
  }
  
  export default Grid;