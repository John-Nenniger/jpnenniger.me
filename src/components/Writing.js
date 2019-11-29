import React from 'react';
import Blurb from './Blurb'
import Vocations from './Vocations'

const Writing = () => {
    return (
        <div className="writing">
            <Blurb />
            <Vocations />
            <article className="writing__container">
                <h4 className="article__title">On Building this site</h4>

                <p>
                    One of the most important side - projects a developer can work is creating a personal site.  I haven’t gotten to it so far in my career, and it seems like one of those things every developer should have.  It’s a great opportunity to use React, to have essentially an online business card, and to put myself out into the world even if in a very small way(link another post).
                </p>

                <p>Here are some goals I had before starting the project:</p>

                    <ul>Get something simple and functional up relatively quickly, and expand its functionality later.</ul>

                <p>
                    This is the most important thing I tell Codecore students when it comes to their final projects, so I might as well follow the advice myself.Decide on the core functionality of your app, make that deadline modest, and worry about the peripheral features later.Which leads me to the list of features
                    for the first iteration of the site:
                </p>

                    <ul>Writings page,</ul>
                    <ul>About me,</ul> 
                    <ul>Photo Gallery,</ul> 
                    <ul>React + React - Router FrontEnd,</ul> 
                    <ul>Custom webpack config,</ul>
                    <ul>No backend,</ul> 
                    <ul>Responsive layout,</ul>
                    <ul>Mobile friendly,</ul> 
                    <ul>Professional looking</ul>

                <p>All pretty straightforward. I’ve done a fair bit of recreational writing in the past and I’ d love a motivator to
                continue doing so.I’ ve also been taking film photos
                for a couple years now, and used to do a fair bit of DSLR photography as well.This site can be a nice place to show off some photos without the anxious feelings I get posting things on instagram.
                </p>

                <p>Understand thoroughly all the technologies I’ m using, avoid libraries for small tasks
                </p>

                <p>I want to take the time to do things manually as much as possible, and actually understand the technologies and techniques I’ m using rather than just throwing around libraries for quick fixes. Obviously this is the goal with everything I do,
                but It’ s easier to achieve when you control the deadlines and the project as a whole.
                </p>

                <p>I have to admit that I’ ve started a personal site a couple times previously in the past few years, which went unfinished.So perhaps the most important goal:</p>

                    <ul>Complete the project, put it out into the world,</ul>
                    <ul>try not to stress.</ul>

               <p>
                    I’ ve thought a lot about why I’ve failed at this task previously, and it’s a combination of a bunch of factors: 
                </p>
                
                <ul>relatively weak web design skill compared to general programming ability, </ul>
                <ul>reluctance to put something imperfect behind my name, </ul>
                <ul>and the relative discomfort I have with the web design workflow compared with the workflow for a backend task. </ul>
                
                <p> This is a big topic, which I’ ll write about all on it’ s own, but it’ s important to keep in mind that simple putting out a product that I’ m comfortable with at all is an achievement in and of itself. </p>
            </article>
        </div>
    )
}


export default Writing



