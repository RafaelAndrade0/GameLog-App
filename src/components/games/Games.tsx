import React, { Fragment, useContext } from 'react';
import { Card } from 'semantic-ui-react';
import { IGame } from '../../models/game';
import LoadingComponent from '../layout/LoadingComponent';

import GameStore from '../../stores/gameStore';
import { observer } from 'mobx-react-lite';

interface Iprops {
	games: IGame[];
	renderItem: (game: IGame, index: number) => JSX.Element;
}

const Games: React.FC<Iprops> = ({ games, renderItem }) => {
	const gameStore = useContext(GameStore);

	if (gameStore.loadingInitial) {
		return <LoadingComponent activeDimmer={true} text='Loading Games' inverted={true} />;
	}

	return (
		<Fragment>
			<Card.Group stackable itemsPerRow={3}>
				{games.map((game, index) => renderItem(game, index))}
			</Card.Group>
		</Fragment>
	);
};

export default observer(Games);
