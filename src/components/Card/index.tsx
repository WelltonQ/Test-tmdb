import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import pt from 'date-fns/locale/pt';

import './styles.scss'

const imageUrl = import.meta.env.VITE_IMG

interface CardTypes {
  id: string | number | undefined
    title: string
    image: string
    date: string
}

export function Card({id, title, image, date}: CardTypes) {
  return (
    <Link to={`/movie/${id}`} className='card'>
        <img src={imageUrl + image} alt={title} />
        <h2>{title}</h2>
        <span>{date ? format(new Date(date), 'dd MMM yyyy', { locale: pt }) : ''}</span>
    </Link>
  )
}
