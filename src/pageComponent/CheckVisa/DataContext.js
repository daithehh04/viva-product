"use client"
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataB, setDataB] = useState('');

  return (
    <DataContext.Provider value={{ dataB, setDataB }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
