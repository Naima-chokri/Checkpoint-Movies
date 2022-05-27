import React, { useState } from 'react'
import { data } from '../../dataMovies'
import './Filterbyrating.css'
import {  Form, FormControl, Button} from 'react-bootstrap'

const Filterbyrating = ({FilterMovieByRating}) => {
  const [ratingmin, setRatingmin] = useState(0)
  const [ratingmax, setRatingmax] = useState(10)
    const getRatingmin = (e) =>{
        setRatingmin(e.target.value)
    }
    const getRatingmax = (e) =>{
        setRatingmax(e.target.value)
    }
    
    FilterMovieByRating(ratingmin,ratingmax);
  return (
    <div>

      <Form className="inputstyle">
      Raiting-min:<FormControl
          type="number"
          id="tentacles" 
          name="tentacles" 
          min="0"
          max="10"
          placeholder="min"
          className="me-2"
          aria-label="Search"
          onChange={getRatingmin}     
        />
      </Form>
      <Form className="inputstyle">
      Raiting-max:<FormControl
          type="number"
          id="tentacles" 
          name="tentacles" 
          min="0"
          max="10"
          placeholder="max"
          className="me-2"
          aria-label="Search"
          onChange={getRatingmax}     
        />
      </Form>
        {/* Raiting-min:<input className='inputstyle'type="number" id="tentacles" name="tentacles" min="0" max="10" onChange={getRatingmin} />
        Raiting-max<input className='inputstyle'type="number" id="tentacles" name="tentacles" min="0" max="10" onChange={getRatingmax} /> */}
    </div>
  )
}

export default Filterbyrating