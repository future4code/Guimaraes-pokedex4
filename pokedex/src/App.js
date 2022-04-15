import React from 'react'
import Router from './Routes/Router'
import NavBar from'./Pages/components/NavBar'
import { Home } from './context';
import axios from 'axios';


const App =()=> {
  const getArrayPokemons=()=>{
    axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>console.log((err)))
}
  return (
    <div>
    <NavBar/>
    <Home.Provider value ={getArrayPokemons}/>
    <Router/>
    </div>
   
  );
}

export default App;
