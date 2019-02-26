import React from 'react';
import {render} from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

import data from './media/api.json';
import Home from './pages/container/Home';

render(<Home data={data} />, document.getElementById('home'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
