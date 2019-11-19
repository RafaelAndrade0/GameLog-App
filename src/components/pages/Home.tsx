import React, { Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
import Games from '../games/Games';
import { IGame } from '../../models/game';
import { IPagination } from '../../models/pagination';
import GameSearch from '../games/GameSearch';
import DeveloperDetails from '../developers/DeveloperDetails';
import { IDeveloper } from '../../models/developer';
import GameItem from '../games/GameItem';
import Pagination from '../layout/Pagination';

interface IProps {
	games: IGame[];
	developer: IDeveloper;
	pagination: IPagination;
	loading: boolean;
	addGame: (game: IGame) => void;
	listGames: (page: string | undefined | number) => void;
	setDeveloperDetails: (developer: IDeveloper) => void;
}

const Home: React.FC<IProps> = ({ games, listGames, pagination, setDeveloperDetails, developer }) => {
	const nextPage = () => {
		listGames(pagination.nextPage);
	};

	const prevPage = () => {
		listGames(pagination.prevPage);
	};

	return (
		<Grid stackable>
			<Grid.Column width={6}>
				<GameSearch />
				<DeveloperDetails developer={developer} />
				<Pagination pagination={pagination} prevPage={prevPage} nextPage={nextPage} />
			</Grid.Column>
			<Grid.Column width={10}>
				<Fragment>
					<Games
						games={games}
						renderItem={(game, index) => (
							<GameItem key={index} game={game} setDeveloperDetails={setDeveloperDetails} />
						)}
					/>
				</Fragment>
			</Grid.Column>
		</Grid>
	);
};

export default Home;
