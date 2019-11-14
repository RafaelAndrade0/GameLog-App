import React, { Fragment } from 'react';
import { Grid, Button, Icon } from 'semantic-ui-react';
import Games from '../games/Games';
import { IGame } from '../../models/game';
import GameForm from '../games/GameForm';
import { IPagination } from '../../models/pagination';

interface IProps {
	games: IGame[];
	pagination: IPagination;
	loading: boolean;
	addGame: (game: IGame) => void;
	listGames: (page: string | undefined | number) => void;
}

const Home: React.FC<IProps> = ({ games, addGame, loading, listGames, pagination }) => {
	const nextPage = () => {
		listGames(pagination.nextPage);
	};

	const prevPage = () => {
		listGames(pagination.prevPage);
	};

	return (
		<Grid stackable>
			<Grid.Column width={6}>
				<GameForm addGame={addGame} loading={loading} />
			</Grid.Column>
			<Grid.Column width={10}>
				<Fragment>
					{/* <GameSearch /> */}
					<Grid columns={2}>
						<Grid.Column>
							{pagination.prevPage && (
								<Button animated floated='left' color='red' onClick={prevPage}>
									<Button.Content visible>Previous Page</Button.Content>
									<Button.Content hidden>
										<Icon name='arrow left' />
									</Button.Content>
								</Button>
							)}
						</Grid.Column>
						<Grid.Column>
							{pagination.nextPage && (
								<Button animated floated='right' color='blue' onClick={nextPage}>
									<Button.Content visible>Next Page</Button.Content>
									<Button.Content hidden>
										<Icon name='arrow right' />
									</Button.Content>
								</Button>
							)}
						</Grid.Column>
					</Grid>
					<Games games={games} />
				</Fragment>
			</Grid.Column>
		</Grid>
	);
};

export default Home;
