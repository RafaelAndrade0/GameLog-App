import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Segment } from 'semantic-ui-react';

interface Iprops {
	id: string;
}

const GameDetails: React.FC<RouteComponentProps<Iprops>> = ({ match }) => {
	return (
		<Segment>
			<h1>{match.params.id}</h1>
		</Segment>
	);
};

export default GameDetails;
