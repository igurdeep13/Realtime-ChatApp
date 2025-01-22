import axios from "axios";

const api = axios.create({
  baseURL: "https://api.freeapi.app/api/v1/chat-app/chats/chat-app",
  headers: { "Content-Type": "application/json" },
});

export default api;
