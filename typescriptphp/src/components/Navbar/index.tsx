import { Link } from "react-router-dom";

const Navbar = () => 
{
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
        <a className="navbar-brand">TypeScript Project</a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mainMenu">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainMenu">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Головна сторінка</Link>
                </li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Вхід</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Реєстрація</Link>
                </li>
            </ul>
        </div>
        </div>
    </nav>)
}

export default Navbar;