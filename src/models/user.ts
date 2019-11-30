export interface IUser {
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
