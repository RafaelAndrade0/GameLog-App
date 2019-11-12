import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import './App.css';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';

const App: React.FC = () => {
	return (
		<Router>
			<Navbar title='GameLog' />

			<Container text style={{ marginTop: '7em' }}>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/about'>
						<About />
					</Route>
				</Switch>
			</Container>
		</Router>
	);
};

export default App;
