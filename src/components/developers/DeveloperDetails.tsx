import React, { Fragment } from 'react';
import { Segment, Item, Label } from 'semantic-ui-react';
import { IDeveloper } from '../../models/developer';

interface Iprops {
	developer: IDeveloper;
}

const DeveloperDetails: React.FC<Iprops> = ({ developer }) => {
	return (
		<Fragment>
			{developer.name !== '' && (
				<Segment color='blue'>
					<Item>
						<Item.Image
							rounded
							size='small'
							src='https://react.semantic-ui.com/images/wireframe/image.png'
						/>
						<Item.Content>
							<Item.Header as='h2'>{developer.name}</Item.Header>
							<Item.Description>{developer.description}</Item.Description>
							<Item.Extra>
								<Label>{developer.headquarters}</Label>
								{/* <Label icon='globe' content='Additional Languages' /> */}
							</Item.Extra>
						</Item.Content>
					</Item>
				</Segment>
			)}
		</Fragment>
	);
};

export default DeveloperDetails;
