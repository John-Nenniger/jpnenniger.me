import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faGlasses, faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faEnvelope, faGlasses, faArrowCircleLeft, faArrowCircleRight)


// this bit of DOM manipulation is not a good idea, but is a quick fix
// so that I don't have to dive back into webpack config again right this moment
// TODO: Remove the following 3 lines of code and instead add a template HTML file to the 
// webpack build

let appNode = document.createElement("div");
appNode.setAttribute("id", "app")
document.body.appendChild(appNode)


ReactDOM.render(<AppRouter />, document.getElementById('app'))
