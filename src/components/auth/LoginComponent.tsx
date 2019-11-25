import React from 'react';
import { Grid, Form, Button, Segment, Header, Message, Image } from 'semantic-ui-react';
import { useHistory } from 'react-router';

const LoginComponent: React.FC = () => {
	const history = useHistory();

	const onFormSubmit = () => {
		history.push('/home');
	};

	return (
		<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
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

export default LoginComponent;
