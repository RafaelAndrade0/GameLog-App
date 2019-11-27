import { observable, action, runInAction, configure } from 'mobx';
import { IUser, IUserFormValues, IUserResponse } from '../models/user';
import agent from '../api/agent';
import { RootStore } from './rootStore';
import { IResult } from '../models/result';

// strict mode
configure({ enforceActions: 'always' });

export default class UserStore {
	rootStore: RootStore;

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
	}

	@observable user: IUser | null = null;
	@observable userResponse: IUserResponse | null = null;
	@observable isLoggedIn: boolean = false;

	@action
	login = async (values: IUserFormValues) => {
		try {
			const response = await agent.User.login(values);
			// const user: IResult<IUser> = await agent.User.current();
			runInAction('user response', () => {
				this.userResponse = response;
				// this.user = user.data;
				this.isLoggedIn = true;
			});
			this.rootStore.commomStore.setToken(response.token);
		} catch (error) {
			console.log(error);
		}
	};

	@action
	getUser = async () => {
		try {
			const user: IResult<IUser> = await agent.User.current();
			runInAction(() => {
				this.user = user.data;
				this.isLoggedIn = true;
			});
		} catch (error) {
			console.log(error);
		}
	};

	@action
	logout = () => {
		this.rootStore.commomStore.setToken(null);
		this.userResponse = null;
		this.isLoggedIn = false;
	};
}
