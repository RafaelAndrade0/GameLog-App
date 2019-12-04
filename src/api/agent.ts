import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { IGameFormValues } from '../models/game';
import { IReview } from '../models/review';
import { IUserFormValues, IUser, IUserResponse } from '../models/user';
import { IResult } from '../models/result';

axios.defaults.baseURL = 'http://localhost:5000/api/v1';

axios.interceptors.request.use(
	(config) => {
		const token = window.localStorage.getItem('jwt');
		if (token) config.headers.Authorization = `Bearer ${token}`;
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

axios.interceptors.response.use(undefined, (error) => {
	if (error.response.status === 404) {
		// console.log(error);
		// history.push('about');
	}
});

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response: AxiosResponse) =>
	new Promise<AxiosResponse>((resolve) => setTimeout(() => resolve(response), ms));

const requests = {
	get: (url: string, params?: AxiosRequestConfig) => axios.get(url, params).then(sleep(1000)).then(responseBody),
	post: (url: string, body: {}) => axios.post(url, body).then(sleep(1000)).then(responseBody),
	put: (url: string, body: {}) => axios.put(url, body).then(sleep(1000)).then(responseBody),
	delete: (url: string) => axios.delete(url).then(sleep(1000)).then(responseBody)
};

const Games = {
	list: (pageNumber: string | undefined | number) => requests.get('games', { params: { page: pageNumber } }),
	create: (game: IGameFormValues) => requests.post('/games', game),
	getGame: (id: string) => requests.get(`games/${id}`),
	getReviews: (id: string) => requests.get(`games/${id}/reviews`),
	createReview: (review: IReview) => requests.post('reviews', review),
	updateGamePhoto: (id: string, data: FormData) => requests.put(`games/${id}/photo`, data)
};

const User = {
	login: (user: IUserFormValues): Promise<IUserResponse> => requests.post('/auth/login', user),
	register: (user: IUserFormValues): Promise<IUserResponse> => requests.post('/auth/register', user),
	current: (): Promise<IResult<IUser>> => requests.get('/auth/me')
};

export default { Games, User };
