import { createContext,useState,useEffect,useContext } from "react";
import axios from "axios";


const GlobalContextApi = createContext();
export const useGlobalContext =()=> useContext(GlobalContextApi);

export const GlobalContextProvider=(props)=>{
    const [pokemonsCapturado, setPokemonsCapturado]=useState([])
    const [pokemonsLivres, setPokemonsLivres]=useState([])

    const getArrayPokemons=()=>{
        axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=0`)
        .then((res)=>{
            const promises=res.data.results.map(pokemon => {
                return axios.get(pokemon.url)
            }); 
            Promise.allSettled(promises)
                .then(res=>{
                    res.map(response=>{
                        setPokemonsLivres(listaPokemons => {
                            // Array.from(new Set([...listaPokemons,response.value.data]))
                            const pokemonExiste=listaPokemons.some((pokemon)=> pokemon.id === response.value.data.id )
                            if(pokemonExiste){
                                return listaPokemons;
                            }else{
                                return [...listaPokemons,response.value.data];
                            }
                        })
                    })
                    console.log(res)
                }) 
        })
        .catch((err)=>console.log((err)))
      }

      useEffect(()=>{
        getArrayPokemons()
      },[])

    const guardarPokemon= (indice)=>{
        const copiaPokemonsLivres= [...pokemonsLivres]
        const pokemonsRemovidos= copiaPokemonsLivres.splice(indice,1)
        setPokemonsCapturado([...pokemonsCapturado, ...pokemonsRemovidos])
        setPokemonsLivres(copiaPokemonsLivres)
        
    }
    const excluirPokemon=(indice)=>{
        const copiaPokemonsCapturados=[...pokemonsCapturado]
        const pokemonsExcluidos= copiaPokemonsCapturados.splice(indice,1)
        setPokemonsLivres([...pokemonsLivres, ...pokemonsExcluidos])
        setPokemonsCapturado(copiaPokemonsCapturados)
    }

    console.log(pokemonsCapturado)
      return (
        <GlobalContextApi.Provider value={{
            pokemonsLivres,
            setPokemonsLivres, 
            guardarPokemon,
            pokemonsCapturado,
            excluirPokemon
            }}>
          {props.children}
        </GlobalContextApi.Provider>
      )
      
}
