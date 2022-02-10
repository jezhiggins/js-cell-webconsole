import { h } from 'preact';
import { createContext } from 'preact'
import {useState} from "preact/hooks";

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import Editor from './editor'
import Viewer from './viewer'

const Code = createContext('')

const App = () => {
	const [cell, setCell] = useState('')
	return (
		<div id="app">
			<Header />
			<Code.Provider value={{ cell, setCell }}>
				<Editor code={Code}/>
				<Viewer code={Code}/>
			</Code.Provider>
		</div>
	)
}

export default App;
