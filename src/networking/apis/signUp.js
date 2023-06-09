import axios from 'networking/axios/axios';
import * as endpoints from '../endpoints/endpoints';

export const signUp = async (data) =>
  Promise.resolve(axios.post(endpoints.signUp, data));
