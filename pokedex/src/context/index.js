import { createContext,useState,useEffect,useContext } from "react";
import axios from "axios";


const GlobalContextApi = createContext();
export const useGlobalContext =()=> useContext(GlobalContextApi);

export const GlobalContextProvider=(props)=>{
    const [pokemonsLivres, setPokemonsLivres]=useState([])
    const [totalPokemon] = useState(807);
    const [pokemonPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(0);
    // const [detalhesPokemons, setDetalhesPokemons]=useState
    const getArrayPokemons=()=>{
        axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonPerPage}&offset=${currentPage}`)
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
      },[currentPage, pokemonPerPage])

      const onPaginationClick = (e, pageInfo) => {
        setCurrentPage(pageInfo.activePage * pokemonPerPage - pokemonPerPage);
      };
    
      const totalPage = Math.ceil(totalPokemon / pokemonPerPage);
    

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
            setPokemonsLivres,  totalPage
            }}>
          {props.children}
        </GlobalContextApi.Provider>
      )
      
}
