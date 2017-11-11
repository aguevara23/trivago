import axios from 'axios';

import favorites from './fav';
import all from './all';

const ROOT_URL = '';

export function getHotels() {
  const request = axios.get(`${ROOT_URL}`);

  return {
    type: GET_,
    payload: request
  };

}
