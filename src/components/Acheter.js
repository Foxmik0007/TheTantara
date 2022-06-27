import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const Achat = () => {
    return (
        <div class="acheter">
            <h3>Voulez vous acheter un modèle papier de ce journal ? Completez le formulaire et vous recevrez votre commande par la poste</h3>
            <br></br>           
            <Form>
                <Form.Group className="mb-3" controlId="firstName">
                    <div class="row">
                        <div class="col-2"> <Form.Label>Nom : </Form.Label></div>
                        <div class="col-6"><Form.Control type="text" /></div>
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastName">
                    <div class="row">
                        <div class="col-2"> <Form.Label>Prenom : </Form.Label></div>
                        <div class="col-6"><Form.Control type="text"/></div>
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                    <div class="row">
                        <div class="col-2"> <Form.Label>Adresse : </Form.Label></div>
                        <div class="col-6"><Form.Control type="text"/></div>
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="numeroPoste">
                    <div class="row">
                        <div class="col-2"> <Form.Label>Numero de poste : </Form.Label></div>
                        <div class="col-6"><Form.Control type="text"/></div>
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="phoneNumber">
                    <div class="row">
                        <div class="col-2"> <Form.Label>Numero de telephone : </Form.Label></div>
                        <div class="col-6"><Form.Control type="text"/></div>
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="dateDeparution">
                    <div class="row">
                        <div class="col-2"> <Form.Label>Date de parution du journal : </Form.Label></div>
                        <div class="col-6"><Form.Control type="text"/></div>
                    </div>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Achat;