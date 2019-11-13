import React from 'react';
import { Button, Segment, Form } from 'semantic-ui-react';

const GameSearch: React.FC = () => {
	return (
		<Segment>
			<Form>
				<Form.Field>
					<input placeholder='Search Games' />
				</Form.Field>
				<Button fluid type='submit' color='blue'>
					Go!
				</Button>
			</Form>
		</Segment>
	);
};

export default GameSearch;
