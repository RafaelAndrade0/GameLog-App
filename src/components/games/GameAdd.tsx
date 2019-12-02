import React, { useContext } from 'react';
import { Grid, Form, Button, Segment, Label, Header } from 'semantic-ui-react';
import TextInput from '../../commom/form/TextInput';

import { Form as FinalForm, Field } from 'react-final-form';
import { combineValidators, composeValidators, isRequired } from 'revalidate';
import TextAreaInput from '../../commom/form/TextAreaInput';
import DropdownInput from '../../commom/form/DropdownInput';
import { RootStoreContext } from '../../stores/rootStore';
import { IGame, IGameFormValues } from '../../models/game';

const GameAdd: React.FC = () => {
	const rootStore = useContext(RootStoreContext);
	const { clearGames } = rootStore.gameStore;

	const validate = combineValidators({
		title: composeValidators(isRequired({ message: 'Title is Required!' }))(),
		description: composeValidators(isRequired({ message: 'Description is Required' }))(),
		genre: composeValidators(isRequired({ message: 'Genre is Required' }))(),
		plataform: composeValidators(isRequired({ message: 'Plataform is Required' }))(),
		developer: composeValidators(isRequired({ message: 'Developer is Required' }))()
	});

	const handleFinalFormSubmit = (e: IGameFormValues) => {
		console.log(e);
	};

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

	return (
		<Segment>
			<Grid>
				<Grid.Column>
					<FinalForm
						validate={validate}
						onSubmit={handleFinalFormSubmit}
						render={({ handleSubmit, invalid, pristine }) => (
							<Form size='large' onSubmit={handleSubmit}>
								<Field placeholder='Title' name='title' component={TextInput} />
								<Field
									placeholder='Description'
									rows={3}
									name='description'
									component={TextAreaInput}
								/>
								<Field
									placeholder='Select a Genre'
									name='genre'
									component={DropdownInput}
									options={options}
								/>

								<Field
									placeholder='Select a Plataform'
									name='plataform'
									component={DropdownInput}
									options={optionsPlataform}
								/>

								<Field
									placeholder='Select a Developer'
									name='developer'
									component={DropdownInput}
									options={optionsDeveloper}
								/>

								<Button
									// disabled={invalid || pristine || loading}
									disabled={invalid || pristine}
									color='blue'
									fluid
									size='large'
									// loading={loading}
								>
									Add!
								</Button>
							</Form>
						)}
					/>
				</Grid.Column>
			</Grid>
		</Segment>
	);
};

export default GameAdd;
