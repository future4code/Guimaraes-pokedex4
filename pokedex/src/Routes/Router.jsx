import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Pokedex from '../Pages/Pokedex'
import DetailPokemon from '../Pages/DetailPokemon'
import PokemonSaved from '../Pages/PokemonSaved'
import ErrorPage from '../Pages/ErrorPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path='/' index element ={<Home />} />
                <Route path='pokedex' element={<Pokedex />} />
                <Route path='/detail/pokemon' element={<DetailPokemon />} />
                <Route path = '/pokemon/saved' element={<PokemonSaved />}/>
                <Route path = '*' element={<ErrorPage />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router