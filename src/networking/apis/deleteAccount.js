import axios from 'networking/axios/axios';
import * as endpoints from '../endpoints/endpoints';

export const deleteAcccount = (id) =>
  Promise.resolve(axios.delete(endpoints.deleteAccount.replace("{id}",id)));
