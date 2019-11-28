import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faGlasses, faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faEnvelope, faGlasses, faArrowCircleLeft, faArrowCircleRight)

ReactDOM.render(<AppRouter />, document.getElementById('app'))
