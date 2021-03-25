import { createContext, ReactNode, useState } from 'react';

interface SelectedGenresContextData {
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}

interface SelectedGenresProps {
  children: ReactNode;
}

export const SelectedGenresContext = createContext({} as SelectedGenresContextData);

export function SelectedGenresProvider({ children }:SelectedGenresProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  
  return (
    <SelectedGenresContext.Provider value={{selectedGenreId, handleClickButton}}>
      {children}
    </SelectedGenresContext.Provider>
  )
}