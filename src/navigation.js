import { Link } from "react-router-dom";
import './App.css';

const Navigation = () => {
    return ( 
        <nav className="navbar">
            <Link to="/">Page titre</Link>
            <Link to="/Articles">Articles</Link>
            <Link to="/Ventes">Ventes</Link>
            <Link to="/Affaires">Affaires</Link>
            <Link to="/Acheter">Acheter un journal</Link>
        </nav>
     );
}
 
export default Navigation;