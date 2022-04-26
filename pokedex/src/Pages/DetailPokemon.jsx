import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar'
import pokebollget from '../assets/pokebollget.png'
import styled from "styled-components"

const Img = styled.img`
width: 120px;  
&:hover{
  animation: float 3s ease-out infinite;

@keyframes float {
  50% {
     transform: translate(0, 20px);
  }
}
}

`

const DetailPokemon = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered

    >
      <Modal.Header closeButton
        className="border-0"
        style={{ background: ` rgba(255,204,0)` }}></Modal.Header>
      <Modal.Body closeButton
        style={{ background: `linear-gradient(190deg, rgba(255,204,0)30%, rgba(197,49,42, 0.80) 100%)` }}>
        <Row className=" d-flex justify-content-between align-items-center">
          <Col>
            <Col className="p-4 align-items-center">
              <p className="text-center">
                <img src={props.pokemon && props.pokemon.sprites.other["official-artwork"].front_default}
                  style={{ width: '15rem' }} />
              </p>
            </Col>
            <Col className="text-center">
              <p>
                {props.pokemon && props.pokemon.types.map((type)=>{
                  return(
                    <Button variant="outline-dark" key={type.type.name}>{type.type.name}</Button>
                  )
                })}
                
              </p>
            </Col>
          </Col>

          <Col>
            <p><b>Hp:</b> <ProgressBar variant="success" now={props.pokemon && props.pokemon.stats[0].base_stat}/></p>
            <p><b>Attack:</b> <ProgressBar variant="info" now={props.pokemon && props.pokemon.stats[1].base_stat} /></p>
            <p><b>Defense: </b><ProgressBar variant="dark" now={props.pokemon && props.pokemon.stats[2].base_stat} /></p>
            <p><b>Special-attack:</b>  <ProgressBar variant="danger" now={props.pokemon && props.pokemon.stats[3].base_stat} /></p>
            <p><b>Special-defense:</b> <ProgressBar variant="primary" now={props.pokemon && props.pokemon.stats[4].base_stat} /></p>
            <p><b>Speed:</b> <ProgressBar variant="warning" now={props.pokemon && props.pokemon.stats[5].base_stat} /></p>
          </Col>

          <Col className=" mt-4 m-4 p-4 text-center border border-dark rounded">
            <p><b>Principais Ataques</b></p>
            {props.pokemon && props.pokemon.moves.map((move,indice)=>{
              if(indice>4){
                return null
              }
              return(
                <p>Ataque {indice+1}: {move.move.name}</p>
              )
              })}
          </Col>


        </Row>
        <p className="text-center">
          <Img className="mt-3" src={pokebollget} onClick={() => props.guardarPokemon(props.indice)} /></p>

      </Modal.Body>
    </Modal>
  )
}
export default DetailPokemon