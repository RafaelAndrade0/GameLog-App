import React, { Fragment, useContext, useState } from 'react';
import { Container, Header, Button, Segment, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { RootStoreContext } from '../../stores/rootStore';
import { observer } from 'mobx-react-lite';
import LoginComponent from '../auth/LoginComponent';
import RegisterComponent from '../auth/RegisterComponent';

const Root: React.FC = () => {
	const rootStore = useContext(RootStoreContext);
	const { isLoggedIn, user } = rootStore.userStore;

	const [ showComponent, setShowComponent ] = useState<boolean>(true);

	return (
		<Segment inverted textAlign='center' vertical className='masthead'>
			<Container text>
				<Header as='h1' inverted>
					<Image size='massive' src='/images/icon.png' alt='logo' style={{ marginBottom: 12 }} />
					GameLog
				</Header>
				{isLoggedIn && user ? (
					<Fragment>
						<Header as='h2' inverted content={`Welcome back ${user.name}!`} />
						<Button as={Link} to='/home' size='huge' inverted>
							Go to Home!
						</Button>
					</Fragment>
				) : (
					<Fragment>
						{showComponent ? (
							<Fragment>
								<LoginComponent />
								<Button
									style={{ marginTop: '2em' }}
									onClick={() => setShowComponent(false)}
									size='huge'
									inverted
								>
									Register
								</Button>
							</Fragment>
						) : (
							<Fragment>
								<RegisterComponent />
								<Button
									style={{ marginTop: '2em' }}
									onClick={() => setShowComponent(true)}
									size='huge'
									inverted
								>
									Login
								</Button>
							</Fragment>
						)}

						{/* <Button as={Link} size='huge' inverted to='/login'>
							Login
						</Button>
						<Button as={Link} size='huge' inverted to='/register'>
							Register
						</Button> */}
					</Fragment>
				)}
			</Container>
		</Segment>
	);
};

export default observer(Root);
