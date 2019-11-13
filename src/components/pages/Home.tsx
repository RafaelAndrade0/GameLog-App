import React, { Fragment } from 'react';
import { Header, Grid } from 'semantic-ui-react';
import GameSearch from '../games/GameSearch';
import Games from '../games/Games';
import { IGame } from '../../models/game';
import GameForm from '../games/GameForm';

interface IProps {
	games: IGame[];
}

const Home: React.FC<IProps> = ({ games }) => {
	return (
		<Grid stackable>
			<Grid.Column width={6}>
				<GameForm />
			</Grid.Column>
			<Grid.Column width={10}>
				<Fragment>
					<GameSearch />
					<Header as='h3'>Results</Header>
					<Games games={games} />
				</Fragment>
			</Grid.Column>
		</Grid>
	);
};

export default Home;
