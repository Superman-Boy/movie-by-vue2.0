import 'whatwg-fetch'

const request = (api, opts) => {
  let requresUrl = 'http://127.0.0.1:3000/api/' + api
  return fetch(requresUrl, opts).then((response) => {
    return response.json()
  })
}

export default {
  getInTheaters: () => {
    return request('in_theaters')
  }
}
