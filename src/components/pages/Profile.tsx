import React, { useContext, useEffect, Fragment } from 'react';
import { RootStoreContext } from '../../stores/rootStore';
import { Segment, Item, Placeholder, Label } from 'semantic-ui-react';

const Profile: React.FC = () => {
	const rootStore = useContext(RootStoreContext);
	const { user } = rootStore.userStore;

	if (user === null) {
		return (
			<Fragment>
				<h1>No User</h1>
			</Fragment>
		);
	}

	return (
		<Segment piled>
			<Label color={user.role === 'admin' ? 'red' : 'blue'} attached='top left'>
				{user.role}
			</Label>
			<Item>
				<Item.Image size='tiny' src='/images/wireframe/image.png' />

				<Item.Content>
					<Item.Header as='h1'>{user.name}</Item.Header>
					<Item.Description>Email: {user.email}</Item.Description>
				</Item.Content>
			</Item>
		</Segment>
	);
};

export default Profile;
