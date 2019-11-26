import React, { useEffect, useState, useContext, Fragment } from 'react';
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

import { observer } from 'mobx-react-lite';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootStoreContext } from './stores/rootStore';
import Root from './components/pages/Root';

const App: React.FC = () => {
	const rootStore = useContext(RootStoreContext);
	const { gameStore } = rootStore;

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
			<ToastContainer />
			<ScrollToTop />
			<Route exact path='/' red>
				<Root />
			</Route>
			<Route
				exact
				path={'/(.+)'}
				render={() => (
					<Fragment>
						<Navbar title='GameLog' />
						<Container style={{ marginTop: '7em' }}>
							<Switch>
								<Route exact path='/home'>
									<Home
										games={games}
										developer={developer}
										setDeveloperDetails={setDeveloperDetails}
									/>
								</Route>
								<Route exact path='/about'>
									<About />
								</Route>
								<Route exact path='/login'>
									<LoginComponent />
								</Route>
								<Route path='/games/:id' component={GameDetails} />
							</Switch>
						</Container>
					</Fragment>
				)}
			/>
		</Router>
	);
};

export default observer(App);
