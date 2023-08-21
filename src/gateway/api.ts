// src/api.ts
import axios from "axios";

const API_BASE_URL = "https://api.coingecko.com/api/v3";

export const getExchanges = async () => {
  const response = await axios.get(`${API_BASE_URL}/exchanges`);
  return response.data;
};

export const getExchangeById = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/exchanges/${id}`);
  return response.data;
};
