import axios from 'networking/axios/axios';
import * as endpoints from '../endpoints/endpoints';

export const userLogin = async (data) =>
  Promise.resolve(axios.post(endpoints.userLogin, data));

export const signUp = async (data) =>
  Promise.resolve(axios.post(endpoints.signUp, data));
