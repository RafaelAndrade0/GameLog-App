import React, { Fragment } from 'react';
import { Card } from 'semantic-ui-react';
import { IGame } from '../../models/game';

interface Iprops {
	games: IGame[];
	renderItem: (game: IGame, index: number) => JSX.Element;
}

const Games: React.FC<Iprops> = ({ games, renderItem }) => {
	return (
		<Fragment>
			<Card.Group stackable itemsPerRow={3}>
				{games.map((game, index) => renderItem(game, index))}
			</Card.Group>
		</Fragment>
	);
};

export default Games;
