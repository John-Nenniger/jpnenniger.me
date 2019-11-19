import React from 'react';
import { BrowserRouter as Router,
        Switch, 
        Route 
    } from 'react-router-dom';
import Writing from '../components/Writing';
import About from '../components/About';
import Secret from '../components/Secret';
import Header from '../components/Header';
import AnimatedHeader from '../components/AnimatedHeader';
import Photos from '../components/Photos';
import SidePane from '../components/SidePane';
import MediaQuery from 'react-responsive';


export default function AppRouter() {
    return (
        <Router>
            <main className="main" >
                {/* <Header /> */}
                <Header />
                <div className="contents">
                    <Switch>
                        <Route 
                            exact 
                            path="/"
                            component = { Writing }
                        />
                        <Route 
                            path="/secret"
                            component={ Secret }
                        />
                        <Route 
                            path="/about" 
                            component={ About }
                        />
                        <Route path="/photos"
                            component= { Photos }
                        />
                    </Switch>
                </div>
            </main>
        </Router>
    )
}