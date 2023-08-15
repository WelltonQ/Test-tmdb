import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { format } from 'date-fns'

import './styles.scss'
import avatar from '../../assets/avatar.svg'
import { Header } from '../../components/Header'
import { api } from '../../services/api'
import { Card } from '../../components/Card';

const apiKey = import.meta.env.VITE_API_KEY
const imageUrl = import.meta.env.VITE_IMG

type GenresType = {
    id: number
    name: string
}

interface MovieType {
    id: string | undefined
    title: string
    release_date: string
    genres: string
    runtime: string
    overview: string
    poster_path: string
    year: number
    vote_average: string
}

interface TrailerType {
    key: string
}

interface CastType {
    id: number
    profile_path: string
    name: string
    character: string
}

interface CrewType {
    id: number
    name: string
    job: string
}

export function Movie() {
    const [movie, setMovie] = useState<MovieType>({} as MovieType)
    const [movieRecommendations, setMovieRecommendations] = useState<MovieType[]>([])
    const [movieTrailer, setMovieTrailer] = useState<TrailerType>({} as TrailerType)
    const [cast, setCast] = useState<CastType[]>([])
    const [crew, setCrew] = useState<CrewType[]>([])
    const { id } = useParams()

    useEffect(() => {
        const fetchDetailsMovie = async () => {
            try {
                const response = await api.get(`/movie/${id}?${apiKey}&language=pt-BR`);
                const hours = Math.floor(response.data.runtime / 60)
                const minutes = response.data.runtime % 60
                const userRating = Math.ceil(response.data.vote_average * 100)

                const movie = {
                    id,
                    title: response.data.title,
                    release_date: format(new Date(response.data.release_date), 'dd/MM/yyyy'),
                    genres: response.data.genres.map((genre: GenresType) => genre.name).join(', '),
                    runtime: `${hours}h ${minutes}m`,
                    overview: response.data.overview,
                    poster_path: response.data.poster_path,
                    year: new Date(response.data.release_date).getFullYear(),
                    vote_average: String(userRating).substring(0, 2)
                }
                setMovie(movie)
            } catch (error) {
                console.error('Error fetching details movie:', error);
          }
        };
  
        const fetchRecommendations = async () => {
          try {
            const response = await api.get(`/movie/${id}/recommendations?${apiKey}&language=pt-BR`);
            setMovieRecommendations(response.data.results);
          } catch (error) {
                console.error('Error fetching Recommendations:', error);
          }
        };

        const fetchTrailer = async () => {
          try {
            const response = await api.get(`/movie/${id}/videos?${apiKey}&language=pt-BR`);
            setMovieTrailer(response.data.results[0])
          } catch (error) {
                console.error('Error fetching Trailer:', error);
          }
        };
    
        const fetchCast = async () => {
          try {
            const response = await api.get(`/movie/${id}/credits?${apiKey}&language=pt-BR`);
            setCrew(response.data.crew)
            setCast(response.data.cast)
          } catch (error) {
                console.error('Error fetching Cast:', error);
          }
        };

        fetchDetailsMovie()
            .then(fetchRecommendations)
            .then(fetchTrailer)
            .then(fetchCast)
            .catch(error => {
                console.error('Error during fetching:', error);
            }
        );
        
    }, [id]);
    
    const moviesRecommendationsWithPosters = movieRecommendations?.filter(movie => movie.poster_path);
      
    const uniqueCrewMembers: CrewType[] = [];
    const seenIds = new Set();
    crew?.forEach(({ id, name, job }) => {
        if (!seenIds.has(id)) {
            seenIds.add(id);
            uniqueCrewMembers.push({ id, name, job });
        }
    });

    return (
    <>
        <Header />
        <section className='bannerDetails'>
            <div className='details content'>
                <img src={imageUrl + movie.poster_path} alt='Capa do filme' />
                <div className='resume'>
                    <h1>{movie.title} ({movie.year})</h1>
                    <span>16 anos • {movie.release_date} • {movie.genres} • {movie.runtime}</span>
                    
                    <div className='container-circular'>
                        <div className='circular-progress'>
                            <span className='progress-value'>{movie.vote_average}%</span>
                        </div>
                        <span>Avaliação dos usuários</span>
                    </div>

                    <h3>Sinopse</h3>
                    <p className='description'>{movie.overview}</p>
                    <div className='characters'>
                        {uniqueCrewMembers?.slice(0, 6).map(({id, name, job}) => (
                            <div className='person' key={id}>
                                <p className='name'>{name}</p>
                                <p className='role'>{job}</p>
                            </div>
                        ))}
                    </div>
                </div>  
            </div>    
        </section>
        <div className='content'>
            <section className='cardsCast'>
                <h2>Elenco original</h2>
                <div className='cardsCastRow'>
                    {cast?.map(({id, name, profile_path, character}) => (
                        <div className='cardCast' key={id}>
                            <img src={profile_path ? imageUrl + profile_path : avatar} alt='Rosto do ator/atriz' />
                            <span className='name'>{name}</span>
                            <span className='character'>{character}</span>
                        </div>
                    ))}
                </div>
            </section>
            <section className='trailer'>
                <h2>Trailer</h2>
                <iframe
                    width='800'
                    height='450'
                    src={`https://www.youtube.com/embed/${movieTrailer?.key}`}
                    title='Trailer'
                ></iframe>
            </section>

            <section className='recommendations'>
                {!!moviesRecommendationsWithPosters.length ? (
                    <>
                        <h2 className='titleRecommendations'>Recomendações</h2>
                        <div className='recommendationsCards'>
                            <ul>
                                {
                                    moviesRecommendationsWithPosters?.slice(0, 6).map(({ id, title, release_date, poster_path }) => (
                                        <li key={id}>
                                            <Card id={id} title={title} date={release_date} image={poster_path} />  
                                        </li>         
                                    ))
                                }
                            </ul>
                        </div>
                    </>
                ) : <Link to='/' className='backHome'>Volte para explorar mais filmes</Link>}
            </section>
        </div>
    </>
  )
}
