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
