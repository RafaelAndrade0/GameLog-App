import React, { useEffect, useState, Fragment, useContext, useRef } from 'react';
import { RouteComponentProps } from 'react-router';
import { Segment, Item, Label, Container, Button, Icon, Statistic, Grid, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LoadingComponent from '../layout/LoadingComponent';
import AddReview from '../reviews/AddReview';
import { SemanticCOLORS } from 'semantic-ui-react/dist/commonjs/generic';

import { observer } from 'mobx-react-lite';
import GameReview from '../reviews/GameReview';
import { RootStoreContext } from '../../stores/rootStore';

interface Iprops {
	id: string;
}

const GameDetails: React.FC<RouteComponentProps<Iprops>> = ({ match }) => {
	const rootStore = useContext(RootStoreContext);
	const { selectedGame, loadingInitial, loadGame, clearSelectedGame, updateGamePhoto } = rootStore.gameStore;

	const refInput = useRef<HTMLInputElement>(null);

	useEffect(
		() => {
			loadGame(match.params.id);

			return () => {
				clearSelectedGame();
			};
		},
		[ loadGame, match.params.id, clearSelectedGame ]
	);

	const [ openModal, setOpenModal ] = useState<boolean>(false);
	const [ image, setImage ] = useState<File>();

	const handleModal = (state: boolean) => {
		setOpenModal(state);
	};

	const handleScoreColor = (score: number): SemanticCOLORS => {
		if (score >= 7) {
			return 'green';
		} else if (score >= 5 && score < 7) {
			return 'yellow';
		} else {
			return 'red';
		}
	};

	const changeInputImage = () => {
		if (refInput.current && refInput.current.files) {
			setImage(refInput.current.files[0]);
		}
	};

	const submitImage = () => {
		console.log(image);
		const file = new FormData();
		if (image) {
			file.set('file', image);
			updateGamePhoto(match.params.id, file);
			setImage(undefined);
		}
	};

	if (loadingInitial || !selectedGame) {
		return <LoadingComponent activeDimmer={true} inverted={false} text='Loading Details' />;
	}

	return (
		<Fragment>
			<Link to='/games'>
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
				title={selectedGame.title}
				open={openModal}
				handlecloseModal={handleModal}
				gameId={selectedGame.id}
				userId=''
			/>

			<Segment clearing piled>
				<Label color='blue' ribbon>
					About The Game
				</Label>
				<Container>
					<Grid columns={2} stackable>
						<Grid.Column width={14}>
							<Item>
								<Item.Image
									bordered
									size='small'
									floated='left'
									// src={`https://via.placeholder.com/200`}
									src={`http://localhost:5000/uploads/${selectedGame.photo}?${new Date().getTime()}`}
								/>

								<Item.Content>
									{/* <Item.Header as='h2'>{selectedGame!.title}</Item.Header> */}
									<Item.Description>{selectedGame.description}</Item.Description>
									<Item.Extra>
										{selectedGame.plataform.map((plataform, index) => (
											<Label key={index}>{plataform}</Label>
										))}
									</Item.Extra>
								</Item.Content>
							</Item>

							<Form onSubmit={submitImage} style={{ marginTop: '2em' }}>
								<Label
									color='yellow'
									onClick={() => refInput.current!.click()}
									size='large'
									style={{ cursor: 'pointer' }}
								>
									<Icon name='file' /> Upload Photo
								</Label>
								<input ref={refInput} type='file' hidden onChange={changeInputImage} />

								<Button
									circular
									disabled={image ? false : true}
									loading={loadingInitial}
									type='submit'
									size='small'
								>
									Ok
								</Button>
								{image && `${image.name}`}
							</Form>
						</Grid.Column>
						<Grid.Column width={2}>
							{selectedGame.averageScore && (
								<Statistic
									color={handleScoreColor(selectedGame.averageScore)}
									floated='right'
									size='tiny'
								>
									<Statistic.Value>
										<Icon name='star' />
										{Math.round(selectedGame.averageScore * 10) / 10}
									</Statistic.Value>
									<Statistic.Label>User Score</Statistic.Label>
								</Statistic>
							)}
						</Grid.Column>
					</Grid>
				</Container>
			</Segment>

			<GameReview title={selectedGame.title} gameId={selectedGame.id} />
		</Fragment>
	);
};

export default observer(GameDetails);
