import { fetchProductByType } from "api";
import { useAppContext } from "containers/App/AppContext";
import Button from "components/Button";
import Input from "components/Input";
import PropTypes from "prop-types";
import React, { useState } from "react";
import styles from "./styles.module.css";

const Searchbar = React.forwardRef(function Searchbar(props, ref) {
  const { className, ...other } = props;
  const { setSearchResults, onFetchStart, onFetchEnd } = useAppContext();
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const fetchGames = async () => {
    const results = await fetchProductByType(searchValue);
    setSearchResults(results);
    onFetchEnd();
  };

  const handleSearch = () => {
    onFetchStart();
    fetchGames();
  };

  return (
    <Input
      label="Search for a gametype:"
      type="search"
      onChange={handleChange}
      value={searchValue}
      cta={<Button onClick={handleSearch}>Search</Button>}
      className={styles.root}
      {...other}
    />
  );
});

Searchbar.propTypes = {
  className: PropTypes.string,
};

Searchbar.uiName = "Searchbar";

export default Searchbar;
