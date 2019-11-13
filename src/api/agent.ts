import axios, { AxiosResponse } from 'axios';
import { IGame } from '../models/game';
import { IResult } from '../models/result';

axios.defaults.baseURL = 'http://localhost:5000/api/v1';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => axios.get(url).then(responseBody),
	post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
	put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
	delete: (url: string) => axios.delete(url).then(responseBody)
};

const GamesApi = {
	list: () => requests.get('/games'),
	create: (game: IGame) => requests.post('/games', game)
};

export default GamesApi;
