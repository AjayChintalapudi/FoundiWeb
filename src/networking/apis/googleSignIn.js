import axios from 'networking/axios/axios';
import * as endpoints from '../endpoints/endpoints';

export const googleSignUp = (data) =>
  Promise.resolve(axios.post(endpoints.googleSignUp, data));
