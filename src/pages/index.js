import React from "react";
import PropTypes from "prop-types";
import AppBase from "containers/App";
import Searchbar from "blocks/Searchbar";
import Results from "blocks/Results";

const App = React.forwardRef(function App(props, ref) {
  const { className, ...other } = props;

  return (
    <AppBase ref={ref} className={className} {...other}>
      <Searchbar />
      <Results />
    </AppBase>
  );
});

App.propTypes = {
  className: PropTypes.string,
};

App.uiName = "App";

export default App;
