import { BASE_URL, Routes, Methods } from './constants.js';

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


const getRequest = () => load(Routes.GET_DATA, Methods.GET);

const postRequest = (data) => load(Routes.POST_DATA, Methods.POST, data);

export { getRequest, postRequest };
