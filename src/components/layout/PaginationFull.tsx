import React from 'react';
import { List, Button } from 'semantic-ui-react';

interface Iprops {
	totalReviews: number;
	reviewsPerPage: number;
	paginate: (pageNumber: number) => void;
}

const PaginationFull: React.FC<Iprops> = ({ totalReviews, reviewsPerPage, paginate }) => {
	const pageNumbers: number[] = [];

	for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<List horizontal>
			{pageNumbers.map((number) => (
				<List.Item key={number}>
					<Button circular onClick={() => paginate(number)}>
						{number}
					</Button>
				</List.Item>
			))}
		</List>
	);
};

export default PaginationFull;
