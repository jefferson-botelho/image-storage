import qs from 'qs';

const CLIENT_ID = 'f6fd48be6e87355'
const ROOT_URL = 'https://api.imgur.com'

export default {
  login() {
    const params = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(params)}`
  }
};