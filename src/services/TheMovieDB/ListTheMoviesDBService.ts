import axios from "../../lib/axios";

interface Params {
    page: number;
    sort_by: string;
    'primary_release_date.gte'?: string;
    'primary_release_date.lte'?: string;
}

class ListTheMoviesDBService {
    async execute(params: Params) {
        const response = await axios.get('/discover/movie', {
            params
        });
        
        if(response) {
            return response.data;
        }
    }
}

export { ListTheMoviesDBService }