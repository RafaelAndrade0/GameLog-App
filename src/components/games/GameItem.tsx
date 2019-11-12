import React, { Fragment } from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

const GameItem: React.FC = () => {
	return (
		<Fragment>
			<Card>
				<Image src='https://via.placeholder.com/200' wrapped ui={false} />
				<Card.Content>
					<Card.Header>Title Card</Card.Header>
					<Card.Meta>
						<span className='date'>Subtitle</span>
					</Card.Meta>
					<Card.Description>Description Random.</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<a>
						<Icon name='user' />
						Extra Content
					</a>
				</Card.Content>
			</Card>
		</Fragment>
	);
};

export default GameItem;
