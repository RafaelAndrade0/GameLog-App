import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Image, Menu } from 'semantic-ui-react';

interface Props {
	title: string;
}

const Navbar: React.FC<Props> = (props) => {
	return (
		<div>
			<Menu fixed='top' inverted>
				<Container>
					<Menu.Item header>
						<Image size='mini' src='../../assets/icon.png' style={{ marginRight: '1.5em' }} />
						<Link to='/'>{props.title}</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to='/'>Home</Link>
					</Menu.Item>

					<Menu.Item>
						<Link to='/about'>About</Link>
					</Menu.Item>
				</Container>
			</Menu>
		</div>
	);
};

export default Navbar;
