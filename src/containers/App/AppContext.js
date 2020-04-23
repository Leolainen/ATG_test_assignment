import React from "react";
import PropTypes from "prop-types";
import useCreateContext from "./useCreateContext";

export const AppContext = React.createContext({});

export function AppContextProvider(props) {
  const context = useCreateContext(props);
  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
}

export const useAppContext = () => React.useContext(AppContext);

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContext;
