import React from 'react';
import { Segment, Item, Image, Label } from 'semantic-ui-react';

const DeveloperDetails: React.FC = () => {
	const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />;
	return (
		<Segment color='blue'>
			<Item>
				<Item.Image rounded size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
				<Item.Content>
					<Item.Header as='h2'>Atlus</Item.Header>
					<Item.Description>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur euismod interdum. Nulla
						tincidunt felis laoreet, consequat velit in, commodo massa. Donec efficitur eros vel purus
						mattis cursus ac et est. Pellentesque fermentum commodo arcu at aliquam. Mauris vestibulum
						semper dignissim. Pellentesque eu ex non metus imperdiet mollis. Aenean fringilla pharetra eros.
						Suspendisse suscipit mollis sem a tristique. Suspendisse eleifend facilisis ligula, a lacinia
						dui posuere sed. Pellentesque consectetur dignissim erat, ac aliquam lectus sollicitudin id.
						Nulla facilisi. Aenean enim justo, aliquet id semper eget, lobortis sit amet arcu.{' '}
					</Item.Description>
					<Item.Extra>
						<Label>Japan</Label>
						{/* <Label icon='globe' content='Additional Languages' /> */}
					</Item.Extra>
				</Item.Content>
			</Item>
		</Segment>
	);
};

export default DeveloperDetails;
