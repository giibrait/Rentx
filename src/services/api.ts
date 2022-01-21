import axios from 'axios';

const api = axios.create({
    baseURL: 'https://b297-2804-1b3-a100-1681-584f-4e5a-3aa2-deeb.ngrok.io',

});

export default api;