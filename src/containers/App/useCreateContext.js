import { useState, useCallback } from "react";

export const defaultState = {
  game: [],
  products: [],
  searchResults: {},
  isLoading: false,
};

export default (initialState = defaultState) => {
  const initial = initialState;
  const [searchResults, setSearchResults] = useState(initial.searchResults);
  const [products, setProducts] = useState(initial.products);
  const [game, setGame] = useState(initial.game);
  const [isLoading, setIsLoading] = useState(initial.isLoading);

  const onFetchStart = useCallback(() => {
    console.log("onFetchStart");
    setIsLoading(true);
  }, []);

  const onFetchEnd = useCallback(() => {
    console.log("onFetchEnd");
    setIsLoading(false);
  }, []);

  return {
    game,
    setGame,
    products,
    setProducts,
    isLoading,
    searchResults,
    setSearchResults,
    onFetchStart,
    onFetchEnd,
  };
};
