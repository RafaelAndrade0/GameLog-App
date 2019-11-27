import React from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';

const RegisterComponent: React.FC = () => {
	return (
		<Grid className='login' textAlign='center' verticalAlign='middle'>
			<Grid.Column>
				<Form size='large'>
					<Form.Input
						// onChange={handleInputChange}
						fluid
						icon='user'
						iconPosition='left'
						placeholder='Name'
						name='name'
					/>

					<Form.Input
						// onChange={handleInputChange}
						fluid
						icon='user'
						iconPosition='left'
						placeholder='E-mail address'
						name='email'
					/>
					<Form.Input
						// onChange={handleInputChange}
						fluid
						icon='lock'
						iconPosition='left'
						placeholder='Password'
						type='password'
						name='password'
					/>

					<Button color='blue' fluid size='large'>
						Register
					</Button>
				</Form>
			</Grid.Column>
		</Grid>
	);
};

export default RegisterComponent;
