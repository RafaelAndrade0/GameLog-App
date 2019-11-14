import { IPagination } from './pagination';

export interface IResult<T> {
	count: number;
	data: T;
	pagination: IPagination;
	success: boolean;
}
