import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import './../App.css';
import {useState} from 'react';

const Achat = () => {

    const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

    // Validation numero de telephone
    const handleChangePhoneNumber =(e)=>{
        if(e.target.value.length>10){ 
            
            e.target.value = "";
        }
    }
    
    // Validation email
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    
    //ToDo : Handle tooltip visibility
    const handleChange = event => {
        if (!isValidEmail(event.target.value)) {
            window.alert("email shouldn't exceed 10, Please Re-enter")
        } else {
          setError(null);
        }
        
    setMessage(event.target.value);
};

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
                        <div class="col-6"><Form.Control type="text" onChange={handleChange}/></div>
                        <span class="tooltiptext">Tooltip text</span>
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
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Achat;