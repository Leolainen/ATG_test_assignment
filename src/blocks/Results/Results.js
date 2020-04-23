import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import List from "components/List";
import ListItem from "components/ListItem";
import Collapse from "components/Collapse";
import styles from "./styles.module.css";

const Results = (props) => {
  const { game = {}, isLoading = false, betType } = props;

  const localeDate = (date) => {
    const dateObj = new Date(date);

    return dateObj.toLocaleString();
  };

  const Results =
    game && Object.keys(game).length > 0 ? (
      <div>
        <h1>Results for {betType}</h1>

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

              <span>{localeDate(race.startTime)}</span>
            </ListItem>

            <ListItem
              className={styles.startsWrapper}
              disableDivider
              disablePadding
            >
              <Collapse label="Starts" className={styles.collapse}>
                <List>
                  {race.starts.map((start) => (
                    <>
                      <ListItem
                        key={start.number}
                        className={classnames(
                          styles.startsHeader,
                          styles.startListItem
                        )}
                        disableDivider
                      >
                        <span>Start number</span>
                        <span>Horse name</span>
                        <span>Rider name</span>
                      </ListItem>

                      <ListItem>
                        <div
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
                        </div>

                        <Collapse label="More">
                          <div
                            className={classnames(
                              styles.startsHeader,
                              styles.startListItem,
                              styles.more
                            )}
                          >
                            <span>Trainer name</span>

                            <span>Horse fathers name</span>
                          </div>

                          <ListItem
                            disableDivider
                            component="div"
                            className={classnames(
                              styles.startListItem,
                              styles.more
                            )}
                          >
                            <span>
                              {`${start.horse.trainer.firstName} ${start.horse.trainer.lastName}`}
                            </span>

                            <span>{start.horse.pedigree.father.name}</span>
                          </ListItem>
                        </Collapse>
                      </ListItem>
                    </>
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

  return <>{isLoading ? <p>Loading ...</p> : Results}</>;
};

Results.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  betType: PropTypes.string,
  game: PropTypes.object,
};

Results.uiName = "Results";

export default Results;
