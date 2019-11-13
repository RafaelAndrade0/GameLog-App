import React, { FormEvent, useState, useRef } from 'react';
import { Segment, Form, Button, Header, DropdownProps } from 'semantic-ui-react';
import { IGame } from '../../models/game';

interface IProps {
	addGame: (game: IGame) => void;
}

const GameForm: React.FC<IProps> = ({ addGame }) => {
	const options = [
		{ key: 'j', text: 'Jrpg', value: 'jrpg' },
		{ key: 'r', text: 'Rpg', value: 'rpg' },
		{ key: 'p', text: 'Plataform', value: 'plataform' }
	];

	const optionsPlataform = [
		{ key: 'ps3', text: 'PS3', value: 'ps3' },
		{ key: 'ps4', text: 'PS4', value: 'ps4' },
		{ key: 'v', text: 'PS Vita', value: 'PSVITA' }
	];

	const optionsDeveloper = [
		{ key: 'se', text: 'Square Enix', value: 'squareenix' },
		{ key: 'at', text: 'Atlus', value: 'atlus' },
		{ key: 'cap', text: 'Capcom', value: 'capcom' }
	];

	const [ game, setGame ] = useState<IGame>({
		description: '',
		photo: '',
		title: '',
		genre: '',
		initialrelease: '2020-10-19',
		plataform: '',
		developer: '5d725cd2c4ded7bcb480eaa2'
	});

	const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = event.currentTarget;
		setGame({ ...game, [name]: value });
	};

	const handleSelectValue = (event: FormEvent<HTMLElement>, data: DropdownProps) => {
		const { name, value } = data;
		setGame({ ...game, [name]: value });
	};

	const handleFormSubmit = () => {
		console.log(game);
		game.id = (Math.floor(Math.random() * 100) + 1).toString();
		addGame(game);
	};

	const fileInputRef = useRef<HTMLInputElement>(null);

	return (
		<Segment clearing>
			<Header as='h3'>Add Component</Header>
			<Form onSubmit={handleFormSubmit}>
				<Form.Input onChange={handleInputChange} name='title' placeholder='Title' />
				<Form.TextArea onChange={handleInputChange} name='description' rows={2} placeholder='Description' />
				<Form.Select onChange={handleSelectValue} fluid options={options} name='genre' placeholder='Genre' />
				<Form.Select
					onChange={handleSelectValue}
					fluid
					options={optionsPlataform}
					name='plataform'
					placeholder='Plataform'
				/>
				<Form.Select
					onChange={handleSelectValue}
					fluid
					options={optionsDeveloper}
					name='developer'
					placeholder='Developer'
				/>
				<Form.Input
					onChange={handleInputChange}
					name='initialrelease'
					type='datetime-local'
					placeholder='Release Date'
				/>
				<Button
					floated='left'
					content='Choose Photo'
					labelPosition='left'
					icon='image'
					onClick={() => fileInputRef.current!.click()}
				/>
				<input ref={fileInputRef} type='file' hidden name='photo' />

				<Button floated='right' positive type='submit' content='Submit' />
				<Button floated='right' type='button' content='Cancel' />
			</Form>
		</Segment>
	);
};

export default GameForm;
