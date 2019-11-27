import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Menu, Dropdown } from 'semantic-ui-react';
import { RootStoreContext } from '../../stores/rootStore';
import { observer } from 'mobx-react-lite';

interface Props {
	title: string;
}

const Navbar: React.FC<Props> = (props) => {
	const rootStore = useContext(RootStoreContext);
	const { user, logout } = rootStore.userStore;

	return (
		<div>
			<Menu inverted>
				<Container>
					<Menu.Item header>
						<Image size='mini' src='/images/icon.png' style={{ marginRight: '1.5em' }} />

						<Link to='/home'>{props.title}</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to='/home'>Home</Link>
					</Menu.Item>

					<Menu.Item>
						<Link to='/about'>About</Link>
					</Menu.Item>

					{user && (
						<Menu.Item position='right'>
							<Image avatar spaced='right' src={'/images/user.jpg'} />
							<Dropdown pointing='top left' text={user.name.split(' ')[0]}>
								<Dropdown.Menu>
									<Dropdown.Item
										as={Link}
										to={`/profile/${user.name}`}
										text='My profile'
										icon='user'
									/>
									<Dropdown.Item onClick={logout} text='Logout' icon='power' />
								</Dropdown.Menu>
							</Dropdown>
						</Menu.Item>
					)}
				</Container>
			</Menu>
		</div>
	);
};

export default observer(Navbar);
