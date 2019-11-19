import React, { useEffect, useState, Fragment } from 'react';
import { RouteComponentProps } from 'react-router';
import { Segment, Item, Label, Container, Button, Icon } from 'semantic-ui-react';
import GamesApi from '../../api/agent';
import { IGame } from '../../models/game';
import { IResult } from '../../models/result';
import { Link } from 'react-router-dom';
import ReviewGame from '../reviews/GameReview';
import LoadingComponent from '../layout/LoadingComponent';

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
		plataform: [],
		title: '',
		id: '',
		photo: ''
	});

	const [ loadingGame, setLoadingGame ] = useState<boolean>(true);

	const getGame = async () => {
		const result: IResult<IGame> = await GamesApi.getGame(match.params.id);
		setSingleGame(result.data);
		setLoadingGame(false);
		// setTimeout(() => {
		// 	setLoadingGame(false);
		// }, 1500);
	};

	if (loadingGame) {
		return <LoadingComponent />;
	}

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
								{singleGame.plataform.map((plataform, index) => <Label key={index}>{plataform}</Label>)}
							</Item.Extra>
						</Item.Content>
					</Item>
				</Container>
			</Segment>

			<ReviewGame title={singleGame.title} />
		</Fragment>
	);
};

export default GameDetails;
