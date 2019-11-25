import React, { FormEvent, useState, useContext } from 'react';
import { Modal, Button, Form, Input, Grid, Header, Message } from 'semantic-ui-react';
import { IReview } from '../../models/review';

import ReviewStore from '../../stores/reviewStore';
import { observer } from 'mobx-react-lite';

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

	const reviewStore = useContext(ReviewStore);
	const { createReview, submitting } = reviewStore;

	const [ success, setSuccess ] = useState(false);

	const handleFormSubmit = () => {
		console.log(review);
		createReview(review).then(() => setSuccess(true));
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
		<Modal as={Form} onSubmit={handleFormSubmit} open={open} dimmer='blurring'>
			<Header icon='fire' color='red' content={`Add new review to ${title}`} as='h2' />
			<Modal.Content>
				<Message
					hidden={!success}
					positive
					icon='hand peace'
					header='Nice!'
					content='Review added with success!'
				/>

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
