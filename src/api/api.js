import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "f49da303-dcb7-45a3-8d2d-344bc87a72b5",
  },
});

export const getUsersFromServer = (page, pageSize) => {
  return instance
    .get(`users?page=${page}&count=${pageSize}`)
    .then((response) => {
      return response.data;
    });
};

export const getUserFromServer = (userId) => {
  return instance.get(`profile/${userId}`).then((response) => {
    return response.data;
  });
};

export const getFriendsFromServer = () => {
  return instance.get("users?friend=true&count=16").then((response) => {
    return response.data;
  });
};

export const getFollowerFromServer = (userId) => {
  return instance.post(`follow/${userId}`).then((response) => {
    return response.data;
  });
};

export const removeFollowerFromServer = (userId) => {
  return instance.delete(`follow/${userId}`).then((response) => {
    return response.data;
  });
};
