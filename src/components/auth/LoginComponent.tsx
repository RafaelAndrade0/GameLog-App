import React, { useContext, FormEvent, useState } from 'react';
import { Grid, Form, Button, Segment, Header, Message, Image } from 'semantic-ui-react';
import { useHistory } from 'react-router';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../../stores/rootStore';
import { IUserFormValues } from '../../models/user';

const LoginComponent: React.FC = () => {
	const history = useHistory();

	const rootStore = useContext(RootStoreContext);
	const { login, user } = rootStore.userStore;
	const [ userForm, setUserForm ] = useState<IUserFormValues>({ email: '', password: '' });

	const onFormSubmit = () => {
		login(userForm);
		history.push('/home');
	};

	const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.currentTarget;
		setUserForm({ ...userForm, [name]: value });
	};

	return (
		<Segment className='login'>
			<Grid
				className='login'
				textAlign='center'
				// style={{ height: '100vh' }}
				// style={{
				// 	height: '100vh',
				// 	backgroundImage: 'url(images/icon.png)',
				// 	backgroundPosition: 'right bottom',
				// 	backgroundRepeat: 'no-repeat'
				// }}
				verticalAlign='middle'
			>
				<Grid.Column>
					{/* <Grid.Column style={{ maxWidth: 450 }}> */}
					<Header as='h2' color='blue' textAlign='center'>
						<Image src='images/icon.png' />
						Log-in to your account
					</Header>
					<Form size='large' onSubmit={onFormSubmit}>
						<Segment stacked>
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

							<Button color='blue' fluid size='large'>
								Login
							</Button>
						</Segment>
					</Form>
					<Message>
						New to us? <a href='http://localhost:3000/'>Sign Up</a>
					</Message>
				</Grid.Column>
			</Grid>
		</Segment>
	);
};

export default observer(LoginComponent);
