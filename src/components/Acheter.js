import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import './../App.css';

const Achat = () => {

    return (
        <div class="acheter">
            <h3>Acheter un journal ?</h3>
            <br></br>           
            <Form>
                <Form.Group className="mb-3" controlId="firstName">
                    <div class="row">
                        <div class="col-2"> <Form.Label> <b>Nom :</b> </Form.Label></div>
                        <div class="col-6"><Form.Control type="text" /></div>
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastName">
                    <div class="row">
                        <div class="col-2"> <Form.Label><b>Prenom : </b></Form.Label></div>
                        <div class="col-6"><Form.Control type="text"/></div>
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                    <div class="row">
                        <div class="col-2"> <Form.Label><b>Adresse : </b></Form.Label></div>
                        <div class="col-6"><Form.Control type="text"/></div>
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="numeroPoste">
                    <div class="row">
                        <div class="col-2"> <Form.Label><b>Numero de poste : </b></Form.Label></div>
                        <div class="col-6"><Form.Control type="text"/></div>
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="phoneNumber">
                    <div class="row">
                        <div class="col-2"> <Form.Label><b>Numero de telephone : </b></Form.Label></div>
                        <div class="col-6"><Form.Control type="text"/></div>
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="dateDeparution">
                    <div class="row">
                        <div class="col-2"> <Form.Label><b>Date de parution du journal : </b></Form.Label></div>
                        <div class="col-6"><Form.Control type="text"/></div>
                    </div>
                </Form.Group>

                <Button variant="dark" type="submit" >
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Achat;