import {BASE_API_URL} from '../constants';

//templete for our API calls
const request = (options) => {
    return fetch(options.url)
    .then(response =>
      response.json().then(json => {
        if(!response.ok){
          return Promise.reject(json);
        }
        return json;
      })
    );
};

export function getAlias(params) {
  return request({
    url: BASE_API_URL + "amount=10",
  });
}
