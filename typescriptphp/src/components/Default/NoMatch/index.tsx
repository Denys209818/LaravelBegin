import { Link } from "react-router-dom";


const NoMatch : React.FC = () => 
{
    return (<>
        <h1>Сторінки не існує!</h1>
        <Link to="/">Повернутися назад</Link>
    </>);
}

export default NoMatch;