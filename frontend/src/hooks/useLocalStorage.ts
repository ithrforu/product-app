import { useState, useEffect } from 'react';
import { UseLocalStorageT } from '../types';

export const useLocalStorage: UseLocalStorageT = (initialValue, key)=> {

  const getInitialValue = () => {
    const storage = localStorage.getItem(key)

    if(storage) {
      return JSON.parse(storage);
    }

    return initialValue;
  };

  const [value, setValue] = useState(() => getInitialValue());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}