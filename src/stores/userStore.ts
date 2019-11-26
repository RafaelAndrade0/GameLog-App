import { observable, action, runInAction, configure } from 'mobx';
import { IUser, IUserFormValues, IUserResponse } from '../models/user';
import agent from '../api/agent';
import { RootStore } from './rootStore';

// strict mode
configure({ enforceActions: 'always' });

export default class UserStore {
	rootStore: RootStore;

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
	}

	@observable user: IUser | null = null;
	@observable userResponse: IUserResponse | null = null;
	@observable token: string | null = null;

	@action
	login = async (values: IUserFormValues) => {
		try {
			const response = await agent.User.login(values);
			// window.localStorage.setItem('token', response.token);
			runInAction('user response', () => {
				this.userResponse = response;
				this.token = response.token;
			});
		} catch (error) {
			console.log(error);
		}
	};
}
