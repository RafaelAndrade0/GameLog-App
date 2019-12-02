import React, { useContext } from 'react';
import { Modal, Button, Form, Header, Message } from 'semantic-ui-react';
import { IReview } from '../../models/review';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../../stores/rootStore';

import { Form as FinalForm, Field } from 'react-final-form';
import { combineValidators, composeValidators, isRequired, hasLengthGreaterThan } from 'revalidate';
import TextAreaInput from '../../commom/form/TextAreaInput';
import TextInput from '../../commom/form/TextInput';

interface IProps {
	title: string;
	open: boolean;
	gameId: string;
	userId: string | undefined;
	handlecloseModal: (state: boolean) => void;
}

const AddReview: React.FC<IProps> = ({ open, title, gameId, handlecloseModal }) => {
	const rootStore = useContext(RootStoreContext);

	const { submitting, createReview } = rootStore.reviewStore;
	const { user, isLoggedIn } = rootStore.userStore;

	const handleFormSubmit = (review: IReview) => {
		review.game = gameId;
		review.user = user ? user._id : '';
		console.log(review);
		createReview(review);
	};

	const validate = combineValidators({
		text: composeValidators(
			isRequired({ message: 'Review is Required' }),
			hasLengthGreaterThan(20)({ message: 'Need to be at least 20 characters long' })
		)(),
		score: composeValidators(isRequired({ message: 'Score is Required' }))()
	});

	if (!isLoggedIn && open) {
		return (
			<Message
				error
				icon='attention'
				header='Hey, hey. Thats not possible.'
				content='You need to be logged in to post a review!'
			/>
		);
	}

	return (
		<Modal onSubmit={handleFormSubmit} open={open} onClose={() => handlecloseModal(false)} closeIcon>
			<Header icon='fire' color='red' content={`Add new review to ${title}`} as='h2' />
			<Modal.Content>
				<FinalForm
					onSubmit={handleFormSubmit}
					validate={validate}
					render={({ handleSubmit, invalid, pristine }) => (
						<Form size='large' onSubmit={handleSubmit}>
							<Field placeholder='Tell us about it' name='text' rows={3} component={TextAreaInput} />
							<Field placeholder='Score' name='score' type='number' width={3} component={TextInput} />
							<Button
								disabled={invalid || pristine || submitting}
								color='blue'
								fluid
								size='large'
								loading={submitting}
							>
								Submit Review!
							</Button>
						</Form>
					)}
				/>
			</Modal.Content>
		</Modal>
	);
};

export default observer(AddReview);
