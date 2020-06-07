import axios from 'axios';

 const api = axios.create({//Faz com que não seja necessário repetir o endereço que sempre será o mesmo
    baseURL: 'http://localhost:3333'
 });

 export default api;