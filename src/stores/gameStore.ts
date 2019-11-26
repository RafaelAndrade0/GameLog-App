import { observable, action, runInAction, configure } from 'mobx';
import { IGame } from '../models/game';
import agent from '../api/agent';
import { IResult } from '../models/result';
import { IPagination } from '../models/pagination';
import { RootStore } from './rootStore';

// strict mode
configure({ enforceActions: 'always' });

export default class GameStore {
	rootStore: RootStore;

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
	}

	@observable games: IGame[] = [];
	@observable selectedGame: IGame | null = null;
	@observable loadingInitial = false;
	@observable pagination: IPagination = { baseUrl: '', page: 1, nextPage: 1, prevPage: 1 };

	@action
	loadGames = async (pageNumber: number) => {
		this.loadingInitial = true;
		try {
			const result: IResult<IGame[]> = await agent.Games.list(pageNumber);
			runInAction('getting games...', () => {
				this.games = [ ...result.data ];
				this.pagination = result.pagination;
				this.loadingInitial = false;
			});
		} catch (error) {
			runInAction('getting games error', () => {
				this.loadingInitial = false;
				console.log(error);
			});
		}
	};

	@action
	loadGame = async (gameId: string) => {
		this.loadingInitial = true;
		try {
			let result: IResult<IGame> = await agent.Games.getGame(gameId);
			runInAction('getting game', () => {
				this.selectedGame = result.data;
				this.loadingInitial = false;
			});
		} catch (error) {
			runInAction('getting game error', () => {
				this.loadingInitial = false;
			});
			console.log(error);
		}
	};

	@action
	clearSelectedGame = () => {
		this.selectedGame = null;
	};
}

// export default createContext(new GameStore());
