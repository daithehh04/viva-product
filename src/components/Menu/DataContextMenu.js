"use client"
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataInput, setDataInput] = useState('');

  return (
    <DataContext.Provider value={{ dataInput, setDataInput }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
