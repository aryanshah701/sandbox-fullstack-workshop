import { Person } from "./types";

const axios = require("axios");
const baseUrl = "http://localhost:8000";

const get = async (endpoint: string) => {
  const url = baseUrl + endpoint;
  return await axios.get(url);
};

const post = async (endpoint: string, data: Person) => {
  const url = baseUrl + endpoint;
  return await axios.post(url, data);
};

const deleteData = async (endpoint: string) => {
  const url = baseUrl + endpoint;
  return await axios.delete(url);
};

/**
 * Add methods to interact with the api like so
 * example: () => <get/post>("<api-endpoint>")
 */
const services = {
  // TODO Practice 1: add a method to get members here
  // TODO Practice 2: add a method to post a member here
  // TODO Practice 3: add a method delete members here
};

export default services;
