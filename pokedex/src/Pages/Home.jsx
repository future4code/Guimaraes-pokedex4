import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import pokemons from '../assets/pokemons.png'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

const ContainerHome = styled.div `
    height: 100vh;
    background-color: #ffcc00;
`
const Img = styled.img`
    @media(max-width: 1047px) {
    width: 400px;;
  };
  @media(max-width: 852px) {
    width: 350px;;
  };
  @media(max-width: 414px) {
   width: 200px;;
  }
`


const Home = () => {

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
                <p>Com o pokédex você pode saber o tipo, poderes e principais ataques 
                do pokémon e armazená-lo em sua pokebola. <br></br>
                Vem comigo vamos formar sempre a melhor equipe. E sempre juntos vamos vencer!</p>

            <Button variant="danger"
            onClick={goToPokedex}>Iniciar Jogo</Button>
            
            </Col>
            <Col xs={6} className="align-itema-center">
            <Img  src={pokemons}/>
            </Col>
            </Row>
            </Container>
            </ContainerHome>
    )
}
export default Home