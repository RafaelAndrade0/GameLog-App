import React, { Fragment } from 'react';
import { Card } from 'semantic-ui-react';
import { IGame } from '../../models/game';
import LoadingComponent from '../layout/LoadingComponent';

interface Iprops {
	games: IGame[];
	renderItem: (game: IGame, index: number) => JSX.Element;
	loading: boolean;
}

const Games: React.FC<Iprops> = ({ games, renderItem, loading }) => {
	if (loading) {
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

export default Games;
