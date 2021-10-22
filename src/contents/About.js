import React from 'react';
import './about.css';
import Icon from '../../src/images/Business-Card.jpg';


function About() {
    return (
        <section>
            <div id="aboutStyle">
            <h2>About Me</h2>
            <img id="Mybusiness" src={Icon} alt="buisness-card"/>
            </div>
        </section>
    )
};

export default About;