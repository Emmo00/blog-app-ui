import persisty from "persisty";

const API_TOKEN = persisty.api_token;
const BASE_URL = import.meta.env.VITE_SERVER_URL + '/api';

async function makeRequest(url, method, body, otherHeaders) {
  return await fetch(BASE_URL + url, {
    method,
    body,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
      ...otherHeaders,
    },
  });
}

export async function loggedIn() {
  const response = await makeRequest("/auth/loggedIn", "get");

  return response.ok;
}

export async function login(email, password) {
  const response = await makeRequest(
    `/auth/login`,
    "POST",
    JSON.stringify({
      email,
      password,
    }),
    {
      "Content-Type": "application/json",
    }
  );
  return await response.json();
}

export async function getExploreArticles() {
  const response = await makeRequest(
    "/blogs/explore",
    "GET",
    null,
    {
      "Content-Type": "application/json",
    }
  );
  return await response.json();
}
