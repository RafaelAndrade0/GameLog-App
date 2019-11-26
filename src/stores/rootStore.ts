import GameStore from './gameStore';
import ReviewStore from './reviewStore';
import UserStore from './userStore';
import { createContext } from 'react';

export class RootStore {
	gameStore: GameStore;
	reviewStore: ReviewStore;
	userStore: UserStore;

	constructor() {
		this.gameStore = new GameStore(this);
		this.reviewStore = new ReviewStore(this);
		this.userStore = new UserStore(this);
	}
}

export const RootStoreContext = createContext(new RootStore());
