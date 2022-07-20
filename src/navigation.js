import { Link } from "react-router-dom";
import './App.css';
import head from './components/images/HomepageLogo.png'
import Articles from './components/images/ArticlesLogo.png'
import ventes from './components/images/ShoppingLogo.png'
import Affaires from './components/images/AffairesLogo.png'
import Buy from './components/images/BuyNewspaper.png'

const Navigation = () => {

    function MouseOver(event) {
      //event.target.style.backgroundColor = '#000000';
      event.target.style.color = '#000000';
      event.target.style.borderRadius = "50px";
      event.target.style.borderBottom= "3px solid #707070";
      
    }
    function MouseOut(event){
      event.target.style.background = "";
      event.target.style.border= "";
  }
  
  function MouseClick(event) {
    event.target.style.borderBottom = "3px solid black";
  }

  function handling (event) {

  }
    
    const linkStyle = {
        textDecoration: "none",
       borderRadius: "50px",
      };

    return ( 
      <nav class="navbar">
        <div>
        <Link to="/" style={linkStyle} onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={MouseClick}>
        <img src={head} alt="img" width={300} ></img>
          </Link>
        </div>
        
        <div>
        <Link to="/Articles" style={linkStyle} onMouseOver={MouseOver} onMouseOut={MouseOut}>
        <img src={Articles} alt="img" width={300}></img>
      </Link>
        </div>
        
        <div >
        <Link to="/Ventes" style={linkStyle} onMouseOver={MouseOver} onMouseOut={MouseOut}>
        <img src={ventes} alt="img" width={300}></img>
         </Link>
        </div>
        
        <div>
        <Link to="/Affaires" style={linkStyle} onMouseOver={MouseOver} onMouseOut={MouseOut}>
        <img src={Affaires} alt="img" width={300}></img>
        </Link>
        </div>
        
        <div>
        <Link to="/Acheter" style={linkStyle} onMouseOver={MouseOver} onMouseOut={MouseOut}>
        <img src={Buy} alt="img" width={300}></img>
    </Link>
        </div>
        
        </nav>
     );
}
 
export default Navigation;