import React from 'react'
import { Link } from 'react-router-dom'
import homepic from "./homepic.jpg"

const Home = () => {
  return (
    <div>
      <h1>Naima</h1>
      <img src={homepic} alt ='myImage' style={{width:"100%", height:"100%"}}/>
      <Link to="movies"><button>Movie List</button></Link> 
    </div>
  )
}

export default Home