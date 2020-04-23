import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";

const Collapse = (props) => {
  const {
    className,
    children,
    component: Component = "div",
    label,
    ...other
  } = props;
  const [collapsed, setCollapsed] = useState(true);
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const currentHeight = wrapperRef.current
      ? wrapperRef.current.clientHeight
      : 0;

    setWrapperHeight(collapsed ? 0 : currentHeight);
  }, [collapsed]);

  const handleClick = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Component
      className={classnames(
        styles.root,
        {
          [styles.expanded]: !collapsed,
        },
        className
      )}
      data-testid="collapse"
      {...other}
    >
      <div
        className={classnames(styles.header, {
          [styles.expanded]: !collapsed,
        })}
        data-testid="collapse-header"
        onClick={handleClick}
      >
        <h6>{label}</h6>

        <span
          className={classnames(styles.arrow, {
            [styles.rotate]: !collapsed,
          })}
        >
          ↓
        </span>
      </div>

      <div className={styles.wrapper} style={{ height: wrapperHeight }}>
        <div className={styles.innerWrapper} ref={wrapperRef}>
          {children}
        </div>
      </div>
    </Component>
  );
};

Collapse.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
};

Collapse.uiName = "Collapse";

export default Collapse;
