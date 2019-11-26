import React, { useContext } from 'react';
import { Grid, Form, Button, Segment, Header, Message, Image } from 'semantic-ui-react';
import { useHistory } from 'react-router';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../../stores/rootStore';

const LoginComponent: React.FC = () => {
	const history = useHistory();

	const rootStore = useContext(RootStoreContext);

	const { login, user } = rootStore.userStore;

	const onFormSubmit = () => {
		// history.push('/home');
		login({ email: 'rafael@gmail.com', password: '123456' });
	};

	return (
		<Grid
			textAlign='center'
			style={{ height: '100vh' }}
			// style={{
			// 	height: '100vh',
			// 	backgroundImage: 'url(images/bg2.png)',
			// 	backgroundPosition: 'right bottom',
			// 	backgroundRepeat: 'no-repeat'
			// }}
			verticalAlign='middle'
		>
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header as='h2' color='blue' textAlign='center'>
					<Image src='images/icon.png' />
					Log-in to your account
				</Header>
				<Form size='large' onSubmit={onFormSubmit}>
					<Segment stacked>
						<Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
						<Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />

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
	);
};

export default observer(LoginComponent);
