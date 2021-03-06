import { IDeveloper } from './developer';
import { IReview } from './review';

export interface IGame {
	id: string;
	title: string;
	description: string;
	genre: string;
	plataform: string[];
	photo?: string;
	developer: IDeveloper[];
	initialrelease: string;
	reviews: IReview[];
	averageScore: number;
}

export interface IGameFormValues {
	title: string;
	description: string;
	genre: string[];
	plataform: string[];
	developer: string[];
	initialrelease: string;
}
