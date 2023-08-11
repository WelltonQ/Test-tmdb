import { Header } from '../../components/Header'
import './styles.scss'
import homem from '../../assets/imageH.png'
import { CardCast } from '../../components/CardCast'

export function Details() {
  return (
    <>
        <Header />
        <section className='banner'>
            <div className="details content">
                <img src={homem} alt="Capa do filme" />
                <div className="resume">
                    <h1>Deadpool (2016)</h1>
                    <span>16 anos  • 11/02/2016 (BR)  •  Ação, Aventura, Comédia, Ficção científica • 1h 47m</span>
                    {/* <div className="box">
                        <div className="box-circle">
                            <svg>
                                <circle cx="30" cy="30" r="30"></circle>
                                <circle cx="30" cy="30" r="30"></circle>
                            </svg>
                        </div>
                        <div className="number">
                            <h2>70%</h2>
                        </div>
                        <span className='rating'>Avaliação dos usuários</span>
                    </div> */}
                    <h3>Sinopse</h3>
                    <p className='description'>Baseado no anti-herói não convencional da Marvel Comics, Deadpool conta a história da origem do ex-agente das Forças Especiais que se tornou o mercenário Wade Wilson. Depois de ser submetido a um desonesto experimento que o deixa com poderes de cura acelerada, Wade adota o alter ego de Deadpool. Armado com suas novas habilidades e um senso de humor negro e distorcido, Deadpool persegue o homem que quase destruiu sua vida.</p>
                    <div className="characters">
                        <div className='person'>
                            <p className='name'>Rob Liefeld</p>
                            <p className='role'>Characters</p>
                        </div>
                        <div className='person'>
                            <p className='name'>Rob Liefeld</p>
                            <p className='role'>Director</p>
                        </div>
                        <div className='person'>
                            <p className='name'>Rob Liefeld</p>
                            <p className='role'>Screenplay</p>
                        </div>
                        <div className='person'>
                            <p className='name'>Rhett Reese</p>
                            <p className='role'>Screenplay</p>
                        </div>
                        <div className='person'>
                            <p className='name'>Rob Liefeld</p>
                            <p className='role'>Characters</p>
                        </div>
                    </div>
                </div>  
            </div>    
        </section>
        <section className='cardsCast'>
            <div className='cardsCastRow content'>
                <CardCast />
            </div>
        </section>
    </>
  )
}
