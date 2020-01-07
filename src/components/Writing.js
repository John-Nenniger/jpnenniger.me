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
                        <FontAwesomeIcon className="writing__bullet_icon" icon="dot-circle"/>complete the project, make it live,
                    </ul>
                    <ul className="writing__bullet">
                        <FontAwesomeIcon className="writing__bullet_icon" icon="dot-circle"/>accept its imperfections and use them as learning opportunities.
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
                       The latter two are both big topics which I hope to write entire posts about, but that will have to happen on another day.
                    </p>

                    {/* How did it go section? */}

                    <h3 className="article__title">So how did it go?</h3>

                    <a className="external_link" href="https://github.com/John-Nenniger/jpnenniger.me"> 
                        <p> 
                            Check out the code for this project 
                        </p>
                    </a>
                    <p>
                        For the most part it went quite well.  
                        After finishing a really excellent Udemy course on 
                        <a className="external_link" href="https://www.udemy.com/course/react-2nd-edition/">     
                            React 
                        </a>
                        I felt very comfortable with the very limited functionality a simple site like this requires.  
                        In fact, given how simple this site currently is, React is probably overkill, but as I build it out, I’m sure I’ll find more interesting React type problems to solve (or create some contrived ones). 
                    </p>

                    <h4 className="article__subtitle">What was difficult or could have gone better?</h4>

                    <p>
                        As with any project, I ran into some minor difficulties getting it up and running. But only one really stood out as a major theme.
                    </p>

                    <p>
                        I spent a very long time on styling/design.
                        This makes a lot of sense, given that design is not my strong suit. 
                        While considering my design struggles, I broke the problem down into two parts:
                    </p>
                    <ul className="writing__bullet">
                        <FontAwesomeIcon className="writing__bullet_icon" icon="dot-circle" />I can’t create the design ideas I have in my head.
                    </ul> 
                    <ul className="writing__bullet">
                        <FontAwesomeIcon className="writing__bullet_icon" icon="dot-circle" />I don’t have strong ideas about how this should look.
                    </ul> 


                    <p>
                        After a bit of consideration I decided that most of my struggles are with the latter shortcoming.  
                        I was actually very happy with how easy it was to create the designs I wanted with css.  
                        My problem was that I didn’t really know what would look good, so I ended up trying a lot of things which looked terrible and then deciding to go with something else.  
                        All in all, this was a pretty affirming experience, given that I’ve never manually styled anything for a client without a big set of existing styles like bootstrap.
                    </p>
                    <p>
                        For this project I decided against using any comprehensive css/styling framework, I wanted to build it up manually with scss, and make it look unique and my own.  
                        I started out using 
                            <a className="external_link" href="https://tachyons.io/">     
                                Tachyons
                            </a>
                        which is a very minimalist css framework.  
                        Rather than a big opinionated framework like bootstrap, Tachyons mostly just adds simple styles to classes, so you can add classes to your DOM elements rather than writing css. 
                    </p>

                    <p>
                        I quickly found that Tachyons didn’t really help me all that much though.  
                        I found its lack of comprehensiveness meant that it didn’t really do enough for me to use it at all.  
                        I think if I was more confident in what design I was going for, and I was doing less experimentation and messing around, Tachyons would have been more useful, so I’ll try it out again on a future project I’m sure.
                    </p>

                    <p>
                        At first, I stressed about making so many design commits.  
                        I felt like my messing around with the look so much was evidence that I was taking more time than I should - which is definitely true in some sense. 
                        I was recently listening to a podcast with Tania Rascia (who has an amazing developer blog which I certainly borrowed from a bit while designing this site’s layout) who said that she has made over 1000 commits on her personal blog, mostly to do with styling, which made me feel a lot better.
                    </p>
                    
                    <p>
                        Aside from the web design aspects, the project went fairly smoothly.  
                        I did spend a few days working on creating a custom webpack config, but that time was very intentional. 
                        I wanted to understand exactly what every line was doing, and why it was relevant to my project.  
                        Before this site, I hadn’t written my own webpack config, I’d only ever used 
                        <a className="external_link" href="https://github.com/facebook/create-react-app">
                            create-react-app 
                        </a>    
                        or worked on a react project which someone else had started.
                    </p>

                    <h4 className="article__subtitle">
                        Were the goals I had for the project achieved?
                    </h4>

                    <ul className="writing__bullet">
                        <FontAwesomeIcon className="writing__bullet_icon" icon="dot-circle" />Get something simple and functional up relatively quickly, and expand its functionality later. 
                    </ul> 

                    <p>
                        I didn’t really succeed on this goal.  
                        I didn’t succumb to feature creep, but it took me a long time to be okay with the design (as I’ve discussed above). 
                    </p>

                    <ul className="writing__bullet">
                        <FontAwesomeIcon className="writing__bullet_icon" icon="dot-circle" />Writings page, About me, Photo Gallery, React + React-Router FrontEnd, custom webpack config, No backend, responsive layout, mobile friendly, professional looking.
                    </ul> 

                    <p>
                        All of these criteria are met except for a photo page.  
                        I did actually code a React based photo slider, which works well, but which doesn’t look very good despite some nice photos I’ve taken.  
                        I think I’ll ask for some help from my girlfriend on the design aspects of it and try to ship that soon.
                    </p>

                    <ul className="writing__bullet">
                        <FontAwesomeIcon className="writing__bullet_icon" icon="dot-circle" />Understand thoroughly all the technologies I’m using, avoid libraries for small tasks
                    </ul> 
                    
                    <p>
                        I definitely achieved this goal, perhaps more than I should have.  
                        If I was going to make this type of site for a client, I would definitely try out 
                        <a className="external_link" href="https://github.com/gatsbyjs/gatsby">
                            Gatsby.js 
                        </a>
                        instead of doing everything manually.  
                        I think I’ve learned more by creating the site from scratch, but Gatsby makes much more sense for something this simple. 
                        I’d like to give it a try sometime soon, and maybe I can contribute to that project.  
                        Being able to upload blog pages using markdown files (which Gatsby allows) makes way more sense than creating pages manually for each blog post too. 
                    </p>

                    <ul className="writing__bullet">
                        <FontAwesomeIcon className="writing__bullet_icon" icon="dot-circle" />Complete the project, put it out into the world, try not to stress.
                    </ul> 


                    <p>
                        It exists! I did stress about it a fair bit though.  
                        Oh well, nothing to do but keep working on public projects, and moving forward.
                    </p>


                    <p>
                        Thanks for reading!
                    </p>



                </article>
            </div>
        </div>
    )
}


export default Writing



