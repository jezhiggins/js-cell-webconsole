import { h } from 'preact';
import { createContext } from 'preact'
import {useState} from "preact/hooks";

import Header from './header';

// Code-splitting is automated for `routes` directory

import Editor from './editor'
import LexViewer from './lex-viewer'
import AstViewer from "./ast-viewer";

const Code = createContext('')

const App = () => {
	const [cell, setCell] = useState('')
	return (
		<div id="app">
			<Header />
			<Code.Provider value={{ cell, setCell }}>
				<Editor code={Code}/>
				<LexViewer code={Code}/>
        <AstViewer code={Code}/>
			</Code.Provider>
		</div>
	)
}

export default App;
