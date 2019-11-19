import React from 'react';
import { Grid, Form, Button, Segment, Header, Message, Image } from 'semantic-ui-react';

const LoginComponent: React.FC = () => {
	return (
		<Grid textAlign='center' verticalAlign='middle'>
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header as='h2' color='blue' textAlign='center'>
					{/* <Image size='medium' src='/images/icon.png' style={{ marginRight: '1.5em' }} /> */}
					Log-in to your account
				</Header>
				<Form size='large'>
					<Segment stacked>
						<Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
						<Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />

						<Button color='blue' fluid size='large'>
							Login
						</Button>
					</Segment>
				</Form>
				<Message>
					New to us? <a href='#'>Sign Up</a>
				</Message>
			</Grid.Column>
		</Grid>
	);
};

export default LoginComponent;
