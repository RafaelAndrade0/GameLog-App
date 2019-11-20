import React, { FormEvent, useState, useEffect } from 'react';
import { Modal, Button, Form, Input, Grid, Header } from 'semantic-ui-react';
import { IResult } from '../../models/result';
import { IReview } from '../../models/review';

interface IProps {
	title: string;
	open: boolean;
	gameId: string;
	userId: string | undefined;
	handlecloseModal: (state: boolean) => void;
}

const AddReview: React.FC<IProps> = ({ open, handlecloseModal, title, gameId, userId }) => {
	const [ review, setReview ] = useState<IReview>({ game: gameId, score: 0, text: '', user: '' });

	const handleFormSubmit = () => {
		console.log(review);
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
				<Form.TextArea onChange={handleInputChange} placeholder={`Tell us about ${title}`} name='text' />
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
						/>
					</Grid.Column>
				</Grid>
			</Modal.Content>
			<Modal.Actions>
				<Button color='red' icon='times' content='Close' onClick={() => handlecloseModal(false)} />
				<Button type='submit' color='green' icon='save' content='Save' />
			</Modal.Actions>
		</Modal>
	);
};

export default AddReview;
