import React, { Fragment } from 'react';
import { Header } from 'semantic-ui-react';
import GameSearch from '../games/GameSearch';
import Games from '../games/Games';
import { IGame } from '../../models/game';

interface IProps {
	games: IGame[];
}

const Home: React.FC<IProps> = ({ games }) => {
	return (
		<Fragment>
			<GameSearch />
			<Header as='h3'>Results</Header>
			<Games games={games} />
		</Fragment>
	);
};

export default Home;
