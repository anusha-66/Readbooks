import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  wishlist: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props:any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const addBookToWatchlist = (book: any) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: book });
  };

  return (
    <GlobalContext.Provider
      value={{
        wishlist: state.wishlist,
        //addBookToWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};