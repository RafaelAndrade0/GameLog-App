import React, { Fragment, useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import Games from '../games/Games';
import { IGame } from '../../models/game';
import GameSearch from '../games/GameSearch';
import DeveloperDetails from '../developers/DeveloperDetails';
import { IDeveloper } from '../../models/developer';
import GameItem from '../games/GameItem';
import Pagination from '../layout/Pagination';

import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../../stores/rootStore';

interface IProps {
	games: IGame[];
	developer: IDeveloper;
	setDeveloperDetails: (developer: IDeveloper) => void;
}

const Home: React.FC<IProps> = ({ games, setDeveloperDetails, developer }) => {
	const rootStore = useContext(RootStoreContext);
	const { loadGames, pagination } = rootStore.gameStore;

	const nextPage = () => {
		loadGames(pagination.nextPage);
	};

	const prevPage = () => {
		loadGames(pagination.prevPage);
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

export default observer(Home);
