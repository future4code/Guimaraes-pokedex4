import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

const ContainerPokedex = styled.div `
    height: 100vh;
    background-color: #ffcc00;
`



const Pokedex = () => {

    const navigate = useNavigate()
    const goToPokemonSaved = () => {
      navigate('pokemon/saved')
    }

    const goToHome = () => {
        navigate('/')
      }


    return(
        <ContainerPokedex>
            <Container>
                cards pokemons
            </Container>

            <Button variant="danger"
            onClick={goToHome}>Voltar</Button>
            <Button variant="danger"
            onClick={goToPokemonSaved}>Capturados</Button>
        </ContainerPokedex>
    )
}
export default Pokedex