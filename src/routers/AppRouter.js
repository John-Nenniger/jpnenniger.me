import React from 'react';
import { BrowserRouter as Router,
        Switch, 
        Route 
    } from 'react-router-dom';
import Blog from '../components/Blog';
import About from '../components/About';
import Secret from '../components/Secret';
import Header from '../components/Header';
import SidePane from '../components/SidePane';
import MediaQuery from 'react-responsive';

export default function AppRouter() {
    return (
        <Router>
            <main>
                <Header/>
                {/*Here I'm going to render SidePane unless on Mobile */}
                <MediaQuery minDeviceWidth={600}>
                   <SidePane/>
                </MediaQuery>
                <Switch>
                    <Route 
                        exact 
                        path="/"
                        component = { Blog }
                    />
                    <Route 
                        path="/secret"
                        component={ Secret }
                    />
                    {/* and Render an about me page only if we're on Mobile and my 
                    sidepanel is not being rendered
                    */}
                    <MediaQuery maxDeviceWidth={600}>
                        <Route 
                            path="/about" 
                            component={ About }
                        />
                    </MediaQuery>
                    <Route path="/photos" />
                </Switch>
            </main>
        </Router>
    )
}