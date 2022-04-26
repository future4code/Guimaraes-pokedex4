import React, {useState}  from 'react'
import { useNavigate} from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import pokeboll from '../../assets/pokeboll.png'
import styled from "styled-components"
import DetailPokemon from '../DetailPokemon'
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

const CardId = styled.div`
  width: 18rem;
  background-image: linear-gradient(190deg, rgba(255,204,0) 30%, rgba(197,49,42, 0.80) 100%);
`

const CardPokeList = (props) => {
  const {pokemonsLivres, setPokemonsLivres,guardarPokemon}= useGlobalContext()
  
    const navigate = useNavigate()
    const goToDetails = () => {
      navigate('/detail/pokemon')
    }

    const [modalShow, setModalShow] = React.useState(false);
    

    return(
        <Row className="p-5">
          {pokemonsLivres.map((pokemon, indice)=>(

            <Col className="m-3 mb-5" key={pokemon.id}>
            <CardId 
            className="{type.type.name} card justify-content-center align-items-center shadow border-0 text-center">
            <Card.Body>
            <Card.Title className="text-muted">#00{pokemon.id}</Card.Title>
            <img src={
              pokemon && pokemon.sprites.other["official-artwork"].front_default
            }

            style={{ width: '10rem' }}
            className="m-2"/>
            <h3 className="text-dark">{pokemon.name}</h3>
            </Card.Body>
            <p className="text-center">

            <a href='#' onClick={() => setModalShow(pokemon.id)}>
              <Img variant="bottom" src={pokeboll}/></a>
            </p>


            <DetailPokemon  
            pokemonsLivres={pokemonsLivres}
            pokemon={pokemon}
            indice={indice}
            setPokemonsLivres={setPokemonsLivres}
            guardarPokemon={guardarPokemon}
            show={pokemon.id === modalShow}
            onHide={() => setModalShow(false)}
            />
            
            </CardId>

            </Col>
          ))}
            
        </Row>

  
    )
}
export default CardPokeList