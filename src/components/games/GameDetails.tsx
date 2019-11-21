import React, { useEffect, useState, Fragment } from 'react';
import { RouteComponentProps } from 'react-router';
import { Segment, Item, Label, Container, Button, Icon } from 'semantic-ui-react';
import GamesApi from '../../api/agent';
import { IGame } from '../../models/game';
import { IResult } from '../../models/result';
import { Link } from 'react-router-dom';
import ReviewGame from '../reviews/GameReview';
import LoadingComponent from '../layout/LoadingComponent';
import AddReview from '../reviews/AddReview';

interface Iprops {
	id: string;
}

const GameDetails: React.FC<RouteComponentProps<Iprops>> = ({ match }) => {
	useEffect(
		() => {
			const getGame = async () => {
				const result: IResult<IGame> = await GamesApi.getGame(match.params.id);
				setSingleGame(result.data);
				// setLoadingGame(false);
				setTimeout(() => {
					setLoadingGame(false);
				}, 1500);
			};
			getGame();
		},
		[ match.params.id ]
	);

	const [ singleGame, setSingleGame ] = useState<IGame>({
		genre: '',
		description: '',
		developer: [],
		initialrelease: '',
		plataform: [],
		title: '',
		id: '',
		photo: '',
		reviews: []
	});

	const [ loadingGame, setLoadingGame ] = useState<boolean>(true);

	const [ openModal, setOpenModal ] = useState<boolean>(false);

	const handleModal = (state: boolean) => {
		setOpenModal(state);
	};

	if (loadingGame) {
		return <LoadingComponent activeDimmer={true} inverted={false} text='Loading Details' />;
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

			<Button animated='vertical' floated='right' color='red' onClick={() => handleModal(true)}>
				<Button.Content visible>Add Review</Button.Content>
				<Button.Content hidden>
					<Icon name='fire' />
				</Button.Content>
			</Button>

			<AddReview
				title={singleGame.title}
				open={openModal}
				handlecloseModal={handleModal}
				gameId={singleGame.id}
				userId=''
			/>

			<Segment clearing>
				<Container>
					<Item>
						<Item.Image
							bordered
							size='small'
							floated='left'
							src={`https://via.placeholder.com/200`}
							// src={`http://localhost:5000/uploads/${singleGame.photo}`}
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

			<ReviewGame title={singleGame.title} gameId={singleGame.id} />
		</Fragment>
	);
};

export default GameDetails;
