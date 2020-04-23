import { PRODUCTS_URL, GAMES_URL } from "constants/api";

// Products
export const fetchProducts = async () => {
  return await fetchRace(PRODUCTS_URL);
};

// expeted gameTypes:   V75, V65, V64, V4
export const fetchProductByType = async (gameType) => {
  return await fetchRace(PRODUCTS_URL, gameType.toUpperCase());
};

// Games
export const fetchGames = async () => {
  return await fetchRace(GAMES_URL);
};

export const fetchGameById = async (gameId) => {
  return await fetchRace(GAMES_URL, gameId);
};

const fetchRace = async (url, parameters = "") => {
  try {
    const res = await fetch(url + parameters);
    const json = await res.json();

    return json;
  } catch (err) {
    return err;
  }
};
