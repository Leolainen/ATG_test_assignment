import { fetchGameById } from "api";
import React, { useEffect } from "react";
import { useAppContext } from "containers/App/AppContext";
import classnames from "classnames";
import PropTypes from "prop-types";
import List from "components/List";
import ListItem from "components/ListItem";
import Collapse from "components/Collapse";
import styles from "./styles.module.css";

const Results = (props) => {
  const { game, setGame, searchResults, isLoading } = useAppContext();

  useEffect(() => {
    extractGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResults]);

  const Results =
    searchResults && game ? (
      <div>
        <h1>Results for {searchResults.betType}</h1>

        <div className={styles.listHeader}>
          <span>Race number</span>

          <span>Track name</span>

          <span>Start time</span>
        </div>

        {game?.races?.map((race) => (
          <List key={race.id} className={styles.resultList}>
            <ListItem className={styles.raceInfo}>
              <span>{race.number}</span>

              <span>{race.track.name}</span>

              <span>{race.startTime}</span>
            </ListItem>

            <ListItem
              className={styles.startsWrapper}
              disableDivider
              disablePadding
            >
              <Collapse label="Show all starts" className={styles.collapse}>
                <List>
                  <ListItem
                    className={classnames(
                      styles.startsHeader,
                      styles.startListItem
                    )}
                    disableDivider
                  >
                    <span>Start number</span>

                    <span>Horse name</span>

                    <span>Rider name</span>

                    <span>Trainer name</span>

                    <span>Horse fathers name</span>
                  </ListItem>

                  {race.starts.map((start) => (
                    <ListItem
                      key={start.number}
                      className={classnames(
                        styles.startInfo,
                        styles.startListItem
                      )}
                    >
                      <span>{start.number}</span>

                      <span>{start.horse.name}</span>

                      <span>
                        {`${start.driver.firstName} ${start.driver.lastName}`}
                      </span>

                      <span>
                        {`${start.horse.trainer.firstName} ${start.horse.trainer.lastName}`}
                      </span>

                      <span>{start.horse.pedigree.father.name}</span>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </ListItem>
          </List>
        ))}
      </div>
    ) : (
      <p>No results</p>
    );

  const extractGame = async () => {
    let fetchedGame = [];

    if (searchResults !== undefined) {
      if (searchResults.upcoming) {
        fetchedGame = await fetchGameById(searchResults.upcoming[0].id);
      } else if (searchResults.result) {
        fetchedGame = await fetchGameById(searchResults.results[0].id);
      }
    }

    setGame(fetchedGame);
  };

  return <>{isLoading ? <p>Loading ...</p> : Results}</>;
};

Results.propTypes = {
  className: PropTypes.string,
};

Results.uiName = "Results";

export default Results;
