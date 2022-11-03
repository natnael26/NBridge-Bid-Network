import React from 'react'
import favicon from '../../assests/images/favicon.png';

import logo from '../../assests/images/logo-no-background_small.png';
import img from '../../assests/images/5138438.jpg'
import img1 from '../../assests/images/5244090.jpg';

  import '../../index.css';
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import {Link} from 'react-router-dom';
function Login() {

    
  return (
    
    <section className="login-main-wrapper">
    <div className="container-fluid pl-0 pr-0">
      <div className="row no-gutters">
        <div className="col-md-5 p-5 bg-white full-height">
          <div className="login-main-left">
            <div className="text-center mb-5 login-main-left-header pt-4">
              <img src={logo} className="img-fluid" alt="LOGO" />
              <h5 className="mt-3 mb-3">Welcome to NBridge Bid Network</h5>
              <p>Private information is practically the source of every large modern fortune<br /></p>
            </div>
            <form action="index.html">
              <div className="form-group">
                <label>Mobile number</label>
                <input type="text" className="form-control" placeholder="Enter mobile number" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <div className="mt-4">
                <div className="row">
                  <div className="col-12">
                    <button type="submit" className="btn btn-outline-primary btn-block btn-lg">Sign In</button>
                    
                  </div>
                </div>
              </div>
            </form>
            <div className="text-center mt-5">
              <p className="light-gray">Don’t have an account? <Link to="/signup">Sign Up</Link></p>
            </div>   
          </div>
        </div>
        <div className="col-md-7">
       
          <div className="login-main-right bg-white px-5 mt-5 mb-5">

     
            <OwlCarousel className="owl-theme" loop margin={10} items={1} autoplay={true} >
              <div className="item">
                <div className="carousel-login-card text-center">
                  <img src={img} className="img-fluid" alt="LOGO" />
                  <h5 className="mt-5 mb-3">​take bid to next level</h5>
                  <p className="mb-4">when an unknown printer took a galley of type and scrambled<br /> it to make a type specimen book. It has survived not <br />only five centuries</p>
                </div>
              </div>
              <div className="item">
                <div className="carousel-login-card text-center">
                  <img src={img1} className="img-fluid" alt="LOGO" />
                  <h5 className="mt-5 mb-3">Work from home</h5>
                  <p className="mb-4">when an unknown printer took a galley of type and scrambled<br /> it to make a type specimen book. It has survived not <br />only five centuries</p>
                </div>
              </div>
              <div className="item">
                <div className="carousel-login-card text-center">
                  <img src={img} className="img-fluid" alt="LOGO" />
                  <h5 className="mt-5 mb-3">Analysis</h5>
                  <p className="mb-4">when an unknown printer took a galley of type and scrambled<br /> it to make a type specimen book. It has survived not <br />only five centuries</p>
                </div>
              </div>
              <div className="item">
                <div className="carousel-login-card text-center">
                  <img src={img} className="img-fluid" alt="LOGO" />
                  <h5 className="mt-5 mb-3">​take bid to next level</h5>
                  <p className="mb-4">when an unknown printer took a galley of type and scrambled<br /> it to make a type specimen book. It has survived not <br />only five centuries</p>
                </div>
              </div>
              <div className="item">
                <div className="carousel-login-card text-center">
                  <img src={img1} className="img-fluid" alt="LOGO" />
                  <h5 className="mt-5 mb-3">Work from home</h5>
                  <p className="mb-4">when an unknown printer took a galley of type and scrambled<br /> it to make a type specimen book. It has survived not <br />only five centuries</p>
                </div>
              </div>
              <div className="item">
                <div className="carousel-login-card text-center">
                  <img src={img} className="img-fluid" alt="LOGO" />
                  <h5 className="mt-5 mb-3">Analysis</h5>
                  <p className="mb-4">when an unknown printer took a galley of type and scrambled<br /> it to make a type specimen book. It has survived not <br />only five centuries</p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Login