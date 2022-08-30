/* eslint-disable no-unused-vars */

import axios from 'axios';
import React ,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
export default function Edit() {
  const{id} = useParams();
  const [movieEdit, setMovieEdit] = useState(null)
  useEffect(() => {
    const movieGet= async ()=>{
    try{
        const movieGet = await axios.get(`http://localhost:8000/api/v1/movie/${id}`) 
        setMovieEdit(movieGet.data.data)
    }catch(error){
        console.log(error)
    }
    }
    movieGet()
  },[id]) 
  
const handleChange=(e)=>{
  setMovieEdit(prev=>{
    return {
      ...prev,
      [e.target.name] : e.target.value
    }
  } )


}
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(movieEdit.title)
  }

  return (
    <div>
      <h2>Edit movie</h2>
        {!movieEdit && <p>Login</p>}   
        {movieEdit && (
          <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", width:"200px"}} >
           
              <input type="text" name="title" value={movieEdit.title} onChange={handleChange}/>
              <input type="number" name="year"  value={movieEdit.year} onChange={handleChange} />
              <input type="text" name="director" value={movieEdit.director} onChange={handleChange} />
              <input type="text" name="sypnosis" value={movieEdit.sypnosis} onChange={handleChange} />
              <input type="number" name="duration" value={movieEdit.duration} onChange={handleChange} />
              <input type="text" name="image" value={movieEdit.image} onChange={handleChange} />
              <button type='submit'>View log</button>
          </form>
        )} 
    </div>
  )
}
