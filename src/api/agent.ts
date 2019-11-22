import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { IGame } from '../models/game';
import { IReview } from '../models/review';

axios.defaults.baseURL = 'http://localhost:5000/api/v1';

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response: AxiosResponse) =>
	new Promise<AxiosResponse>((resolve) => setTimeout(() => resolve(response), ms));

const requests = {
	get: (url: string, params?: AxiosRequestConfig) => axios.get(url, params).then(sleep(1000)).then(responseBody),
	post: (url: string, body: {}) => axios.post(url, body).then(sleep(1000)).then(responseBody),
	put: (url: string, body: {}) => axios.put(url, body).then(sleep(1000)).then(responseBody),
	delete: (url: string) => axios.delete(url).then(sleep(1000)).then(responseBody)
};

const GamesApi = {
	list: (pageNumber: string | undefined | number) => requests.get('games', { params: { page: pageNumber } }),
	create: (game: IGame) => requests.post('/games', game),
	getGame: (id: string) => requests.get(`games/${id}`),
	getReviews: (id: string) => requests.get(`games/${id}/reviews`),
	createReview: (review: IReview) => requests.post('reviews', review)
};

export default GamesApi;
