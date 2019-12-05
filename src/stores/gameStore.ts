import { observable, action, runInAction, configure } from 'mobx';
import { IGame, IGameFormValues } from '../models/game';
import agent from '../api/agent';
import { IResult } from '../models/result';
import { IPagination } from '../models/pagination';
import { RootStore } from './rootStore';

import { history } from '..';

// strict mode
configure({ enforceActions: 'always' });

export default class GameStore {
	rootStore: RootStore;

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
	}

	@observable games: IGame[] | null = [];
	@observable selectedGame: IGame | null = null;
	@observable loadingInitial = false;
	@observable pagination: IPagination = { baseUrl: '', page: 1, nextPage: 1, prevPage: 1 };

	@observable gamesCache = new Map<string, IGame>();

	@action
	loadGames = async (pageNumber: number) => {
		this.loadingInitial = true;
		try {
			const result: IResult<IGame[]> = await agent.Games.list(pageNumber);
			runInAction('getting games...', () => {
				this.games = [ ...result.data ];
				this.pagination = result.pagination;
				this.loadingInitial = false;
				result.data.forEach((game) => {
					this.gamesCache.set(game.id, game);
				});
			});
		} catch (error) {
			runInAction('getting games error', () => {
				this.loadingInitial = false;
				console.log(error);
			});
		}
	};

	getGame = (id: string) => {
		return this.gamesCache.get(id);
	};

	@action
	loadGame = async (gameId: string) => {
		this.loadingInitial = true;
		let game = this.getGame(gameId);
		if (game) {
			this.selectedGame = game;
			this.loadingInitial = false;
		} else {
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
		}
	};

	@action
	addGame = async (game: IGameFormValues) => {
		this.loadingInitial = true;
		try {
			let result: IResult<IGame> = await agent.Games.create(game);
			console.log(result);
			runInAction(() => {
				this.loadingInitial = false;
				history.push('/games');
			});
		} catch (error) {
			runInAction(() => {
				this.loadingInitial = false;
			});
			console.log(error);
		}
	};

	@action
	updateGamePhoto = async (id: string, data: FormData) => {
		this.loadingInitial = true;
		try {
			const photo: IResult<string> = await agent.Games.updateGamePhoto(id, data);
			runInAction(() => {
				if (this.selectedGame) {
					this.selectedGame = { ...this.selectedGame, photo: photo.data };
				}
				this.loadingInitial = false;
			});
		} catch (error) {
			runInAction(() => {
				this.loadingInitial = false;
			});
			console.log(error);
		}
	};

	@action
	clearGames = () => {
		this.games = null;
	};

	@action
	clearSelectedGame = () => {
		this.selectedGame = null;
	};
}
