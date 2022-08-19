import axiosClient from '../client/axios';
import MoviesApiCalls from './class';

const moviesApiCalls = new MoviesApiCalls(axiosClient, '/movies');

export default moviesApiCalls;
