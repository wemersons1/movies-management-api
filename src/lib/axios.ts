import { config } from 'dotenv';
import axios from 'axios';

config();

const { MOVIE_DB_API_BASE, MOVIE_DB_API_TOKEN } = process.env;

const api = axios.create({
    baseURL: MOVIE_DB_API_BASE,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MOVIE_DB_API_TOKEN}`
    }
});

export default api;