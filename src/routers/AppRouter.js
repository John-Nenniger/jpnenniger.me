import React from 'react';
import { BrowserRouter as Router,
        Switch, 
        Link,
        Route 
    } from 'react-router-dom';


export default function AppRouter() {
    return (
        // TODO: Should I use media queries to render 
        // different components for different sizes of screen? 
        // OR use a different system for mobile design 
        <Router>
            <main>
                <div> {/* Nav section */}
                    <h1>I am a Navbar!</h1>
                </div>
                <div>
                    <h2>Here's where I'll add the sidebar</h2>
                </div>
                <Switch>
                    <Route path="/secret">
                        <h1></h1>
                    </Route>
                    <Route path="/resume" >
                        <h1>About Me/Resume</h1>
                    </Route>
                    <Route path="/">
                        <h1>Home (Blog)</h1>
                    </Route>
                </Switch>
            </main>
        </Router>
    )
}