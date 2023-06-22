import axios from "axios";

export const getData = async (url, token) => {
  const res = await axios.get(`http://localhost:5000${url}`, {
    headers: { Authorization: `Bearer:${token}}` },
    withCredentials: true,
  });

  return res;
};

export const postData = async (url, data, token) => {
  const res = await axios.post(`http://localhost:5000${url}`, data, {
    headers: { Authorization: `Bearer:${token}` },
    withCredentials: true,
  });

  return res;
};