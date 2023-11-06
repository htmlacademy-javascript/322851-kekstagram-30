import { BASE_URL, ROUTES, METHODS } from './constants.js';

const load = (path, method, data = null) => fetch(`${BASE_URL}${path}`, {method: method, body: data})
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  })
  .catch(() => {
    throw new Error();
  }
  );


const getRequest = () => load(ROUTES.getData, METHODS.GET);

const postRequest = (data) => load(ROUTES.postData, METHODS.POST, data);

export { getRequest, postRequest };
