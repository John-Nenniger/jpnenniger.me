import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import 'tachyons/css/tachyons.min.css';
import './styles/styles.scss';
import '@fortawesome/fontawesome-free'; // should get rid of this
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faGlasses} from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faGlasses, fab)

ReactDOM.render(<AppRouter />, document.getElementById('app'))
