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
