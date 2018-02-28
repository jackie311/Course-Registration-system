import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import './styles.js';
import './styles/courseStyle.css'


import App from './App/App';
import axios from 'axios';

axios.defaults.baseURL ='';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root'),
);
