import React from 'react';
import LikeButton from '../Components/LikeButton.js';
import DogListing from '../Components/DogListing.js'

import './Home.css'

//calls comopents from other files to load into html
const Home = () => (
        <>
        <div className="grid-container">
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
        </>
    );

export default Home;