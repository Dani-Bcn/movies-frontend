import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="new">New</NavLink></li>
        <li><NavLink to="movies">Movies</NavLink></li>
      </ul>    
    </div>
  )
}
