import axios from 'axios';

const api = axios.create({
  baseURL: 'http://exam.bs.tmp.br:3002',
});

export default api;
