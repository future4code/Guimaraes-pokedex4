import React from 'react'
import Router from './Routes/Router'
import NavBar from'./Pages/components/NavBar'
import axios from 'axios';
import Home from './Pages/Home';
import {GlobalContextProvider} from './context';
// export const GlobalContextApi = React.createContext();

const App =()=> {
  
  return (
    <div>
    <NavBar/>
    <GlobalContextProvider>
      <Router/>
    </GlobalContextProvider>
    
    
    </div>
   
  );
}

export default App;
