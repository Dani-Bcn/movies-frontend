/* eslint-disable jsx-a11y/alt-text */
import React ,{useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, NavLink, useNavigate } from 'react-router-dom';

export default function Movie() {
const navigate = useNavigate()
const [movie,setMovie] = useState(null)
const { id } = useParams()
useEffect(()=>{
  const getMovie = async()=>{
    try{
      const dataMovie = await axios(`http://localhost:8000/api/v1/movie/${id}`)
      setMovie(dataMovie.data.data)      
    }catch(error){
      console.log(error)
    }
  }
  getMovie()
},[id])

   const handleDelete = ()=>{
      try{ 
          axios.delete(`http://localhost:8000/api/v1/movie/${id}`)   
      }catch(error){
          console.log(error)
      }    
   }
  return (
    <div>
     {!movie && <p>Loading</p>}
     {movie && <h1>{movie.title}</h1>}
     {movie && <h1>{movie.director}</h1>}
     {movie && <h1>{movie.year}</h1>}
     {movie && <h1>{movie.duration}</h1>}
     {movie && <h1>{movie.sypnosis}</h1>}
     {movie && <img src={movie.image} width="200px"></img>}  
     <br /><br />
     <NavLink to="/movies"><button onClick={()=>handleDelete()}>Delete movie</button></NavLink>
    <button onClick={()=>navigate(`/edit/${id}`)}>Edit movie</button>
  </div>
  )
}
