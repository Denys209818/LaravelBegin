import { Link } from 'react-router-dom';
import './css/style.css';


const Main : React.FC = () => 
{
    return(<div className="container">
        <input type="checkbox" id="ham-menu"/>
            <label htmlFor="ham-menu">
                <div className="hide-des">
                    <span className="menu-line"></span>
                    <span className="menu-line"></span>
                    <span className="menu-line"></span>
                    <span className="menu-line"></span>
                    <span className="menu-line"></span>
                    <span className="menu-line"></span>
                </div>

        </label>
            <div className="full-page-green"></div>
            <div className="ham-menu">
                <ul id="ul-menu" className="centre-text bold-text">
                    <li id="li-item"><h1>
                        <Link to="/" className="text-decoration-none">Головна сторінка
                        </Link></h1></li>
                    <li id="li-item"><h1>
                        <Link to="/register" className="text-decoration-none">Реєстрація</Link>
                        </h1></li>
                    <li id="li-item"><h1>
                        <Link to="/login" className="text-decoration-none">Логін</Link>
                    </h1></li>
                </ul>
            </div>
            
   </div>);
}

export default Main;