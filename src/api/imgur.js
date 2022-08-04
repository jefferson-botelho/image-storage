import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = 'f6fd48be6e87355'
const ROOT_URL = 'https://api.imgur.com'

export default {
  login() {
    const params = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(params)}`
  },
  async fetchImages(token) {
    return await axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },
  uploadImages(images, token) {
    const promises = Array.from(images).map(image => {
      const formData = new FormData();
      formData.append('image', image);

      return axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    });

    return Promise.all(promises);
  }
};