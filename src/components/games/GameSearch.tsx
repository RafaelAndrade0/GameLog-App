import React from 'react';
import { Button } from 'semantic-ui-react';

const GameSearch: React.FC = () => {
	return (
		<div className='ui fluid  action input'>
			<input type='text' placeholder='Search...' />
			{/* <button className='ui button'>Search</button> */}
			<Button basic color='red'>
				Go!
			</Button>
		</div>
	);
};

export default GameSearch;
