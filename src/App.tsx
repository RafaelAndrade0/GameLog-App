import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import './App.css';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';

import GameDetails from './components/games/GameDetails';
import { IDeveloper } from './models/developer';
import LoginComponent from './components/auth/LoginComponent';
import { ScrollToTop } from './utils/scrollToTop';

import GameStore from './stores/gameStore';

import { observer } from 'mobx-react-lite';

const App: React.FC = () => {
	const gameStore = useContext(GameStore);
	const { games } = gameStore;

	const initialDeveloper: IDeveloper = { id: '', description: '', headquarters: '', name: '', website: '' };
	const [ developer, setDeveloper ] = useState<IDeveloper>(initialDeveloper);

	useEffect(
		() => {
			gameStore.loadGames(1);
		},
		[ gameStore ]
	);

	const setDeveloperDetails = (developer: IDeveloper) => {
		setDeveloper(developer);
	};

	return (
		<Router>
			<ScrollToTop />
			<Navbar title='GameLog' />
			<Container style={{ marginTop: '7em' }}>
				<Switch>
					<Route exact path='/login'>
						<LoginComponent />
					</Route>
					<Route exact path='/'>
						<Home games={games} developer={developer} setDeveloperDetails={setDeveloperDetails} />
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

export default observer(App);
