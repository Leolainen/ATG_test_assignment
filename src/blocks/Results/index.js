import { fetchGameById } from "api";
import React, { useEffect } from "react";
import { useAppContext } from "containers/App/AppContext";
import PropTypes from "prop-types";
import Results from "./Results";

const EnhancedResults = (props) => {
  const { game, setGame, searchResults, isLoading } = useAppContext();

  useEffect(() => {
    extractGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResults]);

  const extractGame = async () => {
    let fetchedGame = {};

    if (searchResults !== undefined) {
      if (searchResults.upcoming) {
        fetchedGame = await fetchGameById(searchResults.upcoming[0].id);
      } else if (searchResults.result) {
        fetchedGame = await fetchGameById(searchResults.results[0].id);
      }
    }

    setGame(fetchedGame);
  };

  return (
    <Results
      betType={searchResults?.betType || ""}
      isLoading={isLoading}
      game={game}
    />
  );
};

EnhancedResults.propTypes = {
  className: PropTypes.string,
};

EnhancedResults.uiName = "EnhancedResults";

export default EnhancedResults;
