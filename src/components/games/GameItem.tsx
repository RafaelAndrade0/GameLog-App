import React, { Fragment } from 'react';
import { Card, Image, Icon, Button, Rating, List } from 'semantic-ui-react';
import { IGame } from '../../models/game';
import { Link } from 'react-router-dom';
import { IDeveloper } from '../../models/developer';

interface Iprops {
	game: IGame;
	setDeveloperDetails: (developer: IDeveloper) => void;
}

const GameItem: React.FC<Iprops> = ({ game, setDeveloperDetails }) => {
	return (
		<Fragment>
			<Card>
				<Image src={`http://localhost:5000/uploads/${game.photo}`} wrapped ui={false} size='small' />
				{/* <Image src='https://via.placeholder.com/200' wrapped ui={false} /> */}
				<Card.Content>
					<Card.Header>{game.title}</Card.Header>
					<Rating icon='star' defaultRating={3} maxRating={4} />
					<Card.Description>
						<List>
							{game.developer.map((developer: IDeveloper, index: number) => (
								<List.Item key={index}>
									<List.Icon name='tag' />
									<List.Content>
										<List.Header onClick={() => setDeveloperDetails(developer)} as='a'>
											{developer.name}
										</List.Header>
									</List.Content>
								</List.Item>
							))}
						</List>
					</Card.Description>
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
