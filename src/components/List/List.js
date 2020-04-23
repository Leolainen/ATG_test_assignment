import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";

const List = (props) => {
  const { className, children, component: Component = "ul", ...other } = props;

  return (
    <Component className={classnames(styles.root, className)} {...other}>
      {children}
    </Component>
  );
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

List.uiName = "List";

export default List;
