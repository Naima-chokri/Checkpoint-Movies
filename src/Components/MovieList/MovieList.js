import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({data}) => {
  return (
    <div className="wrapper">
        <div  style={{display:'flex', margin:'auto'}}>
        { data.map(el=><MovieCard  key={el.id} title={el.title} desc={el.desc} urlImage={el.urlImage}/>)}
        </div>
    </div>
  )
}

export default MovieList