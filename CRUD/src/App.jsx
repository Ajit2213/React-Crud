import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Rout from './Rout'
import { store } from './app/store'
import { Provider } from 'react-redux'
import TASK from './component/TASK'
function App() {
  return(
    <div>
       <h1 style={{textAlign:"center"}}>React Crud Operations </h1>
    <Provider store={store}>
   {/* <TASK/> */}
   <Rout/>
 </Provider>

    </div>
    

    
    
  )
}

export default App
