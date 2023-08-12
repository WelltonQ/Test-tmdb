import './styles.scss'

import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
// import { useState } from 'react';


export function Home() {
  // const [selectedGenres, setSelectedGenres] = useState<number[]>([])

  // const toggleGenre = (genre: number) => {
  //   if (selectedGenres.includes(genre)) {
  //     setSelectedGenres(selectedGenres.filter((item) => item !== genre));
  //   } else {
  //     setSelectedGenres([...selectedGenres, genre]);
  //   }
  // };

  return (
    <>
      <Header />
      <section className='bannerHome'>
        <div className="filters content">
          <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
          <span>Filtre por:</span>
          <div className='buttonsFilters'>
            <button>Ação</button>
            <button>Aventura</button>
            <button>Animação</button>
            <button>Comédia</button>
            <button>Crime</button>
            <button>Documentário</button>
            <button>Drama</button>
            <button>Família</button>
            <button>Fantasia</button>
            <button>História</button>
            <button>Terror</button>
            <button>Música</button>
            <button>Mistério</button>
            <button>Romance</button>
            <button>Ficcção científica</button>
            <button>Cinema TV</button>
            <button>Thriller</button>
            <button>Guerra</button>
            <button>Faroeste</button>      
          </div>
        </div>
      </section>
      <main className='content'>
        <div className='main'>
          <Card />
        </div>
      </main>
    </>
  )
}
