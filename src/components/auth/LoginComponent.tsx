import React, { useContext, FormEvent, useState } from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../../stores/rootStore';
import { IUserFormValues } from '../../models/user';

import { Form as FinalForm, Field } from 'react-final-form';
import TextInput from '../../commom/form/TextInput';

const LoginComponent: React.FC = () => {
	const rootStore = useContext(RootStoreContext);
	const { login, loading } = rootStore.userStore;

	const handleFinalFormSubmit = (formValue: IUserFormValues) => {
		login(formValue);
	};

	return (
		<Grid className='login' textAlign='center' verticalAlign='middle'>
			<Grid.Column>
				<FinalForm
					onSubmit={handleFinalFormSubmit}
					render={({ handleSubmit }) => (
						<Form size='large' onSubmit={handleSubmit}>
							<Field
								// onChange={handleInputChange}
								// fluid
								// icon='mail'
								// iconPosition='left'
								placeholder='E-mail address'
								name='email'
								component={TextInput}
							/>
							<Field
								// onChange={handleInputChange}
								// fluid
								// icon='lock'
								// iconPosition='left'
								placeholder='Password'
								type='password'
								name='password'
								component={TextInput}
							/>

							<Button color='blue' fluid size='large' loading={loading}>
								Login
							</Button>
						</Form>
					)}
				/>
			</Grid.Column>
		</Grid>
	);
};

export default observer(LoginComponent);
