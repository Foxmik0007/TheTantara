import { Link } from "react-router-dom";
import './App.css';

const Navigation = () => {


    function MouseOver(event) {
        event.target.style.backgroundColor = '#FFFFFF';
    }
    function MouseOut(event){
        event.target.style.background="";
      }
    
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black',
        padding: "0.75%",
      };

    return ( 
        <nav class="navbar">
            <Link to="/" style={linkStyle} onMouseOver={MouseOver} onMouseOut={MouseOut}>Page titre</Link>
            <Link to="/Articles" style={linkStyle} onMouseOver={MouseOver} onMouseOut={MouseOut}>Articles</Link>
            <Link to="/Ventes" style={linkStyle} onMouseOver={MouseOver} onMouseOut={MouseOut}>Ventes</Link>
            <Link to="/Affaires" style={linkStyle} onMouseOver={MouseOver} onMouseOut={MouseOut}>Affaires</Link>
            <Link to="/Acheter" style={linkStyle} onMouseOver={MouseOver} onMouseOut={MouseOut}>Acheter un journal</Link>
        </nav>
     );
}
 
export default Navigation;