import React, {useState}  from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import pokeboll from '../../assets/pokeboll.png'
import styled from "styled-components"
import DetailPokemonCaptured from './DetailPokemonCaptured'
import {GoTrashcan} from 'react-icons/go';

const Img = styled.img`
width: 80px;    
margin-bottom: -50px;

&:hover{
animation: spin 2s infinite;
@keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);}
  }
}
`

const CardListCaptured = () => {


    const [modalShow, setModalShow] = React.useState(false);



    return(
        <Row className="p-5">
            <Col className="m-3">

            <Card
             style={{ width: '18rem', background: `linear-gradient(190deg, rgba(255,204,0)30%, rgba(197,49,42, 0.80) 100%)`}}
            className="shadow border-0">
            <Card.Header className="border-0 "
            style={{ width: '18rem', background: `rgba(255,204,0)`}}>
                <p className="text-end">
                <button className="btn btn-outline-dark">
                    <GoTrashcan/>
                    </button>
                </p>
            </Card.Header>
            <Card.Body className=" d-flex flex-column justify-content-center align-items-center">
            <Card.Title className="text-dark">Nome do Pokemon</Card.Title>
            <img src="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png"
            style={{ width: '10rem' }}
            className="m-2"/>
            </Card.Body>
            <p className="text-center">
            <a href='#' onClick={() => setModalShow(true)}>
              <Img variant="bottom" src={pokeboll} /></a>
            </p>


            <DetailPokemonCaptured
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
            
            </Card>

            </Col>
        </Row>

  
    )
}
export default CardListCaptured