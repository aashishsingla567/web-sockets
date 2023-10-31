import axios from "axios";

const baseURL = "http://localhost:3000/";

export const mfetch = axios.create({
  baseURL,
});

export const getItems = async () => {
  const { data } = await mfetch.get("/items");
  return data;
};
