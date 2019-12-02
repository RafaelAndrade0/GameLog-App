export interface IUser {
	_id: string;
	name: string;
	email: string;
	role: string;
	createAt?: string;
}

export interface IUserResponse {
	success: boolean;
	token: string;
}

export interface IUserFormValues {
	name?: string;
	email: string;
	password: string;
}
