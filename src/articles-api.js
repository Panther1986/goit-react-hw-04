import { createApi } from "unsplash-js";
import nodeFetch from "node-fetch";

unsplash.defaults.baseURL = "https://hn.algolia.com/api/v1";

export const fetchArticlesWithTopic = async (topic) => {
  const response = axios.get(`search?query=${topic}`);
  return (await response).data.hits;
};
