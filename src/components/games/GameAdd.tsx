import React, { useContext, Fragment } from 'react';
import { Grid, Form, Button, Segment, Header } from 'semantic-ui-react';
import TextInput from '../../commom/form/TextInput';

import { Form as FinalForm, Field } from 'react-final-form';
import { combineValidators, composeValidators, isRequired } from 'revalidate';
import TextAreaInput from '../../commom/form/TextAreaInput';
import DropdownInput from '../../commom/form/DropdownInput';
import { RootStoreContext } from '../../stores/rootStore';
import { IGameFormValues } from '../../models/game';
import { observer } from 'mobx-react-lite';

const GameAdd: React.FC = () => {
	const rootStore = useContext(RootStoreContext);
	const { addGame, loadingInitial } = rootStore.gameStore;

	const validate = combineValidators({
		title: composeValidators(isRequired({ message: 'Title is Required!' }))(),
		description: composeValidators(isRequired({ message: 'Description is Required' }))(),
		genre: composeValidators(isRequired({ message: 'Genre is Required' }))(),
		plataform: composeValidators(isRequired({ message: 'Plataform is Required' }))(),
		developer: composeValidators(isRequired({ message: 'Developer is Required' }))()
	});

	const handleFinalFormSubmit = (formValues: IGameFormValues) => {
		formValues.initialrelease = '2020-10-19';
		console.log(formValues);
		addGame(formValues);
	};

	const options = [
		{ key: 'j', text: 'Jrpg', value: 'jrpg' },
		{ key: 'r', text: 'Rpg', value: 'rpg' },
		{ key: 'p', text: 'Plataform', value: 'plataform' }
	];

	const optionsPlataform = [
		{ key: 'ps3', text: 'PS3', value: 'PS3' },
		{ key: 'ps4', text: 'PS4', value: 'PS4' },
		{ key: 'v', text: 'PS Vita', value: 'PSVITA' }
	];

	const optionsDeveloper = [
		{ key: 'se', text: 'Square Enix', value: '5d725cd2c4ded7bcb480eaa2' },
		{ key: 'at', text: 'Atlus', value: '5d725a4a7b292f5f8ceff789' },
		{ key: 'cap', text: 'Capcom', value: '5d725c84c4ded7bcb480eaa0' }
	];

	return (
		<Fragment>
			<Header as='h2' icon='gamepad' content='Add New Game' attached='top' block />
			<Segment attached>
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
										disabled={invalid || pristine || loadingInitial}
										color='blue'
										fluid
										size='large'
										loading={loadingInitial}
									>
										Add!
									</Button>
								</Form>
							)}
						/>
					</Grid.Column>
				</Grid>
			</Segment>
		</Fragment>
	);
};

export default observer(GameAdd);
