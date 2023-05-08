import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { useState } from "react";
import Button from 'react-bootstrap/Button';


const Creation = props => {

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div class="Creer"> <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Titre de l'article</Form.Label>
          <Form.Control type="email" placeholder="Mettez le titre ici" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Contenu</Form.Label>
          <Form.Control as="textarea" rows={6} placeholder="Ecrivez votre article..."/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Nom de l'auteur</Form.Label>
          <Form.Control type="email" placeholder="Entrez votre nom" />
            </Form.Group>
            <Form.Select class="cselect" aria-label="Default select example">
      <option>Type de l'article</option>
      <option value="1">brève/filet</option>
      <option value="2">Compte rendu</option>
                <option value="3">Reportage</option>
                <option value="4">Interview</option>
      <option value="5">Enquête</option>
                <option value="6">Chronique d'un journaliste</option>
                <option value="7">Billet</option>
                <option value="8">Critique</option>
                <option value="9">Éditorial</option>
                <option value="10">Tribune libre</option>
                <option value="11">Faits divers</option>
                <option value="12">Marronier</option>
                
    </Form.Select>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                <br></br>
          <Form.Label>Ajouter une illusatration à votre article</Form.Label>
      {selectedImage && (
                    <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br /> <br />
        <Button variant="danger" onClick={()=>setSelectedImage(null)}>Remove</Button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
            />
        </Form.Group>

        <Button variant="secondary">Soumettre l'article</Button>
        <br /> 
            <br />
        </Form>
        
        
             
        </div>
     
    )
  }

export default Creation;