import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Vocations from './Vocations'
import Blurb from './Blurb';

const About = () => (
    <div className="contents">
        <div className="about">
            <div className="about__container">
                <div className="about__profile-photo"></div>
            </div>
            <div className="about__container">
                <Blurb/>
                <Vocations />
                <p> Currently developing in Vancouver B.C.</p>
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
    </div>
)


export default About