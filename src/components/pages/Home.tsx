import React, { Fragment } from 'react';
import { Grid, Button, Icon } from 'semantic-ui-react';
import Games from '../games/Games';
import { IGame } from '../../models/game';
import { IPagination } from '../../models/pagination';
import GameSearch from '../games/GameSearch';
import DeveloperDetails from '../developers/DeveloperDetails';
import { IDeveloper } from '../../models/developer';

interface IProps {
	games: IGame[];
	developer: IDeveloper;
	pagination: IPagination;
	loading: boolean;
	addGame: (game: IGame) => void;
	listGames: (page: string | undefined | number) => void;
	setDeveloperDetails: (developer: IDeveloper) => void;
}

const Home: React.FC<IProps> = ({ games, addGame, loading, listGames, pagination, setDeveloperDetails, developer }) => {
	const nextPage = () => {
		// if (developer.id !== '') {
		// 	setDeveloperDetails({ id: '', description: '', headquarters: '', name: '', website: '' });
		// }
		listGames(pagination.nextPage);
	};

	const prevPage = () => {
		// if (developer.id !== '') {
		// 	setDeveloperDetails({ id: '', description: '', headquarters: '', name: '', website: '' });
		// }
		listGames(pagination.prevPage);
	};

	return (
		<Grid stackable>
			<Grid.Column width={6}>
				<GameSearch />
				<DeveloperDetails developer={developer} />
				{pagination.prevPage && (
					<Button animated floated='left' color='red' onClick={prevPage}>
						<Button.Content visible>Prev. Page</Button.Content>
						<Button.Content hidden>
							<Icon name='arrow left' />
						</Button.Content>
					</Button>
				)}
				{pagination.nextPage && (
					<Button animated floated='right' color='blue' onClick={nextPage}>
						<Button.Content visible>Next Page</Button.Content>
						<Button.Content hidden>
							<Icon name='arrow right' />
						</Button.Content>
					</Button>
				)}
			</Grid.Column>
			<Grid.Column width={10}>
				<Fragment>
					<Games setDeveloperDetails={setDeveloperDetails} games={games} />
				</Fragment>
			</Grid.Column>
		</Grid>
	);
};

export default Home;
