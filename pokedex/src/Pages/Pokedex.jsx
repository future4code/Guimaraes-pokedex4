import React from 'react'
import Container from 'react-bootstrap/Container'
import Tooltip from 'react-bootstrap/Tooltip'
import styled from "styled-components"
import CardPokeList from './components/CardPokeList'
import { useNavigate } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai';
import { CgPokemon} from 'react-icons/cg';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

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

            <div className="d-flex p-3 justify-content-between">

            <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="button-tooltip-2">
            Voltar para a Home</Tooltip>}>
            {({ ref, ...triggerHandler }) => (
            <button class="btn btn-outline-dark" ref={ref}
            {...triggerHandler}
            onClick={goToHome}>
            <AiFillHome/>
            </button>)}
            </OverlayTrigger>

            <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="button-tooltip-2">
             Abrir a Pokebola</Tooltip>}>
            {({ ref, ...triggerHandler }) => (
            <button class="btn btn-outline-dark" ref={ref}
            {...triggerHandler}
             onClick={goToPokemonSaved}><CgPokemon/>
            </button>)}
            </OverlayTrigger>
    
            </div>
            
            <CardPokeList/>
            </Container>
        </ContainerPokedex>
    )
}
export default Pokedex