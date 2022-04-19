import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import logo from '../../assets/logo.png'
import styled from "styled-components"

const Header = styled.div `
background-color: #ffcc00;
`


const NavBar = () => {
    return(
    <Header>
    <Navbar style={{backgroundColor: "#ffcc00"}} className="shadow-sm">
    <Container>
    <img className="m-2" style={{width: "140px"}} src={logo}/>
    </Container>
    </Navbar>
    </Header>
    )
}
export default NavBar