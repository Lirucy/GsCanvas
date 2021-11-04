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

export const getAllArt = async () => {
  try {
    const response = await axios.get(`${apiURL}/api/art/`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getOnePiece = async (id) => {
  try {
    const response = await axios.get(`${apiURL}/api/art/${id}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getAllComments = async () => {
  try {
    const response = await axios.get(`${apiURL}/api/comments/`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getOneComment = async (id) => {
  try {
    const response = await axios.get(`${apiURL}/api/comments/${id}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const updateComment = async (commentInfo, commentId) => {
  try {
    const response = await axios.put(
      `${apiURL}/api/comments/${commentId}`,
      commentInfo
    );
  } catch (error) {
    console.error(error.message);
  }
};

export const createComment = async (newComment, artId) => {
  try {
    await axios.post(`${apiURL}/api/comments/${artId}`, newComment);
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteComment = async (commentId) => {
  try {
    await axios.delete(`${apiURL}/api/comments/${commentId}`);
  } catch (error) {
    console.error(error.message);
  }
};
