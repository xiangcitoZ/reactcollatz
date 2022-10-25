import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul style={{displaY:"inline"}}>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <NavLink to='/collatz/4'>Collatz</NavLink>
            </li>
            
        </ul>
      </div>
    )
  }
}
