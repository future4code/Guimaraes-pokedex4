import React from 'react'
import Router from './Routes/Router'
import NavBar from'./Pages/components/NavBar'
import './App.css'
import styled from "styled-components"

const AppContainer = styled.div `
    background-color: #ffcc00;
`


function App() {
  return (
    <AppContainer>
    <NavBar/>
    <Router />
    </AppContainer>
   
  );
}

export default App;
