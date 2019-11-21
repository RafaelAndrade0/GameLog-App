import { IUser } from './user';

export interface IReview {
	text: string;
	score: number;
	game: string;
	user: IUser | string;
}
