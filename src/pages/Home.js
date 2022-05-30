import React from 'react'
import { Link } from 'react-router-dom'
import homepic from "./homepic.jpg"
import './Home.css'

const Home = () => {
  return (
    // <div>
    //   <h1>Naima</h1>
    //   <img src={homepic} alt ='myImage' style={{width:"100%", height:"100%"}}/>
    //   <Link to="movies"><button>Movie List</button></Link> 
    // </div>

   <div className="view">
  <video className="video-intro" poster="https://mdbootstrap.com/img/Photos/Others/background.jpg" playsInline autoPlay muted loop>
    <source src="https://mdbootstrap.com/img/video/animation.mp4" type="video/mp4" />
  </video>
  {/* Mask & flexbox options*/}
  <div className="mask rgba-gradient d-flex justify-content-center align-items-center">
    {/* Content */}
    <div className="container px-md-3 px-sm-0">
      {/*Grid row*/}
      <div className="row wow fadeIn">
        {/*Grid column*/}
        <div className="col-md-12 mb-4 white-text text-center wow fadeIn">
          <h3 className="display-3 font-weight-bold white-text mb-0 pt-md-5 pt-5">Unlimited movies, TV shows, and more.</h3>
          <h4 className="subtext-header mt-2 mb-4">Watch anywhere. Cancel anytime.</h4>
          <Link to="movies"> <a href="#!" className="btn btn-rounded btn-outline-white">
            <i className="fa fa-home" /> Visit us
          </a> </Link>
        </div>
        {/*Grid column*/}
      </div>
      {/*Grid row*/}
    </div>
  </div>
</div>


  )
}

export default Home