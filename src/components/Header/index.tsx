import './styles.scss'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <header>
            <div className="content">
                <Link to="/">
                    <img src={logo} alt="Logotipo do site TMDB" />
                </Link>
            </div>
        </header>
    )
}