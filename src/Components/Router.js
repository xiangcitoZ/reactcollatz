import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import MenuRutas from './RutasParametros/MenuRutas' 
import Collatz from './RutasParametros/Collatz'

export default class Router extends Component {
  render() {

    function collatzElement(){
        var{minumero} = useParams();
        return <Collatz numero={minumero}/>
    }

    return (
     <BrowserRouter>
        <MenuRutas/>
        <Routes>
            
            <Route path="/collatz/:minumero" element={<collatzElement/>}/>
            

        </Routes>
     </BrowserRouter>
    )
  }
}   