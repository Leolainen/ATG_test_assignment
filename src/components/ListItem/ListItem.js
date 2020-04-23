import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";

const ListItem = (props) => {
  const {
    className,
    children,
    component: Component = "li",
    disableDivider = false,
    disablePadding = false,
    ...other
  } = props;

  return (
    <Component
      className={classnames(
        styles.root,
        {
          [styles.padding]: !disablePadding,
          [styles.divider]: !disableDivider,
        },
        className
      )}
      {...other}
    >
      {children}
    </Component>
  );
};

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ListItem.uiName = "ListItem";

export default ListItem;
