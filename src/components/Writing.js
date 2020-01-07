import React from 'react';
import Blurb from './Blurb';
import Vocations from './Vocations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Writing = () => {
    return (
        <div className="contents">
            <div className="writing">
                <Blurb />
                <Vocations />
                <article className="writing__container">
                    <h3 className="article__title">On Building this site</h3>
                    <h4 className="article__subtitle">Goals and Expectations:</h4>
                    <p>
                        One of the most important side-projects a developer can work is creating a personal site.  
                        I haven’t gotten to it so far in my career, and it seems like one of those things every developer should have.  
                        It’s a great opportunity to use React, to have essentially an online business card, to put myself out into the world, and to  
                        <a className="external_link" href="https://www.taniarascia.com/learn/"> 
                            &nbsp;learn in public
                        </a>.
                    </p>

                    <p>
                        Here are some goals I had before starting the project (marked with a bullet):
                    </p>

                    <ul>
                        <div className="writing__bullet">
                            <FontAwesomeIcon className="writing__bullet_icon" icon="dot-circle"/>
                            Get something simple and functional up relatively quickly, and expand its functionality later.
                        </div>
                    </ul>

                    <p>
                        A version of this principle is the most common piece of advice I tell Codecore students when it comes to their final projects,
                        so I might as well follow the advice myself.  
                        I usually tell students to: decide on the core functionality of your app, make that deadline modest, and worry about the peripheral features later. 
                        Which leads me to the list of features for the first iteration of the site:
                    </p>

                    <ul>
                        <div className="writing__bullet">
                            <FontAwesomeIcon className="writing__bullet_icon" icon="dot-circle"/>
                            Writings page,
                        </div>
                    </ul>
                    <ul className="writing__bullet">
                        <FontAwesomeIcon className="writing__bullet_icon" icon="dot-circle"/>About me,
                    </ul> 
                    <ul className="writing__bullet">
                        <FontAwesomeIcon className="writing__bullet_icon" icon="dot-circle"/>Photo Gallery,
                    </ul> 
                    <ul className="writing__bullet">
                        <FontAwesomeIcon className="writing__bullet_icon" icon="dot-circle"/>React + React - Router FrontEnd,
                    </ul> 
                    <ul className="writing__bullet">
                        <FontAwesomeIcon className="writing__bullet_icon" icon="dot-circle"/>Custom webpack config,
                    </ul>
                    <ul className="writing__bullet">
                        <FontAwesomeIcon className="writing__bullet_icon" icon="dot-circle"/>No backend,
                    </ul>
                    <ul className="writing__bullet">
                        <FontAwesomeIcon className="writing__bullet_icon" icon="dot-circle"/>Responsive layout,
                    </ul>
                    <ul className="writing__bullet">
                        <FontAwesomeIcon className="writing__bullet_icon" icon="dot-circle"/>Mobile friendly,
                    </ul>
                    <ul className="writing__bullet">
                        <FontAwesomeIcon className="writing__bullet_icon" icon="dot-circle"/>Professional looking
                    </ul>

                    <p>
                        All pretty straightforward. 
                        I’ve done a fair bit of recreational writing in the past and I’d love a motivator to continue doing so.  
                        I’ve also been taking film photos for a couple years now, and used to do a fair bit of DSLR photography as well.  
                        This site can be a nice place to show off some photos without the anxious feelings I get posting things on instagram.
                    </p>

                    <ul className="writing__bullet">
                        <FontAwesomeIcon className="writing__bullet_icon" icon="dot-circle"/>Understand thoroughly all the technologies I’m using, avoid libraries for small tasks.
                    </ul>

                    <p>
                        I want to take the time to do things manually as much as possible, and actually understand the technologies and techniques I’m using rather than just throwing around libraries for quick fixes. 
                        Obviously this is the goal with everything I do, but it’s easier to achieve when you control the deadlines and the project as a whole.
                    </p>

                    <p>
                        I have to admit that I’ve started a personal site a couple times previously in the past few years, which went unfinished.  
                        So perhaps the most important goal:
                    </p>

                    <ul className="writing__bullet">
                        <FontAwesomeIcon className="writing__bullet_icon" icon="dot-circle"/>Complete the project, make it live,
                    </ul>
                    <ul className="writing__bullet">
                        <FontAwesomeIcon className="writing__bullet_icon" icon="dot-circle"/>accept it's imperfections and use them as learning opportunities.
                    </ul>

                    <p>
                        I’ve thought a lot about why I’ve failed at this task previously, and it’s a combination of a bunch of factors: 
                    </p>
                    
                    <ul className="writing__bullet">
                        <FontAwesomeIcon className="writing__bullet_icon" icon="dot-circle"/>relatively weak design skill compared to backend programming ability (backend programming is much more of a strength for me),
                    </ul>
                    <ul className="writing__bullet">
                        <FontAwesomeIcon className="writing__bullet_icon" icon="dot-circle"/>reluctance to put something imperfect behind my name, and out into the world in general,
                    </ul>
                    <ul className="writing__bullet">
                        <FontAwesomeIcon className="writing__bullet_icon" icon="dot-circle"/>and the relative discomfort I have with the web design workflow compared with the workflow for a backend task. 
                    </ul>
                    
                    <p> 
                        This is a big topic, which I’ll write about all on it’s own, but it’s important to keep in mind that simple putting out a product that I’m comfortable with at all is an achievement in and of itself. 
                    </p>
                </article>
            </div>
        </div>
    )
}


export default Writing



