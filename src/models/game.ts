import { IDeveloper } from './developer';

export interface IGame {
	id?: string;
	title: string;
	description: string;
	genre: string;
	plataform: string[];
	photo?: string;
	developer: IDeveloper[];
	initialrelease: string;
}
