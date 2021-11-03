import axios from "axios";

const apiURL =
  process.env.NODE_ENV === "development" ? "http://localhost:8000" : "produrl";

axios.defaults.withCredentials = true;

export const defaultRoute = async () => {
  try {
    const response = await axios.get(apiURL);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const register = async (newUser) => {
  try {
    const response = await axios.post(`${apiURL}/auth/user/register`, newUser);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const login = async (userInfo) => {
  try {
    const response = await axios.post(`${apiURL}/auth/user/login`, userInfo);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const logout = async () => {
  try {
    await axios.get(`${apiURL}/auth/user/logout`);
  } catch (error) {
    console.error(error.message);
  }
};

export const getAllComments = async () => {
  try {
    const response = await axios.get(`${apiURL}/api/comments`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getOneComment = async (id) => {
  try {
    const response = await axios.get(`${apiURL}/api/comments/:id`, id);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const updateComment = async (commentInfo) => {
  try {
    const response = await axios.put(`${apiURL}/api/comments/:id`, commentInfo);
  } catch (error) {
    console.error(error.message);
  }
};

export const createComment = async (newComment) => {
  try {
    await axios.post(`${apiURL}/api/comments/:id`, newComment);
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteComment = async (id) => {
  try {
    await axios.delete(`${apiURL}/api/comments/:id`, id);
  } catch (error) {
    console.error(error.message);
  }
};
