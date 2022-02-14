import { h } from 'preact';
import { createContext } from 'preact'
import {useState} from "preact/hooks";

import Header from './header';
import Editor from './editor';
import LexViewer from './lex-viewer';
import AstViewer from "./ast-viewer";
import EvalViewer from "./eval-viewer";
import style from './style.css';
import {Tab} from "./tabs/Tab";
import {Tabs} from "./tabs/Tabs";

const Code = createContext('')

const App = () => {
	const [cell, setCell] = useState('')
	const [activeTab, setActiveTab] = useState(0)
	return (
		<div id="app">
			<Header />
			<Code.Provider value={{ cell, setCell }}>
				<div class={style.container}>
					<div class={style.main}>
						<Editor code={Code}/>
						<EvalViewer code={Code}/>
					</div>
					<div class={style.sidebar}>
						<Tabs activeTab={activeTab} onChangeTab={tabId => setActiveTab(tabId)}>
							<Tab title="Lex"><LexViewer path="/" code={Code}/></Tab>
							<Tab title="AST"><AstViewer path="/ast" code={Code}/></Tab>
						</Tabs>
					</div>
				</div>
			</Code.Provider>
		</div>
	)
}

export default App;
