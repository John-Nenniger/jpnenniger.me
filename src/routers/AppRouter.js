import React from 'react';
import { BrowserRouter as Router,
        Switch, 
        Route 
    } from 'react-router-dom';
// Media Queries can go within each component
// import MediaQuery from 'react-responsive';


export default function AppRouter() {
    return (
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