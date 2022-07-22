import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import './../App.css';
import {useState} from 'react';

const Achat = () => {

    // Validation numero de telephone
    const handleChangePhoneNumber =(e)=>{
        if(e.target.value.length>10){ 
            window.alert("email shouldn't exceed 10, Please Re-enter");
            e.target.value = "";
        }
    }
    

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

                <Form.Group className="mb-3" controlId="email">
                    <div class="row">
                        <div class="col-2"> <Form.Label><b>Email : </b></Form.Label></div>
                        <div class="col-6"><Form.Control type="email"/></div>
                    
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="phoneNumber">
                    <div class="row">
                        <div class="col-2"> <Form.Label><b>Numero de telephone : </b></Form.Label></div>
                        <div class="col-6"><Form.Control type="number" onChange={handleChangePhoneNumber}/></div>
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="dateDeparution">
                    <div class="row">
                        <div class="col-2"> <Form.Label><b>Date de parution du journal : </b></Form.Label></div>
                        <div class="col-6"><Form.Control type="date"/></div>
                    </div>
                </Form.Group>

                <Button variant="dark" type="submit" >
                    Acheter
                </Button>
            </Form>
            
        </div>
    );
}

export default Achat;