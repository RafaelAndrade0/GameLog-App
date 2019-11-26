import React, { FormEvent, useState, useContext } from 'react';
import { Modal, Button, Form, Input, Grid, Header } from 'semantic-ui-react';
import { IReview } from '../../models/review';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../../stores/rootStore';

interface IProps {
	title: string;
	open: boolean;
	gameId: string;
	userId: string | undefined;
	handlecloseModal: (state: boolean) => void;
}

const AddReview: React.FC<IProps> = ({ open, handlecloseModal, title, gameId }) => {
	const [ review, setReview ] = useState<IReview>({
		game: gameId,
		score: 0,
		text: '',
		user: '5dc41a1582e6a234302d3e14'
	});

	const rootStore = useContext(RootStoreContext);

	const { createReview, submitting } = rootStore.reviewStore;

	const handleFormSubmit = () => {
		console.log(review);
		createReview(review);
	};

	const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.currentTarget;
		if (name === 'score') {
			setReview({ ...review, [name]: +value });
			return;
		}
		setReview({ ...review, [name]: value });
	};

	return (
		<Modal as={Form} onSubmit={handleFormSubmit} open={open}>
			<Header icon='fire' color='red' content={`Add new review to ${title}`} as='h2' />
			<Modal.Content>
				<Form.TextArea
					onChange={handleInputChange}
					placeholder={`Tell us about ${title}`}
					name='text'
					disabled={submitting}
				/>
				<Grid>
					<Grid.Column width={2}>
						<Input
							type='number'
							onChange={handleInputChange}
							name='score'
							icon='star'
							iconPosition='left'
							placeholder='Score'
							label={{ basic: true, content: '/10' }}
							labelPosition='right'
							disabled={submitting}
						/>
					</Grid.Column>
				</Grid>
			</Modal.Content>
			<Modal.Actions>
				<Button color='red' icon='times' content='Close' onClick={() => handlecloseModal(false)} />
				<Button type='submit' color='green' icon='save' content='Save' loading={submitting} />
			</Modal.Actions>
		</Modal>
	);
};

export default observer(AddReview);
