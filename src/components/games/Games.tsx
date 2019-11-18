import React, { Fragment } from 'react';
import { Card } from 'semantic-ui-react';
import GameItem from './GameItem';
import { IGame } from '../../models/game';
import { IDeveloper } from '../../models/developer';

interface Iprops {
	games: IGame[];
	setDeveloperDetails: (developer: IDeveloper) => void;
}

const Games: React.FC<Iprops> = ({ games, setDeveloperDetails }) => {
	return (
		<Fragment>
			<Card.Group stackable itemsPerRow={3}>
				{games.map((game: IGame) => (
					<GameItem setDeveloperDetails={setDeveloperDetails} key={game.id} game={game} />
				))}
			</Card.Group>
		</Fragment>
	);
};

export default Games;
