import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const DefaultLayout: React.FC = () => 
{
    return (<div className="container">
        <Outlet/>
    </div>);
}

export default DefaultLayout;