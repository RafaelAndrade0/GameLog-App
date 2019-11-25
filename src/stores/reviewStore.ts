import { observable, action, runInAction, configure } from 'mobx';
import { createContext } from 'react';
import { IReview } from '../models/review';
import { IResult } from '../models/result';
import GamesApi from '../api/agent';

configure({ enforceActions: 'always' });

class ReviewStore {
	@observable reviews: IReview[] = [];
	@observable submitting = false;
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

	@action
	createReview = async (review: IReview) => {
		this.submitting = true;
		try {
			const newReview = await GamesApi.createReview(review);
			runInAction('create game', () => {
				this.submitting = false;
			});
		} catch (error) {
			runInAction('error create game', () => {
				this.submitting = false;
			});
			console.log(error);
		}
	};
}

export default createContext(new ReviewStore());
