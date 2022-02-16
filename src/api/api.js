import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "f49da303-dcb7-45a3-8d2d-344bc87a72b5",
  },
});

export const getUsers = (page, pageSize) => {
  return instance
    .get(`users?page=${page}&count=${pageSize}`)
    .then((response) => {
      return response.data;
    });
};

export const getUser = (userId) => {
  return instance.get(`profile/${userId}`).then((response) => {
    return response.data;
  });
};

export const getFriends = () => {
  return instance.get("users?friend=true").then((response) => {
    return response.data;
  });
};

export const getFollower = (userId) => {
  return instance.post(`follow/${userId}`).then((response) => {
    return response.data;
  });
};

export const removeFollower = (userId) => {
  return instance.delete(`follow/${userId}`).then((response) => {
    return response.data;
  });
};
