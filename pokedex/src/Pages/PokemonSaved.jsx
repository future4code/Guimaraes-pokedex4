import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const ContainerPokeSaved = styled.div `
    height: 100vh;
    background-color: #ffcc00;
`


const PokemonSaved = () => {
    const navigate = useNavigate()
    const goToBack = () => {
        navigate(-1)
    }

    const goToHome = () => {
        navigate('/')
      }

    return(
        <ContainerPokeSaved>
        <Container>
            Lista de pokemons Salvos
        </Container>
        <Button variant="danger"
        onClick={goToBack}>Voltar</Button>
        <Button variant="danger"
        onClick={goToHome}>Inicio</Button>
    </ContainerPokeSaved>
    )
}
export default PokemonSaved