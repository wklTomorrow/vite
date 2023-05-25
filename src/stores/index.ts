import React from 'react';
import { CounterStore } from './CounterStore';

export const stores = Object.freeze({
  counterStore: new CounterStore(),
});

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;

export const useStore = () => {
  const store = React.useContext(storesContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('You have forgot to use StoresProvider, shame on you.');
  }
  return store;
};
