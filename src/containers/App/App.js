import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./style.module.css";
import Container from "components/Container";

const App = (props) => {
  const { className, children, ...other } = props;

  return (
    <div className={classnames(styles.root, className)} {...other}>
      <header className={styles.header}>This is header</header>

      <Container component="main" className={styles.main}>
        {children}
      </Container>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

App.uiName = "App";

export default App;
