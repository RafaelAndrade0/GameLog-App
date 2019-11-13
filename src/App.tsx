import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import './App.css';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';

import axios from 'axios';
import { IGame } from './models/game';
import { IResult } from './models/result';

const App: React.FC = () => {
	const [ games, setGames ] = useState<IGame[]>([]);

	useEffect(() => {
		const getRequest = async () => {
			const result = await axios.get<IResult<IGame[]>>('http://localhost:5000/api/v1/games');
			setGames(result.data.data);
		};
		getRequest();
	}, []);

	return (
		<Router>
			<Navbar title='GameLog' />
			<Container style={{ marginTop: '7em' }}>
				<Switch>
					<Route exact path='/'>
						<Home games={games} />
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
