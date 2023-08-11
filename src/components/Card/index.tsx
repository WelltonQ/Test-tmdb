import './styles.scss'
import image from '../../assets/image.png'

export function Card() {
  return (
    <main>
        <div className='main content'>
            <div className='card'>
                <img src={image} alt="Capa do filme" />
                <p>Oi, Alberto</p>
                <span>12 NOV 2021</span>
            </div>
            <div className='card'>
                <img src={image} alt="Capa do filme" />
                <p>Oi, Alberto</p>
                <span>12 NOV 2021</span>
            </div>
            <div className='card'>
                <img src={image} alt="Capa do filme" />
                <p>Oi, Alberto</p>
                <span>12 NOV 2021</span>
            </div>
            <div className='card'>
                <img src={image} alt="Capa do filme" />
                <p>Oi, Alberto</p>
                <span>12 NOV 2021</span>
            </div>
            <div className='card'>
                <img src={image} alt="Capa do filme" />
                <p>Oi, Alberto</p>
                <span>12 NOV 2021</span>
            </div>
            <div className='card'>
                <img src={image} alt="Capa do filme" />
                <p>Oi, Alberto</p>
                <span>12 NOV 2021</span>
            </div>
            <div className='card'>
                <img src={image} alt="Capa do filme" />
                <p>Homem-Aranha: Sem Volta Para Casa</p>
                <span>12 NOV 2021</span>
            </div>
        </div>
    </main>
  )
}
