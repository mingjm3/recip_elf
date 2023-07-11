// shamelessly stolen from https://endertech.com/blog/using-reacts-context-api-for-global-state-management
import React, { createContext, useReducer } from 'react';
import IngredientsReducer from './IngredientsReducer';

const initialState = {
  ingredients: []
}

export const IngredientsContext = createContext(initialState);

export const IngredientsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(IngredientsReducer, initialState);

  // Actions for changing state

  function addIngredient(item) {
    dispatch({
      type: 'ADD_INGREDIENT',
      payload: item
    });
  }
  function removeIngredient(item) {
    dispatch({
      type: 'REMOVE_INGREDIENT',
      payload: item
    });
  }
  const providerValue = {
    ingredients: state.ingredients,
    addIngredient,
    removeIngredient
  }

  return (
    <IngredientsContext.Provider value={providerValue}>
      {children}
    </IngredientsContext.Provider>
  )
}
