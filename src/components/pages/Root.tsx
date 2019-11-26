import React, { Fragment } from 'react';
import { Container, Header, Button, Segment, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Root: React.FC = () => {
	return (
		<Segment inverted textAlign='center' vertical className='masthead'>
			<Container text>
				<Header as='h1' inverted>
					<Image size='massive' src='/images/icon.png' alt='logo' style={{ marginBottom: 12 }} />
					GameLog
				</Header>
				<Fragment>
					<Header as='h2' inverted content={`Welcome to GameLog!`} />
					<Button as={Link} size='huge' inverted to='/login'>
						Login
					</Button>
					<Button as={Link} size='huge' inverted to='/register'>
						Register
					</Button>
				</Fragment>
			</Container>
		</Segment>
	);
};

export default Root;
