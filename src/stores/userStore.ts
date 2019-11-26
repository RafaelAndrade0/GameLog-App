import { observable, action, runInAction } from 'mobx';
import { IUser, IUserFormValues, IUserResponse } from '../models/user';
import agent from '../api/agent';
import { RootStore } from './rootStore';

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
		} catch (error) {
			console.log(error);
		}
	};
}

// export default createContext(new UserStore());
