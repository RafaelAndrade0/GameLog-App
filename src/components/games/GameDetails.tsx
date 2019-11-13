import React from 'react';
import { RouteComponentProps } from 'react-router';

interface Iprops {
	id: string;
}

const GameDetails: React.FC<RouteComponentProps<Iprops>> = ({ match }) => {
	return (
		<div>
			<h1>{match.params.id}</h1>
		</div>
	);
};

export default GameDetails;
