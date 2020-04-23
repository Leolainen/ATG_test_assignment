import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";

const Input = React.forwardRef(function Input(props, ref) {
  const { children, className, label, cta, ...other } = props;

  return (
    <div className={classnames(styles.root, className)}>
      {label && <label className={styles.label}>{label}</label>}

      <div className={styles.inner}>
        <input ref={ref} className={styles.input} {...other} />

        {cta && <div className={styles.cta}>{cta}</div>}
      </div>
    </div>
  );
});

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  cta: PropTypes.element,
};

Input.uiName = "Input";

export default Input;
