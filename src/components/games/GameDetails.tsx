import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Segment } from 'semantic-ui-react';
import GamesApi from '../../api/agent';

interface Iprops {
	id: string;
}

const GameDetails: React.FC<RouteComponentProps<Iprops>> = ({ match }) => {
	useEffect(() => {
		getGame();
	}, []);

	const getGame = async () => {
		const result = await GamesApi.getGame(match.params.id);
		console.log(result);
	};

	return (
		<Segment>
			<h1>{match.params.id}</h1>
		</Segment>
	);
};

export default GameDetails;
