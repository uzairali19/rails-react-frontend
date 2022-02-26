import axios from 'axios';

const api = 'https://rails-react-backend.herokuapp.com';

export const getComics = () => axios.get(`${api}/comicbooks`);
