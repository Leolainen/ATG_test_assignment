import React from "react";
import PropTypes from "prop-types";
import App from "./App";
import { AppContextProvider } from "./AppContext";

const EnhancedApp = (props) => {
  const { children, ...other } = props;

  return (
    <AppContextProvider {...other}>
      <App>{children}</App>
    </AppContextProvider>
  );
};

EnhancedApp.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EnhancedApp;
