// KOMPONENT FUNKCYJNY 
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.scss';


const Hero = props => (
    <header className={styles.component}>
        <h2 className={styles.title}>{props.titleText}</h2>
        <img  
            className={styles.image} 
            src={props.image} 
        />
    </header>
);

Hero.propTypes = {
    titleText: PropTypes.node.isRequired,
    image: PropTypes.string,
};

export default Hero;