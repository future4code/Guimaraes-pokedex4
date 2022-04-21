import React from 'react'
import styled from "styled-components"
import Container from 'react-bootstrap/Container'
import rocketteam from '../assets/rocketteam.png'
import { useNavigate} from 'react-router-dom'


const ContainerError = styled.div `
    height: 100vh`

const Img = styled.img`
height: 66vh; 
    @media(max-width: 1047px) {
        height: 60vh;
    };
   @media(max-width: 852px) {
    height: 50vh;
   };
   @media(max-width: 420px) {
    height: 40vh;
   }
`


const ErrorPage = () => {

    const navigate = useNavigate()
    const goToHome = () => {
        navigate('/')
      }

    return(
        <ContainerError>
        <Container className="d-flex flex-column justify-content-center align-items-center">
           <div><Img src={rocketteam}/></div>
           <div className="text-center">
               <h5>
                Equipe Rocket decolando na velocidade da luz! 
                    Renda-se agora ou prepare-se para lutar!</h5>
                    <h5> Meowth! É isso aí!
               </h5>
           </div>
           <div>
               <button className="btn btn-danger" onClick={goToHome}>Ir para o inicio</button>
           </div>
        </Container>
        </ContainerError>
    )
}
export default ErrorPage