import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const About = () => (
    <div className="about">
        <div className="about__container">
            <div className="about__profile-photo"></div>
        </div>
        <div className="about__container">
            <h1 className="about__title">Jack Nenniger </h1>
            <h4 className="about__subtitle">Web Developer, Photograher, Philosophy Major, Climber, Snowboarder, Writer, Gamer, Human</h4>
            <p> Currently looking for fulltime Web Development work in Vancouver B.C. </p>
            <div className="about__icons">
                <a href={"https://www.linkedin.com/in/john-paul-nenniger/"}>
                    <FontAwesomeIcon 
                        icon={['fab', 'linkedin']}
                        className="about__icon"
                        />
                </a>
                <a href={"https://github.com/John-Nenniger"}>
                <FontAwesomeIcon 
                    icon={['fab', 'github']}
                    className="about__icon"
                />
                </a>
                <a href={"mailto:jpnenniger@gmail.com"}>
                <FontAwesomeIcon 
                    icon="envelope"
                    className="about__icon"
                />
                </a>
            </div>

        </div>
    </div>
)


export default About