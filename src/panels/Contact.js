import React from 'react';
import styles from './Contact.module.css' // page layout
import LikeButton from '../Components/LikeButton.js'

const Contact = () => (
    <>
        <div className={styles.grid_container}>
            <div className={styles.left}>

            </div>

            <div className={styles.middle}>
                <LikeButton/>
            </div>

            <div className={styles.right}>

            </div>

            <div className={styles.footer}>

            </div>

        </div>

    </>
    );
export default Contact;
