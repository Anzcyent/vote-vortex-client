import axios from "axios";

const urlStart = (url) =>
  process.env.NODE_ENV === "development"
    ? `http://localhost:5000${url}`
    : `https://vote-vortex.onrender.com${url}`;

export const getData = async (url, token) => {
  const res = await axios.get(urlStart(url), {
    headers: { Authorization: `Bearer:${token}}` },
    withCredentials: true,
  });

  return res;
};

export const postData = async (url, data, token) => {
  const res = await axios.post(urlStart(url), data, {
    headers: { Authorization: `Bearer:${token}` },
    withCredentials: true,
  });

  return res;
};

export const putData = async (url, data, token) => {
  const res = await axios.put(urlStart(url), data, {
    headers: { Authorization: `Bearer:${token}` },
    withCredentials: true,
  });

  return res;
};
