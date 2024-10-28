import axios from "../../lib/axios";

interface DataMovie {
    first_name: string;
    last_name: string;
    years: string;
    role_id: number;
    email: string;
    image: string;
    id: number;
} 

interface Params {
    page: number;
    sort_by: string;
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