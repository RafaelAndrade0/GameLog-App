import React, { useEffect, useState, Fragment } from 'react';
import { RouteComponentProps } from 'react-router';
import { Segment, Item, Label, Container, Image, Button, Icon } from 'semantic-ui-react';
import GamesApi from '../../api/agent';
import { IGame } from '../../models/game';
import { IResult } from '../../models/result';
import { Link } from 'react-router-dom';

interface Iprops {
	id: string;
}

const GameDetails: React.FC<RouteComponentProps<Iprops>> = ({ match }) => {
	useEffect(() => {
		getGame();
	}, []);

	const [ singleGame, setSingleGame ] = useState<IGame>({
		genre: '',
		description: '',
		developer: [],
		initialrelease: '',
		plataform: '',
		title: '',
		id: '',
		photo: ''
	});

	const getGame = async () => {
		const result: IResult<IGame> = await GamesApi.getGame(match.params.id);
		setSingleGame(result.data);
	};

	return (
		<Fragment>
			<Link to='/'>
				<Button animated color='orange'>
					<Button.Content visible>Go Back!</Button.Content>
					<Button.Content hidden>
						<Icon name='arrow left' />
					</Button.Content>
				</Button>
			</Link>

			<Segment clearing>
				<Container>
					<Item>
						<Item.Image
							bordered
							size='small'
							floated='left'
							src={`http://localhost:5000/uploads/${singleGame.photo}`}
						/>
						<Item.Content>
							<Item.Header as='h2'>{singleGame.title}</Item.Header>
							<Item.Description>{singleGame.description}</Item.Description>
							<Item.Extra>
								<Label>{singleGame.plataform}</Label>
							</Item.Extra>
						</Item.Content>
					</Item>
				</Container>
			</Segment>
		</Fragment>
	);
};

export default GameDetails;
