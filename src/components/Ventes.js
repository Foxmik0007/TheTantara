import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

const Ventes = () => {
    return (
        <div class="ventes">
            <h3>Les nouveauté</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

            <div class="row">
                <div class="col">
                    1 of 3
                </div>
                <div class="col-5">
                    2 of 3 (wider)
                </div>
                <div class="col">
                    3 of 3
                </div>
            </div>

            <h4>Caracteristiques</h4>
            <ul>
                <li>Pandente itaque viam fatorum sorte tristissima</li>
                <li>Haec dum oriens diu perferret, caeli reserato</li>
                <li>Illud autem non dubitatur quod cum esset aliqua</li>
                <li>Auxerunt haec vulgi sordidioris audaciam, quod cum</li>
            </ul>

            <h3>Les tendances actuelles</h3>

            <div class="row">
                <div class="col"><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></div>
                <div class="col"><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></div>
                <div class="col"><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></div>
                <div class="col"><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></div>
            </div>

        </div>

    );
}

export default Ventes;