import React from 'react';
import { BrowserRouter as Router,
        Switch, 
        Route 
    } from 'react-router-dom';
import Writing from '../components/Writing';
import About from '../components/About';
import Secret from '../components/Secret';
import Photos from '../components/Photos';


export default function AppRouter() {
    return (
        <Router>
            <main className="main" >
                <Switch>
                    <Route 
                        exact 
                        path="/"
                        component = { About }
                    />
                    <Route 
                        path="/secret"
                        component={ Secret }
                    />
                    <Route 
                        path="/writing" 
                        component={ Writing }
                    />
                    <Route path="/photos"
                        component= { Photos }
                    />
                </Switch>
            </main>
        </Router>
    )
}