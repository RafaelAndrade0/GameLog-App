import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import './App.css';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';

import { IGame } from './models/game';
import { IResult } from './models/result';
import GamesApi from './api/agent';
import GameDetails from './components/games/GameDetails';
import { IPagination } from './models/pagination';

const App: React.FC = () => {
	const [ games, setGames ] = useState<IGame[]>([]);
	const [ pagination, setPagination ] = useState<IPagination>({ baseUrl: '', page: 1 });
	const [ loading, setLoading ] = useState<boolean>(false);

	useEffect(() => {
		listGames(1);
	}, []);

	const listGames = async (pageNumber: string | undefined | number) => {
		const result: IResult<IGame[]> = await GamesApi.list(pageNumber);
		setGames(result.data);
		setPagination(result.pagination);
	};

	const handleAddGame = async (game: IGame) => {
		setLoading(true);
		const newGame: IResult<IGame> = await GamesApi.create(game);
		setGames([ ...games, newGame.data ]);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};
	return (
		<Router>
			<Navbar title='GameLog' />
			<Container style={{ marginTop: '7em' }}>
				<Switch>
					<Route exact path='/'>
						<Home
							pagination={pagination}
							listGames={listGames}
							addGame={handleAddGame}
							games={games}
							loading={loading}
						/>
					</Route>
					<Route exact path='/about'>
						<About />
					</Route>
					<Route path='/games/:id' component={GameDetails} />
				</Switch>
			</Container>
		</Router>
	);
};

export default App;
