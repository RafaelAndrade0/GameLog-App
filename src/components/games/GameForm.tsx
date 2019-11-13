import React from 'react';
import { Segment, Form, Button, Header } from 'semantic-ui-react';

const GameForm: React.FC = () => {
	const options = [
		{ key: 'j', text: 'Jrpg', value: 'jrpg' },
		{ key: 'r', text: 'Rpg', value: 'rpg' },
		{ key: 'p', text: 'Plataform', value: 'plataform' }
	];

	const optionsPlataform = [
		{ key: 'ps3', text: 'PS3', value: 'ps3' },
		{ key: 'ps4', text: 'PS4', value: 'ps4' },
		{ key: 'v', text: 'PS Vita', value: 'vita' }
	];
	return (
		<Segment clearing>
			<Header as='h3'>Add Component</Header>
			<Form>
				<Form.Input name='title' placeholder='Title' />
				<Form.TextArea name='description' rows={2} placeholder='Description' />
				<Form.Select fluid options={options} placeholder='Genre' />
				<Form.Select fluid options={optionsPlataform} placeholder='Plataform' />
				<Form.Select fluid options={optionsPlataform} placeholder='Developer' />
				<Form.Input name='date' type='datetime-local' placeholder='Release Date' />
				<Button floated='right' positive type='submit' content='Submit' />
				<Button floated='right' type='button' content='Cancel' />
			</Form>
		</Segment>
	);
};

export default GameForm;
