import React ,{useEffect, useState} from 'react'
import axios from 'axios'
import { NavLink,Outlet } from 'react-router-dom'

export default function Movies() {
  const [movies,setMovies] = useState(null)
  useEffect(()=>{
    const getMovies = async()=>{
      try{
          const data = await axios("http://localhost:8000/api/v1/movie")
          setMovies(data.data.data)        
      }catch(error){
        console.log(error)
      }
    }  
    getMovies()
  },[]) 
  return (
    <div>      
      <h2 >Movies</h2>  
      {!movies && <p>Loading</p>} 
      {movies && movies.map((e)=>{
         return (
        <div key={e._id}>           
            <h1 ><NavLink to={`/home/${e._id}`}>{e.title}</NavLink></h1>                     
        </div>
       )
      })}
     <Outlet></Outlet>    
    </div>
  )
}

