import './styles.scss'
import { useState, useEffect } from 'react';
import { api } from '../../services/api'
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Card } from '../../components/Card';
import { useFilter } from '../../contexts';

const apiKey = import.meta.env.VITE_API_KEY

type GenresType = {
  id: number
  name: string
}

interface MoviesResultsType {
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


export function Home() {
  const { selectedGenres, setSelectedGenres, movies, setMovies } = useFilter();

  const [genres, setGenres] = useState([]);
  const [moviesSelected, setMoviesSelected] = useState<MoviesResultsType[]>([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1)

  function handleCurrentPage(page: number) {
    setCurrentPage(page)
  }

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await api.get(`/movie/popular?${apiKey}&language=pt-BR&page=${currentPage}`);
        setTotalPages(response.data.total_pages)
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    const fetchGenres = async () => {
      try {
        const response = await api.get(`/genre/movie/list?${apiKey}&language=pt-BR`);
        setGenres(response.data.genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchPopularMovies();
    fetchGenres();
  }, [currentPage]);

  useEffect(() => {
      const filteredMovies = movies?.filter((movie) => movie.genre_ids.some((genreId) => selectedGenres.includes(genreId)))

      setMoviesSelected(filteredMovies);
  }, [selectedGenres]);

  function handleGenreToggle(genreId: number) {
    if (selectedGenres.includes(genreId)) {
      setSelectedGenres(selectedGenres.filter((id) => id !== genreId));
    } else {
      setSelectedGenres([...selectedGenres, genreId]);
    }
  };

  return (
    <>
      <Header />
      <section className='bannerHome'>
        <div className='filters content'>
          <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
          <span>Filtre por:</span>
          <div className='buttonsFilters'>
            {genres?.map((genre: GenresType) => (
              <button 
                key={genre.id} 
                onClick={() => handleGenreToggle(genre.id)}
                className={selectedGenres.includes(genre.id) ? 'active' : 'inactive'}
              >
                {genre.name}
                {selectedGenres.includes(genre.id) ? (<span className='badge'>x</span>) : '' }
              </button>     
            ))}
          </div>
        </div>
      </section>
      <main className='content'>
        {!movies.length && <span className='loading'>Carregando...</span>}
          <div className='cards'>
            <ul>
                {!moviesSelected.length && !selectedGenres.length && movies?.map(({ id, title, release_date, poster_path }) => (
                  <li key={id}>
                    <Card id={id} title={title} date={release_date} image={poster_path} />      
                  </li>     
                ))}

                {!!moviesSelected.length && moviesSelected?.map(({ id, title, release_date, poster_path }) => (
                  <li key={id}>
                    <Card id={id} title={title} date={release_date} image={poster_path} /> 
                  </li>          
                ))}

                {!moviesSelected.length && !!selectedGenres.length && (<h2>Não encontramos filme popular para esse gênero selecionado</h2>)}
                
            </ul>
        </div>
      </main>
      {!selectedGenres.length && (
        <Pagination 
          handleCurrentPage={handleCurrentPage} 
          currentPage={currentPage} 
          totalPages={totalPages} 
        />
      )}
    </>
  )
}
