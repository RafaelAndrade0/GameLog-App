import React from 'react';
import { Segment, Header, Divider, Comment, Icon, Pagination } from 'semantic-ui-react';

interface IProps {
	title: string;
}

const GameReview: React.FC<IProps> = ({ title }) => {
	return (
		<Segment color='orange'>
			<Header as='h2'>{title} Reviews</Header>
			<Divider />
			<Comment.Group>
				<Comment>
					<Comment.Avatar as='a' src='https://via.placeholder.com/200' />
					<Comment.Content>
						<Comment.Author>Stewie Smith</Comment.Author>
						<Comment.Metadata>
							<div>2 days ago</div>
							<div>
								<Icon name='star' />5 Faves
							</div>
						</Comment.Metadata>
						<Comment.Text>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad alias saepe omnis,
							exercitationem placeat, mollitia tempora aperiam, quae odit molestiae repellendus excepturi
							fugit itaque! Culpa reprehenderit magni modi magnam voluptate!
						</Comment.Text>
					</Comment.Content>
				</Comment>

				<Comment>
					<Comment.Avatar as='a' src='https://via.placeholder.com/200' />
					<Comment.Content>
						<Comment.Author>John Doe</Comment.Author>
						<Comment.Metadata>
							<div>15 days ago</div>
							<div>
								<Icon name='star' />2 Faves
							</div>
						</Comment.Metadata>
						<Comment.Text>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad alias saepe omnis,
							exercitationem placeat, mollitia tempora aperiam, quae odit molestiae repellendus excepturi
							fugit itaque! Culpa reprehenderit magni modi magnam voluptate!
						</Comment.Text>
					</Comment.Content>
				</Comment>

				<Comment>
					<Comment.Avatar as='a' src='https://via.placeholder.com/200' />
					<Comment.Content>
						<Comment.Author>Makise Kurisu</Comment.Author>
						<Comment.Metadata>
							<div>25 days ago</div>
							<div>
								<Icon name='star' />1 Faves
							</div>
						</Comment.Metadata>
						<Comment.Text>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad alias saepe omnis,
							exercitationem placeat, mollitia tempora aperiam, quae odit molestiae repellendus excepturi
							fugit itaque! Culpa reprehenderit magni modi magnam voluptate!
						</Comment.Text>
					</Comment.Content>
				</Comment>
			</Comment.Group>

			<Divider />
			<Pagination defaultActivePage={1} totalPages={5} />
		</Segment>
	);
};

export default GameReview;
