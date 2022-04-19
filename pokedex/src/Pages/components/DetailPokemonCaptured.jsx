import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar'
import styled from "styled-components"


const DetailPokemonCaptured = (props) => {
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
       
      >
          <Modal.Header closeButton
          className="border-0"
          style={{ background: ` rgba(255,204,0)`}}></Modal.Header>
        <Modal.Body closeButton
        style={{ background: `linear-gradient(190deg, rgba(255,204,0)30%, rgba(197,49,42, 0.80) 100%)`}}>
        <Row className=" d-flex justify-content-between align-items-center">
            <Col>
                <Col className="p-4 align-items-center">
                  <p className="text-center">
                <img src="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png"
                style={{ width: '15rem' }}/>
                </p>
                </Col>
                <Col className="text-center">
                 <p>
                <Button variant="outline-dark m-2">Tipo 1</Button>
                <Button variant="outline-dark">Tipo 2</Button>
                </p>
                </Col>
                </Col>

            <Col>
            
            <p><b>Hp:</b> <ProgressBar variant="success" now={40}/> 
            </p>
            <p><b>Attack:</b> <ProgressBar variant="info" now={20} /></p>
            <p><b>Defense: </b><ProgressBar variant="dark" now={60} /></p>
            <p><b>Special-attack:</b>  <ProgressBar variant="danger" now={80} /></p>
            <p><b>Special-defense:</b> <ProgressBar variant="primary" now={80} /></p>
            <p><b>Speed:</b> <ProgressBar variant="warning" now={80} /></p>
            
            </Col>
           
            <Col className=" mt-4 m-4 p-4 text-center border border-dark rounded"
            ><p><b>Principais Ataques</b></p>
            <p>Ataque 1</p>
            <p>Ataque 2</p>
            <p>Ataque 3</p>
            <p>Ataque 4</p>
            <p>Ataque 5</p>
            </Col>
        
            
        </Row>
        
        </Modal.Body>
      </Modal>
    )
}
export default DetailPokemonCaptured