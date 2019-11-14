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
            <main className="main" >
                <Header/>
                <MediaQuery minDeviceWidth={ 600 }>
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