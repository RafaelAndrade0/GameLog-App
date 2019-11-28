import React, { Fragment, useContext } from 'react';
import { IPagination } from '../../models/pagination';
import { Button, Icon } from 'semantic-ui-react';
import { RootStoreContext } from '../../stores/rootStore';
import { observer } from 'mobx-react-lite';

interface IProps {
	pagination: IPagination;
	prevPage: () => void;
	nextPage: () => void;
}

const Pagination: React.FC<IProps> = ({ pagination, prevPage, nextPage }) => {
	const rootStore = useContext(RootStoreContext);
	const { loadingInitial } = rootStore.gameStore;
	return (
		<Fragment>
			{pagination.prevPage && (
				<Button disabled={loadingInitial} animated floated='left' color='red' onClick={prevPage}>
					<Button.Content visible>Prev. Page</Button.Content>
					<Button.Content hidden>
						<Icon name='arrow left' />
					</Button.Content>
				</Button>
			)}
			{pagination.nextPage && (
				<Button disabled={loadingInitial} animated floated='right' color='blue' onClick={nextPage}>
					<Button.Content visible>Next Page</Button.Content>
					<Button.Content hidden>
						<Icon name='arrow right' />
					</Button.Content>
				</Button>
			)}
		</Fragment>
	);
};

export default observer(Pagination);
