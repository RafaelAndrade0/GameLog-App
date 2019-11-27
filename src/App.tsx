import React, { useEffect, useState, useContext, Fragment } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import './App.css';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';

import GameDetails from './components/games/GameDetails';
import { IDeveloper } from './models/developer';
import { ScrollToTop } from './utils/scrollToTop';

import { observer } from 'mobx-react-lite';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootStoreContext } from './stores/rootStore';
import Root from './components/pages/Root';
import LoadingComponent from './components/layout/LoadingComponent';
import NotFound from './components/pages/NotFound';

const App: React.FC = () => {
	const rootStore = useContext(RootStoreContext);

	const { setAppLoaded, token, appLoaded } = rootStore.commomStore;
	const { getUser } = rootStore.userStore;

	const initialDeveloper: IDeveloper = { id: '', description: '', headquarters: '', name: '', website: '' };
	const [ developer, setDeveloper ] = useState<IDeveloper>(initialDeveloper);

	useEffect(
		() => {
			if (token) {
				getUser().finally(() => setAppLoaded());
			} else {
				setAppLoaded();
			}
		},
		[ getUser, setAppLoaded, token ]
	);

	const setDeveloperDetails = (developer: IDeveloper) => {
		setDeveloper(developer);
	};

	if (!appLoaded) {
		return <LoadingComponent activeDimmer={true} text='Loading App' inverted={true} />;
	}

	return (
		<Fragment>
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
									<Home developer={developer} setDeveloperDetails={setDeveloperDetails} />
								</Route>
								<Route exact path='/about'>
									<About />
								</Route>
								<Route path='/games/:id' component={GameDetails} />
								<Route path='*' component={NotFound} />
							</Switch>
						</Container>
					</Fragment>
				)}
			/>
		</Fragment>
	);
};

export default withRouter(observer(App));
