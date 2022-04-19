import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import Container from 'react-bootstrap/Container'
import CardListCaptured from './components/CarListcaptured'
import { AiFillHome } from 'react-icons/ai';
import { MdArrowBackIosNew} from 'react-icons/md';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

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
            Voltar</Tooltip>}>
           {({ ref, ...triggerHandler }) => (
           <button class="btn btn-outline-dark" ref={ref}
           {...triggerHandler}
            onClick={goToBack}><MdArrowBackIosNew/>
           </button>)}
           </OverlayTrigger>
   
           </div>
           <CardListCaptured/>
        </Container>
    </ContainerPokeSaved>
    )
}
export default PokemonSaved