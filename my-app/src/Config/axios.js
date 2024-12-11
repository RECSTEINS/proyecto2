import axios from 'axios';

const ClientAxios = axios.create({
    baseURL : "http://localhot:7777"
});

export default ClientAxios;