import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
  useReducer,
} from "react";
import isAuthenticated from "../utils/isAuthenticated";

const userFromStorage = typeof window !== "undefined" ? !!localStorage.getItem("openland-user") && JSON.parse(localStorage.getItem("openland-user")) : null

// STATE
const intialState = {
  user: userFromStorage
};

// CREATE CONTEXT
const AuthContext = createContext();

// REDUCER
const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return { ...state, user: action.payload };
    default:
      return state
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
