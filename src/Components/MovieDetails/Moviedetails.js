import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './MovieDetails.css'

const Moviedetails = ({data}) => {
  const param = useParams()
  console.log(param.id)
  console.log(data)
  console.log(data.filter(el=>(el.id==param.id))[0])
  const datadetails = (data.filter(el=>(el.id==param.id))[0])
  return (
    // <div>
    //     <h1>Movie Details </h1>
    //     <h3>id : {datadetails.id}</h3>
    //     <h3>title : {datadetails.title}</h3>
    // </div>

<div className="container">
  <div className="col-lg-8 border p-3 main-section bg-white">
    <div className="row hedding m-0 pl-3 pt-0 pb-3">
      <p>
      <Link to="/movies">
        <a href="#" class="btn btn-info btn-details btn-lg">
          <span class="glyphicon glyphicon-circle-arrow-left"></span> Back
        </a>
        </Link>
      </p> 
    </div>
    <div className="row m-0">
      <div className="col-lg-4 left-side-product-box pb-3">
        <img src={datadetails.urlImage} className="border p-3" />
      </div>
      <div className="col-lg-8">
        <div className="right-side-pro-detail border p-3 m-0">
          <div className="row">
            <div className="col-lg-12">
              <span></span>
              <h2 className="m-0 p-0"> {datadetails.title} </h2>
            </div>
            <div className="col-lg-12">
              <p className="m-0 p-0 price-pro">rating:{datadetails.rating}</p>
              <hr className="p-0 m-0" />
            </div>
            <div className="col-lg-12 pt-2">
              <h5>Movie Description</h5>
              <span>{datadetails.desc}</span>
              <hr className="m-0 pt-2 mt-2" />
            </div>
            <div className="col-lg-12">
              <p className="tag-section"><strong>actors : </strong><a href>{datadetails.actors}</a></p>
            </div>
            {/* <div className="col-lg-12">
              <h6>Quantity :</h6>
              <input type="number" className="form-control text-center w-100" defaultValue={1} />
            </div> */}
            <div className="col-lg-12 mt-3">
              <div className="row">
                <div className="col-lg-6 pb-2">
                  <a href="#" className="btn btn-danger w-100">Download</a>
                </div>
                <div className="col-lg-6">
                  <a href="#" className="btn btn-success w-100">Watch Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Moviedetails