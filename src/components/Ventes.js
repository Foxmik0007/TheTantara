import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import ford from './images/FordFront.PNG'
import fordback from './images/ford model T -rear.PNG'
import fordint from './images/ford model T - up.PNG'
import radio from './images/marconi radio.PNG'
import writing from './images/writingmachine.PNG'
import alarm from './images/alarm.PNG'
import camera from './images/camera.PNG'

const Ventes = () => {
    return (
        <div class="ventes">
            <div className='Ford'>
                <h3>Les nouveauté</h3>
                <p>Ford motor Company présente : <b>Le nouveau Ford Model T</b></p>

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

            <div className='caracteristique'>
                <h4>Caracteristiques</h4>
                <ul>
                    <li>Nouvel acier inoxydable brillant avec le même métal brillant inaltérable tout au long</li>
                    <li>Nouvelles lampes frontales paraboliques plus puissantes en acier inoxydable pour plus d'harmonie</li>
                    <li>Nouveaux sièges avant réglables pour les modèles fermés - peuvent être ajustés pendant la conduite</li>
                    <li>Nouvel habitacle spacieux pour plus de confort de conduite</li>
                </ul>
            </div>

            <div className='tendances'>
                <h3>Les autres tendances actuelles</h3>

                <div class="row">
                    <div class="col"><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={radio} />
                        <Card.Body>
                            <Card.Title> Magnetic Detector </Card.Title>
                            <Card.Text>
                                Detector created by Guglielmo Marconi. Used during the experimental campaign aboard a ship in summer 1902 <br>
                                </br> <b>Price :</b>  20$
                            </Card.Text>
                            <Button variant="dark">Buy</Button>
                        </Card.Body>
                    </Card></div>
                    <div class="col"><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={writing} />
                        <Card.Body>
                            <Card.Title>Writing machime</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="dark">Buy</Button>
                        </Card.Body>
                    </Card></div>
                    <div class="col"><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={alarm} />
                        <Card.Body>
                            <Card.Title>Alarm</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="dark">Buy</Button>
                        </Card.Body>
                    </Card></div>
                    <div class="col"><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={camera} />
                        <Card.Body>
                            <Card.Title>Camera</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
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