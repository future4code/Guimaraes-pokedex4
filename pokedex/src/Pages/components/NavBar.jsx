import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import logo from '../../assets/logo.png'

const NavBar = () => {
    return(
    
    <Navbar style={{backgroundColor: "#ffcc00"}} className="shadow-sm">
    <Container>
    <img className="m-2" style={{width: "140px"}} src={logo}/>
    </Container>
    </Navbar>
    )
}
export default NavBar