import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api"
});

api.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export async function login(email: string, password: string) {
  return api.post("/auth/login", { email, password });
}

export async function register(name: string, email: string, password: string) {
  return api.post("/auth/register", { name, email, password });
}

export async function createRoom(payload: {
  sport: string;
  date: string;
  time: string;
  location: string;
  requiredPlayers: number;
  description?: string;
}) {
  return api.post("/rooms", payload);
}

export async function getNearbyRooms(lat: number, lng: number, radiusKm = 10) {
  return api.get("/rooms/nearby", { params: { lat, lng, radiusKm } });
}

export async function joinRoom(roomId: string) {
  return api.post(`/rooms/${roomId}/join`);
}

export default api;
