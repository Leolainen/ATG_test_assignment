import { fetchGameById } from "api";
import React, { useEffect } from "react";
import { useAppContext } from "containers/App/AppContext";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const Results = (props) => {
  const { className, children, ...other } = props;
  const { game, setGame, searchResults, isLoading } = useAppContext();

  useEffect(() => {
    extractGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResults]);

  const Loading = isLoading && <p>Loading ...</p>;

  const Results =
    !isLoading && searchResults && game !== undefined ? (
      <ul>
        <li>
          <h1>{searchResults.betType}</h1>
        </li>

        {game.races.map((race) => (
          <li>
            <div>race number: {race.number}</div>

            <div>track name: {race.track.name}</div>

            <div>start time: {race.startTime}</div>

            <div>
              <h5>Starts:</h5>

              <ol>
                {race.starts.map((start) => (
                  <li style={{ marginBottom: 16 }}>
                    <div>start number: {start.number}</div>

                    <div>horse: {start.horse.name}</div>

                    <div>
                      <h6>expanded view:</h6>

                      <div>
                        rider:{" "}
                        {`${start.driver.firstName} ${start.driver.lastName}`}
                      </div>

                      <div>
                        trainer:{" "}
                        {`${start.horse.trainer.firstName} ${start.horse.trainer.lastName}`}
                      </div>

                      <div>
                        horse father: {start.horse.pedigree.father.name}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <p>No results</p>
    );

  const extractGame = async () => {
    let fetchedGame;

    if (searchResults) {
      if (searchResults.upcoming) {
        fetchedGame = await fetchGameById(searchResults.upcoming[0].id);
      } else {
        fetchedGame = await fetchGameById(searchResults.results[0].id);
      }

      setGame(fetchedGame);
    }
  };

  return (
    <>
      {Loading}
      {Results}
    </>
  );
};

Results.propTypes = {
  className: PropTypes.string,
};

Results.uiName = "Results";

export default Results;
