import { observable, action, runInAction, configure } from 'mobx';
import { IReview } from '../models/review';
import { IResult } from '../models/result';
import agent from '../api/agent';
import { toast } from 'react-toastify';
import { RootStore } from './rootStore';

configure({ enforceActions: 'always' });

export default class ReviewStore {
	rootStore: RootStore;

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
	}

	@observable reviews: IReview[] = [];
	@observable submitting = false;
	@observable loadingReviews = false;

	@action
	loadReviews = async (gameId: string) => {
		this.loadingReviews = true;
		try {
			const reviews: IResult<IReview[]> = await agent.Games.getReviews(gameId);
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
			const newReview: IResult<IReview> = await agent.Games.createReview(review);
			runInAction('create review', () => {
				// TODO: Create local map
				this.reviews = [ ...this.reviews, newReview.data ];
				this.submitting = false;
				toast.success('🔥 Review Created With Success!');
			});
		} catch (error) {
			runInAction('error create review', () => {
				this.submitting = false;
			});
			toast.error('❌ Error creating the review!');
			console.log(error);
		}
	};
}

// export default createContext(new ReviewStore());
