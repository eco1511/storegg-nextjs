import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

interface CallAPIPrips extends AxiosRequestConfig {
  token: boolean;
}

export default async function callAPI({
  url, method, data, token,
}: CallAPIPrips) {
  let headers = {};
  if (token) {
    const tokenCookie = Cookies.get('token');
    if (tokenCookie) {
      const jwtToken = atob(tokenCookie);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }
  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);
  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }
  const res = {
    error: false,
    message: 'success',
    data: response.data.count ? response.data : response.data.data,
  };
  return res.data;
}
