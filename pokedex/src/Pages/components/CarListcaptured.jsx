import React, {useState}  from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import pokeboll from '../../assets/pokeboll.png'
import styled from "styled-components"
import DetailPokemonCaptured from './DetailPokemonCaptured'
import {GoTrashcan} from 'react-icons/go';
import {useGlobalContext} from '../../context'
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
  const {pokemonsLivres, setPokemonsLivres,guardarPokemon,pokemonsCapturado,excluirPokemon}= useGlobalContext()

    const [modalShow, setModalShow] = React.useState(false);



    return(
        <Row className="p-5">
          {pokemonsCapturado.map((pokemon,indice)=>(
            <Col className="m-3 mb-5" key={pokemon.id}>

            <Card
             style={{ width: '18rem', background: `linear-gradient(190deg, rgba(255,204,0)30%, rgba(197,49,42, 0.80) 100%)`}}
            className="shadow border-0">
            <Card.Header className="border-0 "
            style={{ width: '18rem', background: `rgba(255,204,0)`}}>
                <p className="text-end">
                <button className="btn btn-outline-dark" onClick={() => excluirPokemon(indice)}>
                    <GoTrashcan/>
                    </button>
                </p>
            </Card.Header>
            <Card.Body className=" d-flex flex-column justify-content-center align-items-center">
            
            
            <Card.Title className="text-dark">{pokemon.name}</Card.Title>
            <img src={
              pokemon && pokemon.sprites.other["official-artwork"].front_default
            }            
            style={{ width: '10rem' }}
            className="m-2"/>
            </Card.Body>
            <p className="text-center">
            <a href='#' onClick={() => setModalShow(pokemon.id)}>
              <Img variant="bottom" src={pokeboll} /></a>
            </p>


            <DetailPokemonCaptured
            pokemonsLivres={pokemonsLivres}
            pokemon={pokemon}
            indice={indice}
            setPokemonsLivres={setPokemonsLivres}
            guardarPokemon={guardarPokemon}
            show={pokemon.id === modalShow}
            onHide={() => setModalShow(false)}
            />
            
            </Card>

            </Col>

          ))}
            
        </Row>

  
    )
}
export default CardListCaptured