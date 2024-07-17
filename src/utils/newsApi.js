import { handleServerResponse } from "./utils";

// const BASE_URL = "https://nomoreparties.co/news/v2/everything";
const BASE_URL = "https://newsapi.org/v2/everything";
const API_KEY = "6d5e1c5728d04160bf4bd6fbaeecb16c";

const fetchNews = (query) => {
  const params = {
    q: query,
    apiKey: API_KEY,
    from: new Date(new Date().setDate(new Date().getDate() - 7)).toISOString(),
    to: new Date().toISOString(),
    pageSize: 100,
  };

  const url = `${BASE_URL}?q=${params.q}&apiKey=${params.apiKey}&from=${params.from}&to=${params.to}&pageSize=${params.pageSize}`;

  return fetch(url)
    .then(handleServerResponse)
    .then((data) => data.articles);
};

export default { fetchNews };
