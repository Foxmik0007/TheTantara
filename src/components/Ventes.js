import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import ford from './images/FordFront.PNG'
import fordback from './images/ford model T -rear.PNG'
import fordint from './images/ford model T - up.PNG'
import radio from './images/marconi radio.PNG'
import writing from './images/writingmachine.PNG'
import alarm from './images/alarm.PNG'
import camera from './images/camera.PNG'
import radio2 from './images/radio.jpg'
import gramophone from './images/gramophone.jpg'
import phone from './images/phone.jpg'
import pipe from './images/pipe.jpg'
import bike from './images/bike.jpg'
import coudre from './images/coudre.jpg'
import lampe from './images/lampe.jpg'

const Ventes = () => {
    return (
        <div class="ventes">
            <div className='Ford'>
                <h3>Les nouveautees</h3>
                <p>Ford motor Company présente : <br></br><b>Ford Model T</b></p>

                <div class="row">
                    <div class="col">
                        <img src={ford} alt="img" width="300" />
                    </div>
                    <div class="col-5">
                        <img src={fordback} alt="img" width="300" />
                    </div>
                    <div class="col">
                        <img src={fordint} alt="img" width="300" />
                    </div>
                </div>
            </div>
            <h4>Caracteristiques</h4>
            <div className='caracteristique'>
                
                <ul>
                    <li>Nouvel acier inoxydable brillant avec le même métal brillant inaltérable tout au long</li>
                    <li>Nouvelles lampes frontales paraboliques plus puissantes en acier inoxydable pour plus d'harmonie</li>
                    <li>Nouveaux sièges avant réglables pour les modèles fermés - peuvent être ajustés pendant la conduite</li>
                    <li>Nouvel habitacle spacieux pour plus de confort de conduite</li>
                </ul>
            </div>

            <h3>Les autres tendances actuelles</h3>
            <div className='tendances'>
              

                <div class="row">
                    <div class="col"><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={radio} />
                        <Card.Body>
                            <Card.Title> Magnetic Detector </Card.Title>
                            <Card.Text>
                                Detector created by Guglielmo Marconi. Used during the experimental campaign aboard a ship in summer 1902 <br>
                                </br> <h5>Prix : 20$</h5> 
                            </Card.Text>
                            <Button variant="dark">Buy</Button>
                        </Card.Body>
                    </Card></div>
                    <div class="col"><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={writing} />
                        <Card.Body>
                            <Card.Title>Machine à ecrire</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                <br></br> <h5>Prix : 20$</h5>  
                            </Card.Text>
                            <Button variant="dark">Buy</Button>
                        </Card.Body>
                    </Card></div>
                    <div class="col"><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={alarm} />
                        <Card.Body>
                            <Card.Title>Alarme</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                <br></br> <h5>Prix : 20$</h5>  
                            </Card.Text>
                            <Button variant="dark">Buy</Button>
                        </Card.Body>
                    </Card></div>
                    <div class="col"><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={camera} />
                        <Card.Body>
                            <Card.Title>Appareil photo</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                <br></br> <h5>Prix : 20$</h5>  
                            </Card.Text>
                            <Button variant="dark">Buy</Button>
                        </Card.Body>
                    </Card></div>
                    <div class="col"><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={radio2} />
                        <Card.Body>
                            <Card.Title>Radio</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                <br></br> <h5>Prix : 20$</h5>  
                            </Card.Text>
                            <Button variant="dark">Buy</Button>
                        </Card.Body>
                    </Card></div>
                    <div class="col"><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={gramophone}/>
                        <Card.Body>
                            <Card.Title>Gramophone</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                <br></br> <h5>Prix : 20$</h5>  
                            </Card.Text>
                            <Button variant="dark">Buy</Button>
                        </Card.Body>
                    </Card></div>
                    <div class="col"><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={phone} />
                        <Card.Body>
                            <Card.Title> Phone </Card.Title>
                            <Card.Text>
                                Detector created by Guglielmo Marconi. Used during the experimental campaign aboard a ship in summer 1902 <br>
                                </br> <h5>Prix : 20$</h5> 
                            </Card.Text>
                            <Button variant="dark">Buy</Button>
                        </Card.Body>
                    </Card></div>
                    <div class="col"><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={pipe} />
                        <Card.Body>
                            <Card.Title> Pipe </Card.Title>
                            <Card.Text>
                                Detector created by Guglielmo Marconi. Used during the experimental campaign aboard a ship in summer 1902 <br>
                                </br> <h5>Prix : 20$</h5> 
                            </Card.Text>
                            <Button variant="dark">Buy</Button>
                        </Card.Body>
                    </Card></div>
                    <div class="col"><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={bike} />
                        <Card.Body>
                            <Card.Title> Bike </Card.Title>
                            <Card.Text>
                                Detector created by Guglielmo Marconi. Used during the experimental campaign aboard a ship in summer 1902 <br>
                                </br> <h5>Prix : 20$</h5> 
                            </Card.Text>
                            <Button variant="dark">Buy</Button>
                        </Card.Body>
                    </Card></div>
                    <div class="col"><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={lampe} />
                        <Card.Body>
                            <Card.Title> Lampe </Card.Title>
                            <Card.Text>
                                Detector created by Guglielmo Marconi. Used during the experimental campaign aboard a ship in summer 1902 <br>
                                </br> <h5>Prix : 20$</h5> 
                            </Card.Text>
                            <Button variant="dark">Buy</Button>
                        </Card.Body>
                    </Card></div>
                    <div class="col"><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={coudre} />
                        <Card.Body>
                            <Card.Title> Machine à coudre </Card.Title>
                            <Card.Text>
                                Detector created by Guglielmo Marconi. Used during the experimental campaign aboard a ship in summer 1902 <br>
                                </br> <h5>Prix : 20$</h5> 
                            </Card.Text>
                            <Button variant="dark">Buy</Button>
                        </Card.Body>
                    </Card></div>
                </div>

        
                    
            </div>


        </div>

    );
}

export default Ventes;