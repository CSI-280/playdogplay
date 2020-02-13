import React from 'react';
import LikeButton from '../Components/LikeButton.js';
import DogListing from '../Components/DogListing.js'
import SingleDogListing from '../Components/SingleDogListing.js'
import styles from './Home.module.css'

//calls comopents from other files to load into html
//.css with a .module tag are module based styling meaning they dont follow from page to page


const Home = () => (
        <>
        <div className={styles.grid_container}>
            <div className={styles.left}>
                <h1>Types Of Animals</h1>
				<p>Here you can find all the types of animals that are available in our database</p>
				<DogListing/>
            </div>
            
            <div className={styles.middle}>
                <h1>Welcome To PlayDogPlay</h1>
				<p>PlayDogPlay is a comprehensive pet breed database based on the PetFinder API</p>
				<LikeButton/> 
            </div>
            
            <div className={styles.right}>
				<h1>Check Out This Pet</h1>
				<p>*WIP* - This Section will feature data from a random pet.</p>
				//<SingleDogListing/>
            </div>

            <div className={styles.footer}>
            
            </div>
        </div>
        </>
    );

export default Home;