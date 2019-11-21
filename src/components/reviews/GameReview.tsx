import React, { useState, useEffect } from 'react';
import { Segment, Header, Divider, Comment, Icon, Pagination, Container, Message } from 'semantic-ui-react';
import { IReview } from '../../models/review';
import { IResult } from '../../models/result';
import GamesApi from '../../api/agent';
import { IUser } from '../../models/user';

interface IProps {
	title: string;
	gameId: string;
}

const GameReview: React.FC<IProps> = ({ title, gameId }) => {
	const [ reviews, setReviews ] = useState<IReview[]>([]);

	useEffect(() => {
		const getReviews = async () => {
			const _reviews: IResult<IReview[]> = await GamesApi.getReviews(gameId);
			setReviews(_reviews.data);
		};
		getReviews();
	}, []);

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
				{reviews.map((review, index) => (
					<Comment key={index}>
						<Comment.Avatar as='a' src='https://via.placeholder.com/200' />
						<Comment.Content>
							<Comment.Author>{(review.user as IUser).name}</Comment.Author>
							<Comment.Metadata>
								<div>2 days ago</div>
								<div>
									<Icon name='star' />Score: {review.score}
								</div>
							</Comment.Metadata>
							<Comment.Text>{review.text}</Comment.Text>
						</Comment.Content>
					</Comment>
				))}
			</Comment.Group>

			{/* <Divider />
			<Container fluid>
				<Pagination defaultActivePage={1} firstItem={null} lastItem={null} pointing secondary totalPages={3} />
			</Container> */}
		</Segment>
	);
};

export default GameReview;
