import React from 'react'
import ReactStars from 'react-stars'
import './MovieCard.css'

const MovieCard = ({title,urlImage, desc, date, duration, genres, actors, rating}) => {
  return (
    <div className="card">
    <img src= {urlImage} />
    <div className="descriptions">
      <h1>{title}</h1>
      <p>
      {desc}
      </p>
      <h3 ><ReactStars value= {rating} /></h3>
      <button>
        <i className="fab fa-youtube" />
        More Detailes
      </button>
      
    </div>
  </div>
  )
}

export default MovieCard