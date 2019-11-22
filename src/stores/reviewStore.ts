import { observable, action, runInAction, configure } from 'mobx';
import { createContext } from 'react';
import { IReview } from '../models/review';
import { IResult } from '../models/result';
import GamesApi from '../api/agent';

configure({ enforceActions: 'always' });

class ReviewStore {
	@observable reviews: IReview[] = [];
	@observable loadingReviews = false;

	@action
	loadReviews = async (gameId: string) => {
		this.loadingReviews = true;
		try {
			const reviews: IResult<IReview[]> = await GamesApi.getReviews(gameId);
			runInAction('loading reviews', () => {
				this.reviews = reviews.data;
				this.loadingReviews = false;
			});
		} catch (error) {
			runInAction('loading review errror', () => {
				this.loadingReviews = false;
				console.log(error);
			});
		}
	};
}

export default createContext(new ReviewStore());
