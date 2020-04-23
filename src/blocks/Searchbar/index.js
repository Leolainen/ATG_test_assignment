// export { default } from "./Searchbar.js";

import { fetchProductByType } from "api";
import { useAppContext } from "containers/App/AppContext";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Searchbar from "./Searchbar";

const EnhancedSearchbar = React.forwardRef(function EnhancedSearchbar(
  props,
  ref
) {
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
    <Searchbar
      ref={ref}
      onChange={handleChange}
      value={searchValue}
      onSearchClick={handleSearch}
    />
  );
});

EnhancedSearchbar.propTypes = {
  className: PropTypes.string,
};

EnhancedSearchbar.uiName = "EnhancedSearchbar";

export default EnhancedSearchbar;
