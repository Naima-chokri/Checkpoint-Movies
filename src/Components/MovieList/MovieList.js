import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'

const MovieList = ({data,idDel}) => {
  return (
    <div className="wrapper">
        <div  style={{display:'flex', margin:'auto'}}>
        { data.map(el=><MovieCard  key={el.id} title={el.title} desc={el.desc} urlImage={el.urlImage} rating={el.rating} idDel={idDel}/>)}
        </div>
    </div>
  )
}

export default MovieList