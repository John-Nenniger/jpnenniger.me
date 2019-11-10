import React from 'react';
import { BrowserRouter as Router,
        Switch, 
        Route 
    } from 'react-router-dom';
import Blog from '../components/Blog';
import About from '../components/About';
import Secret from '../components/Secret';
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
                    <Route 
                        exact 
                        path="/"
                        component = { Blog }
                    />
                    <Route 
                        path="/secret"
                        component={Secret}
                    />
                    <Route 
                        path="/about" 
                        component={ About }
                    />
                    <Route path="/photos" />
                </Switch>
            </main>
        </Router>
    )
}