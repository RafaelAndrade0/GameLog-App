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

	@action
	login = async (values: IUserFormValues) => {
		try {
			const response = await agent.User.login(values);
			runInAction('user response', () => {
				this.userResponse = response;
			});
			this.rootStore.commomStore.setToken(response.token);
		} catch (error) {
			console.log(error);
		}
	};

	@action
	logout = () => {
		this.rootStore.commomStore.setToken(null);
		this.userResponse = null;
	};
}
