import React, { Fragment, useContext, useEffect } from 'react';
import { Card } from 'semantic-ui-react';
import { IGame } from '../../models/game';
import LoadingComponent from '../layout/LoadingComponent';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../../stores/rootStore';
import GameItem from './GameItem';
import { IDeveloper } from '../../models/developer';

interface Iprops {
	setDeveloperDetails: (developer: IDeveloper) => void;
}

const Games: React.FC<Iprops> = ({ setDeveloperDetails }) => {
	const rootStore = useContext(RootStoreContext);
	const { loadingInitial, games, loadGames, clearGames } = rootStore.gameStore;

	useEffect(
		() => {
			loadGames(1);
			return () => {
				clearGames();
			};
		},
		[ loadGames ]
	);

	if (loadingInitial || games === null) {
		return <LoadingComponent activeDimmer={true} text='Loading Games' inverted={true} />;
	}

	return (
		<Fragment>
			<Card.Group stackable itemsPerRow={3}>
				{games.map((game, index) => (
					<GameItem key={index} game={game} setDeveloperDetails={setDeveloperDetails} />
				))}
			</Card.Group>
		</Fragment>
	);
};

export default observer(Games);
