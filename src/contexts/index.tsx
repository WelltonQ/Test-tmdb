import { createContext, useContext, useState, ReactNode } from 'react';

type MoviesResultsType = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

type FilterContextType = {
    selectedGenres: number[]
    movies: MoviesResultsType[]
    setSelectedGenres: (filter: number[]) => void
    setMovies: (values: MoviesResultsType[]) => void
}

type AuthProviderProps = {
    children: ReactNode
}

const FilterContext = createContext({} as FilterContextType);
  
export function FilterProvider({ children }: AuthProviderProps) {
  const [selectedGenres, setSelectedGenres] =  useState<number[]>([]);
  const [movies, setMovies] = useState<MoviesResultsType[]>([])

  return (
    <FilterContext.Provider value={{ selectedGenres, movies, setMovies, setSelectedGenres }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}