import React from 'react';
import LikeButton from '../Components/LikeButton.js';
import DogListing from '../Components/DogListing.js'
import styles from './Home.module.css'

//calls comopents from other files to load into html
//.css with a .module tag are module based styling meaning they dont follow from page to page


const Home = () => (
        <>
        <div className={styles.grid_container}>
            <div className={styles.left}>
                <DogListing/>
            </div>
            
            <div className={styles.middle}>
                <h1>Welcome To PlayDogPlay</h1>
				<h1>...</h1>
				<LikeButton/> 
            </div>
            
            <div className={styles.right}>
            
            </div>

            <div className={styles.footer}>
            
            </div>
        </div>
        </>
    );

export default Home;