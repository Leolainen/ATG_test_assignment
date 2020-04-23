import Button from "components/Button";
import Input from "components/Input";
import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.css";

const Searchbar = React.forwardRef(function Searchbar(props, ref) {
  const { className, onSearchClick, ...other } = props;

  return (
    <Input
      ref={ref}
      label="Search for a gametype:"
      type="search"
      cta={<Button onClick={onSearchClick}>Search</Button>}
      className={styles.root}
      placeholder="Search for V4, V64, V65 or V75 ..."
      {...other}
    />
  );
});

Searchbar.propTypes = {
  className: PropTypes.string,
};

Searchbar.uiName = "Searchbar";

export default Searchbar;
