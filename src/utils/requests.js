import persisty from "persisty";
import { showToast } from "../utils/toast";

const API_TOKEN = persisty.api_token;
const BASE_URL = import.meta.env.VITE_SERVER_URL + "/api";

async function makeRequest(url, method, body, otherHeaders) {
  try {
    return await fetch(BASE_URL + url, {
      method,
      body,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
        ...otherHeaders,
      },
    });
  } catch (error) {
    console.error(error);
    showToast("Error", "an error occurred, please check your internet", false);
    return {};
  }
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

export async function logout() {
  return await makeRequest("/auth/logout", "GET", null);
}

export async function register(name, email, password) {
  const response = await makeRequest(
    `/auth/register`,
    "POST",
    JSON.stringify({
      name,
      email,
      password,
    }),
    {
      "Content-Type": "application/json",
    }
  );
  return response;
}

export async function getExploreArticles(page) {
  const url = `/blogs/explore?page=${page ?? 1}`;
  const response = await makeRequest(url, "GET", null, {
    "Content-Type": "application/json",
  });
  return response;
}

export async function getUserArticles(page) {
  const url = `/blogs?page=${page ?? 1}`;
  const response = await makeRequest(url, "GET", null, {
    "Content-Type": "application/json",
  });
  return response;
}

export async function deleteArticle(id) {
  const response = await makeRequest(`/blogs/${id}`, "DELETE", null, {
    "Content-Type": "application/json",
  });
  return response;
}

export async function newArticle(formData) {
  const response = await makeRequest("/blogs", "POST", formData, {});
  return response;
}

export async function getArticle(id) {
  const url = `/blogs/${id}`;
  const response = await makeRequest(url, "GET", null, {
    "Content-Type": "application/json",
  });
  return response;
}

export async function updateArticle(id, formData) {
  const url = `/blogs/${id}?_method=PATCH`;
  const response = await makeRequest(url, "POST", formData, {});
  return response;
}

export async function getArticleRecommendations(id) {
  const url = `/blogs/${id}/recommendations`;
  const response = await makeRequest(url, "GET", null);
  return response;
}
