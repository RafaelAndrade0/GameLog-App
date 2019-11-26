import React, { useEffect, useContext, useState } from 'react';
import { Segment, Header, Divider, Comment, Icon, Container, Message, Placeholder } from 'semantic-ui-react';
import { IUser } from '../../models/user';
import { observer } from 'mobx-react-lite';
import PaginationFull from '../layout/PaginationFull';
import { RootStoreContext } from '../../stores/rootStore';

interface IProps {
	title: string;
	gameId: string;
}

const GameReview: React.FC<IProps> = ({ title, gameId }) => {
	const rootStore = useContext(RootStoreContext);

	const { loadReviews, loadingReviews, reviews } = rootStore.reviewStore;

	const [ currentPage, setCurrentPage ] = useState<number>(1);
	const [ reviewsPerPage ] = useState<number>(3);

	// Get current posts
	const indexOfLastPost = currentPage * reviewsPerPage;
	const indexOfFirstPost = indexOfLastPost - reviewsPerPage;
	const currentReviews = reviews.slice(indexOfFirstPost, indexOfLastPost);

	// Change page
	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	useEffect(
		() => {
			loadReviews(gameId);
		},
		[ loadReviews, gameId ]
	);

	if (loadingReviews) {
		return (
			<Segment color='orange'>
				<Header as='h2'>{title} Reviews</Header>
				<Divider />
				<Placeholder>
					<Placeholder.Header image>
						<Placeholder.Line length='very short' />
						<Placeholder.Line length='short' />
					</Placeholder.Header>
					<Placeholder.Paragraph>
						<Placeholder.Line length='full' />
						<Placeholder.Line length='full' />
						<Placeholder.Line length='medium' />
					</Placeholder.Paragraph>
				</Placeholder>
			</Segment>
		);
	}

	if (reviews.length === 0) {
		return (
			<Container>
				<Message
					negative
					icon='fire'
					header='No Reviews... :('
					content={`There is no reviews for ${title}, be the first one to review it!`}
				/>
			</Container>
		);
	}

	return (
		<Segment color='orange'>
			<Header as='h2'>{title} Reviews</Header>
			<Divider />

			<Comment.Group>
				{currentReviews.map((review, index) => (
					<Comment key={index}>
						<Comment.Avatar as='a' src='https://via.placeholder.com/200' />
						<Comment.Content>
							<Comment.Author>{(review.user as IUser).name}</Comment.Author>
							<Comment.Metadata>
								<div>2 days ago</div>
								<div>
									<Icon name='star' />
									Score: {review.score}
								</div>
							</Comment.Metadata>
							<Comment.Text>{review.text}</Comment.Text>
						</Comment.Content>
					</Comment>
				))}
			</Comment.Group>

			<Divider />

			<div style={{ textAlign: 'center' }}>
				<PaginationFull reviewsPerPage={reviewsPerPage} totalReviews={reviews.length} paginate={paginate} />
			</div>
		</Segment>
	);
};

export default observer(GameReview);
