import './styles.scss'
import image from '../../assets/image.png'
import { useState, useEffect } from 'react'
import { api } from '../services/api'
import { Link } from 'react-router-dom'

const apiKey = import.meta.env.VITE_API_KEY
const imageUrl = import.meta.env.VITE_IMG

type ResultsType = {
    title: string
    release_date: string
    poster_path: string
    id: number
}

interface MoviesType {
    page: number
    results: ResultsType[]
    total_pages: number
    total_results: number
}

export function Card() {
    const [movies, setMovies] = useState<MoviesType>({} as MoviesType)

    useEffect(() => {
        api.get(`/popular?${apiKey}`)
        .then(response => setMovies(response.data))
    }, [])


    //FAZER TRATATIVA PARA LOADING
  return (
    <div className='card'>
        <ul>
            {movies?.results?.map(({ id, title, release_date, poster_path }) => (
                <li key={id}>
                    <Link to={`movie/${id}`}>
                        <img src={imageUrl + poster_path} alt={title} />
                        <h2>{title}</h2>
                        <span>{release_date}</span>
                    </Link>
                </li>            
            ))}
        </ul>
    </div>
  )
}
