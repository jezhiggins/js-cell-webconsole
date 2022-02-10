import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import Editor from './editor'

const App = () => (
	<div id="app">
		<Header />
		<Editor />
	</div>
)

export default App;
