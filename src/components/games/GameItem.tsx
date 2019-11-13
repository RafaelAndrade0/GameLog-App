import React, { Fragment } from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import { IGame } from '../../models/game';

interface Iprops {
	game: IGame;
}

const GameItem: React.FC<Iprops> = ({ game }) => {
	return (
		<Fragment>
			<Card>
				<Image src={`http://localhost:5000/uploads/${game.photo}`} wrapped ui={false} size='small' />
				{/* <Image src='https://via.placeholder.com/200' wrapped ui={false} /> */}
				<Card.Content>
					<Card.Header>{game.title}</Card.Header>
					<Card.Meta>
						<span className='date'>Subtitle</span>
					</Card.Meta>
					{/* <Card.Description>{game.description}</Card.Description> */}
					<Card.Description>Description</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<a>
						<Icon name='user' />
						Extra Content
					</a>
				</Card.Content>
			</Card>
		</Fragment>
	);
};

export default GameItem;
