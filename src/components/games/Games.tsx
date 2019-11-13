import React, { Fragment } from 'react';
import { Card } from 'semantic-ui-react';
import GameItem from './GameItem';
import { IGame } from '../../models/game';

interface Iprops {
	games: IGame[];
}

const Games: React.FC<Iprops> = ({ games }) => {
	return (
		<Fragment>
			<Card.Group stackable itemsPerRow={2}>
				{games.map((game: IGame) => <GameItem key={game.id} game={game} />)}
			</Card.Group>
		</Fragment>
	);
};

export default Games;
