import React, { Fragment } from 'react';
import { Header } from 'semantic-ui-react';
import GameSearch from '../games/GameSearch';
import Games from '../games/Games';

const Home: React.FC = () => {
	return (
		<Fragment>
			<GameSearch />
			<Header as='h3'>Results</Header>
			<Games />
		</Fragment>
	);
};

export default Home;
