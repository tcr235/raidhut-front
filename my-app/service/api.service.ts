import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3030/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS"
  }
});

export default api;