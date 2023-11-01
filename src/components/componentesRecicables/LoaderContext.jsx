import React, { createContext, useState, useContext } from 'react';
import Loader from './Loader';

const LoaderContext = createContext();

export const useLoader = () => {
  return useContext(LoaderContext);
};

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {loading && <Loader />}
      {children}
    </LoaderContext.Provider>
  );
};



