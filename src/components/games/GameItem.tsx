import React, { Fragment } from 'react';
import { Card, Image, Icon, Button, Rating } from 'semantic-ui-react';
import { IGame } from '../../models/game';
import { Link } from 'react-router-dom';

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
					<Rating icon='star' defaultRating={3} maxRating={4} />
					{/* <Card.Meta>
						<span className='date'>Subtitle</span>
					</Card.Meta> */}
					{/* <Card.Description>{game.description}</Card.Description> */}
					{/* <Card.Description>Description</Card.Description> */}
				</Card.Content>
				<Card.Content extra>
					<Link to={`games/${game.id}`}>
						<Button fluid basic color='blue'>
							<Icon name='search' />
						</Button>
					</Link>
				</Card.Content>
			</Card>
		</Fragment>
	);
};

export default GameItem;
