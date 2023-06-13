import axios from 'networking/axios/axios';
import * as endpoints from '../endpoints/endpoints';

export const googleSignIn = (data) =>
  Promise.resolve(axios.post(endpoints.googleSignIn, data));
