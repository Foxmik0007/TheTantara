import m1 from './images/events4.jpg'
import m2 from './images/2.png'
import m3 from './images/events3.PNG'
import m4 from './images/events2.jpg'
import m5 from './images/5.png'
import m6 from './images/drugs.jpg'
import dani from './images/daniel-216-asset.jpg'
import horoscope from './images/horoscope.png'
import { Link } from "react-router-dom";

const Home = () => {


    return (
        <div className="title">
            <h1> Les Titres du jour </h1>
            <div class="TitresDuJour">
                    <div class="article">
                    <Link to="/Articles">
        <img src={m1} alt="image de thomas Shelby" width={600} ></img>
          </Link>
                        <p> Thomas Shelby : Le rôle d'une vie </p>
                    </div>
                    <div class="article">
                    <Link to="/Articles">
        <img src={m3} alt="Image de cowboy patrouillant dans la nuit" width={600} ></img>
          </Link>
                        <p> "Them's Fighting Words" : violence, masculinité et cow-boy texan à la fin du XIXe siècle </p>
                    </div>
               


                    <div class="article">
                    <Link to="/Articles">
        <img src={m4} alt="Image d'une ville" width={600} ></img>
          </Link>
                        <p> 1948 dans le monde - L'après-guerre </p>
                </div>

                <div class="article">
                    <img src={dani} alt="Image avis de recherche" width={300}></img>
                        <p> Homme Recherché </p>
                    </div>
                
                <div class="article">
                    <Link to="/Articles">
        <img src={m6} alt="Image de medicaments" width={600} ></img>
          </Link>
                        <p> Histoire de la médecine jusqu’à 1950 </p>
                </div>

                    <div class="article">
                    <Link to="/Ventes">
        <img src={m5} alt="Poster pour la promotion de la nouvelle voiture ford" width={600} ></img>
          </Link>
                        <p> Le nouvel invention de FORD </p>
                </div>
                    <div class="article">
                        <img src={horoscope} alt="image des horoscope" width={500}></img>
                        <p> Carte des etoiles pour connaitre votre avenir </p>
                    </div>
                </div>
            </div>

    );
}

export default Home;