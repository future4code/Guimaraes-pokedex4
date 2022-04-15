import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import pokemons from '../assets/pokemons.png'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import axios from 'axios'
const ContainerHome = styled.div `
    height: 100vh;
    background-color: #ffcc00;
`


const Home = () => {
    // const pokemon = useContext(Home);
    // console.log(pokemon)
    const getArrayPokemons=()=>{
        axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
        .then((res)=>{
          console.log(res.data.results) 
        })
        .catch((err)=>console.log((err)))
    }
    getArrayPokemons()
    const navigate = useNavigate()
    const goToPokedex = () => {
      navigate('pokedex')
    }
    return(
        <ContainerHome className="p-5 m-0">
            <Container>
            <Row className="justify-content-md-center align-items-center">
            <Col>
            <h1>Capture Seus Pokémons Preferidos </h1>
            <p>Vocẽ não precisa mais sair de casa para capturar pokémon,
                com o pokédex você pode saber o tipo, poderes e principais ataques 
                do pokémon e armazená-lo em sua pokebola.</p>

            <Button variant="danger"
            onClick={goToPokedex}>Iniciar Jogo</Button>
            
            </Col>
            <Col xs={6} className="align-itema-center">
            <img src={pokemons}/>
            </Col>
            </Row>
            </Container>
            </ContainerHome>
    )
}
export default Home