import React, { Fragment } from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';
import GameItem from './GameItem';

const Games: React.FC = () => {
	return (
		<Fragment>
			<Card.Group stackable itemsPerRow={3}>
				<GameItem />
				<GameItem />
				<GameItem />
				<GameItem />
				<GameItem />
				<GameItem />
			</Card.Group>
		</Fragment>
	);
};

export default Games;
