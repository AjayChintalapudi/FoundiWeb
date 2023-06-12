import axios from 'networking/axios/axios';
import * as endpoints from '../endpoints/endpoints';

export const editProfile = (data) =>
  Promise.resolve(axios.put(endpoints.editProfile, data));
