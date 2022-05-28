import React from 'react'
import { useParams } from 'react-router-dom'

const Moviedetails = ({data}) => {
  const param = useParams()
  console.log(param.id)
  console.log(data)
  console.log(data.filter(el=>(el.id==param.id))[0])
  const datadetails = (data.filter(el=>(el.id==param.id))[0])
  return (
    <div>
        <h1>Movie Details </h1>
        <h3>id : {datadetails.id}</h3>
        <h3>title : {datadetails.title}</h3>
    </div>
  )
}

export default Moviedetails