import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './store/store';

//Component
import { App } from './App';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//CSS
import './assets/css/index.css';
import './assets/css/Main.css';

//FontAwesome
import './plugins/fontAwesome';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
