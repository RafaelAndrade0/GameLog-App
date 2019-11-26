import GameStore from './gameStore';
import ReviewStore from './reviewStore';
import UserStore from './userStore';
import { createContext } from 'react';
import CommomStore from './commomStore';

export class RootStore {
	gameStore: GameStore;
	reviewStore: ReviewStore;
	userStore: UserStore;
	commomStore: CommomStore;

	constructor() {
		this.gameStore = new GameStore(this);
		this.reviewStore = new ReviewStore(this);
		this.userStore = new UserStore(this);
		this.commomStore = new CommomStore(this);
	}
}

export const RootStoreContext = createContext(new RootStore());
