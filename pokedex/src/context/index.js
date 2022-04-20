import { createContext,useState,useEffect,useContext } from "react";
import axios from "axios";


const GlobalContextApi = createContext();
export const useGlobalContext =()=> useContext(GlobalContextApi);

export const GlobalContextProvider=(props)=>{
    const [pokemonsLivres, setPokemonsLivres]=useState([])
    // const [detalhesPokemons, setDetalhesPokemons]=useState
    const getArrayPokemons=()=>{
        axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=0`)
        .then((res)=>{
            res.data.results.forEach(pokemon => {
                axios.get(pokemon.url)
                .then(res=>{
                    setPokemonsLivres(listaPokemons => [...listaPokemons,res.data])
                }) 
            }); 
        })
        .catch((err)=>console.log((err)))
      }
      useEffect(()=>{
        getArrayPokemons()
      },[])

    //   const getDetalhesPokemons=()=>{
    //     axios
    //     .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    //     .then((res)=>{
    //         setDetalhesPokemons(res.data.results)
    //     })
    //     .catch((err)=>console.log((err)))
    //   }
    //   useEffect(()=>{
    //     getDetalhesPokemons()
    //   },[])
      return (
        <GlobalContextApi.Provider value={{pokemonsLivres,
            setPokemonsLivres,
            }}>
          {props.children}
        </GlobalContextApi.Provider>
      )
      
}
