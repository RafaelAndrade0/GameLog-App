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
import GamesApi from './api/agent';
import { async } from 'q';

const App: React.FC = () => {
	const [ games, setGames ] = useState<IGame[]>([]);

	useEffect(() => {
		const listGames = async () => {
			const result: IResult<IGame[]> = await GamesApi.list();
			setGames(result.data);
		};
		listGames();
	}, []);

	const handleAddGame = async (game: IGame) => {
		setGames([ ...games, game ]);
		await GamesApi.create(game);
	};

	return (
		<Router>
			<Navbar title='GameLog' />
			<Container style={{ marginTop: '7em' }}>
				<Switch>
					<Route exact path='/'>
						<Home addGame={handleAddGame} games={games} />
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
