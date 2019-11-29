import React, { useContext } from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';

import { Form as FinalForm, Field } from 'react-final-form';
import TextInput from '../../commom/form/TextInput';

import { combineValidators, isRequired, composeValidators, matchesPattern, hasLengthGreaterThan } from 'revalidate';
import { IUserFormValues } from '../../models/user';
import { RootStoreContext } from '../../stores/rootStore';
import { observer } from 'mobx-react-lite';

const RegisterComponent: React.FC = () => {
	const rootStore = useContext(RootStoreContext);
	const { register, loading } = rootStore.userStore;

	const handleFinalFormSubmit = (formValue: IUserFormValues) => {
		console.log(formValue);
		register(formValue);
	};

	const validate = combineValidators({
		name: composeValidators(
			isRequired({ message: 'Name is Required!' }),
			hasLengthGreaterThan(5)({ message: 'Need to be at least 6 characters long' })
		)(),
		email: composeValidators(
			isRequired({ message: 'Email is Required!' }),
			matchesPattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)({ message: 'Needs to be a valid email' })
		)(),
		password: composeValidators(
			isRequired({ message: 'Password is Required' }),
			hasLengthGreaterThan(5)({ message: 'Need to be at least 6 characters long' })
		)()
	});

	return (
		<Grid className='login' textAlign='center' verticalAlign='middle'>
			<Grid.Column>
				<FinalForm
					validate={validate}
					onSubmit={handleFinalFormSubmit}
					render={({ handleSubmit, invalid, pristine }) => (
						<Form size='large' onSubmit={handleSubmit}>
							<Field placeholder='Name' name='name' component={TextInput} />
							<Field placeholder='E-mail address' name='email' component={TextInput} />
							<Field placeholder='Password' type='password' name='password' component={TextInput} />

							<Button
								disabled={invalid || pristine || loading}
								color='blue'
								fluid
								size='large'
								loading={loading}
							>
								Register
							</Button>
						</Form>
					)}
				/>
			</Grid.Column>
		</Grid>
	);
};

export default observer(RegisterComponent);
