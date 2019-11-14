import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { IGame } from '../models/game';

axios.defaults.baseURL = 'http://localhost:5000/api/v1';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string, params?: AxiosRequestConfig) => axios.get(url, params).then(responseBody),
	post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
	put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
	delete: (url: string) => axios.delete(url).then(responseBody)
};

const GamesApi = {
	list: (pageNumber: string | undefined | number) => requests.get('games', { params: { page: pageNumber } }),
	create: (game: IGame) => requests.post('/games', game),
	getGame: (id: string) => requests.get(`games/${id}`)
};

export default GamesApi;
