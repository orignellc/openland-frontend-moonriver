import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
  useReducer,
} from "react";

// STATE
const intialState = {
  user: null,
};

// CREATE CONTEXT
const AuthContext = createContext();

// REDUCER
const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

// CREATE PROVIDER
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, intialState);

  const value = { state, dispatch };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// EXPORT CONTEXT
export { AuthContext, AuthProvider };
