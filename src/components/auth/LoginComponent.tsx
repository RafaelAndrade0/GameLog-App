import React, { useContext, FormEvent, useState } from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../../stores/rootStore';
import { IUserFormValues } from '../../models/user';

const LoginComponent: React.FC = () => {
	const rootStore = useContext(RootStoreContext);
	const { login, loading } = rootStore.userStore;
	const [ userForm, setUserForm ] = useState<IUserFormValues>({ email: '', password: '' });

	const onFormSubmit = () => {
		login(userForm);
	};

	const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.currentTarget;
		setUserForm({ ...userForm, [name]: value });
	};

	return (
		<Grid className='login' textAlign='center' verticalAlign='middle'>
			<Grid.Column>
				<Form size='large' onSubmit={onFormSubmit}>
					<Form.Input
						onChange={handleInputChange}
						fluid
						icon='user'
						iconPosition='left'
						placeholder='E-mail address'
						name='email'
					/>
					<Form.Input
						onChange={handleInputChange}
						fluid
						icon='lock'
						iconPosition='left'
						placeholder='Password'
						type='password'
						name='password'
					/>

					<Button color='blue' fluid size='large' loading={loading}>
						Login
					</Button>
				</Form>
			</Grid.Column>
		</Grid>
	);
};

export default observer(LoginComponent);
