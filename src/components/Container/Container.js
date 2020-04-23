import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";

const Container = (props) => {
  const { className, children, component: Component = "div", ...other } = props;

  return (
    <Component
      className={classnames(styles.root, styles.maxWidth, className)}
      {...other}
    >
      {children}
    </Component>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  component: PropTypes.elementType,
};

Container.uiName = "Container";

export default Container;
