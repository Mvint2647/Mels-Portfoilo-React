import React from 'react';
import './about.css';
import Icon from '../images/Business-Card.jpg';


function About() {
    return (
        <section>
            <div id='aboutStyle'>
            <h2>About Me</h2>
            <img id='Mybusiness' src={Icon} alt='buisness-card'/>
            <p>
            Hello, my name is Mel.<br></br>
        About me: I am hoping to
        excel in Web Development to combine my skills. <br></br>
        My ultimate goal when working with clients are to make their ideas come alive! 
            </p>
            </div>
        </section>
    )
};

export default About;