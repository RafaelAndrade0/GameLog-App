import React from 'react';
import { IPagination } from '../../models/pagination';
import { Button, Icon } from 'semantic-ui-react';

interface IProps {
	pagination: IPagination;
	prevPage: () => void;
	nextPage: () => void;
}

const Pagination: React.FC<IProps> = ({ pagination, prevPage, nextPage }) => {
	return (
		<div>
			{pagination.prevPage && (
				<Button animated floated='left' color='red' onClick={prevPage}>
					<Button.Content visible>Prev. Page</Button.Content>
					<Button.Content hidden>
						<Icon name='arrow left' />
					</Button.Content>
				</Button>
			)}
			{pagination.nextPage && (
				<Button animated floated='right' color='blue' onClick={nextPage}>
					<Button.Content visible>Next Page</Button.Content>
					<Button.Content hidden>
						<Icon name='arrow right' />
					</Button.Content>
				</Button>
			)}
		</div>
	);
};

export default Pagination;
