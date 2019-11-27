import React from 'react';
import { Segment, Header, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
	return (
		<Segment>
			<Header as='h2'>
				<Icon name='settings' />
				<Header.Content>
					Ooooopsss...
					<Header.Subheader>
						You shouldn't be here! <Link to='/home'>Go Back!</Link>{' '}
					</Header.Subheader>
				</Header.Content>
			</Header>
		</Segment>
	);
};

export default NotFound;
