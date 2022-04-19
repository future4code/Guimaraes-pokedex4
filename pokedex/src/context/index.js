import { createContext,useState,useEffect,useContext } from "react";
import axios from "axios";


const GlobalContextApi = createContext();
export const useGlobalContext =()=> useContext(GlobalContextApi);

export const GlobalContextProvider=(props)=>{
    const [pokemonsLivres, setPokemonsLivres]=useState([])
    const getArrayPokemons=()=>{
        axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=0`)
        .then((res)=>{
            setPokemonsLivres(res.data.results) 
        })
        .catch((err)=>console.log((err)))
      }
      useEffect(()=>{
        getArrayPokemons()
      },[])
      return (
        <GlobalContextApi.Provider value={{pokemonsLivres,setPokemonsLivres}}>
          {props.children}
        </GlobalContextApi.Provider>
      )
      
}
