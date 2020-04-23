import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";

const Button = (props) => {
  const { className, children, ...other } = props;

  return (
    <button
      className={classnames(styles.root, styles.color, className)}
      {...other}
    >
      <span className={styles.label}>{children}</span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button.uiName = "Button";

export default Button;
