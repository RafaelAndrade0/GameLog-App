export interface IResult<T> {
	count: number;
	data: T;
	pagination: any;
	success: boolean;
}
