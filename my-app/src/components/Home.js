import React from "react";
import SearchHeader from "./SearchHeader";
import "../App.css";
const Home = () => {
  return (
    <>
      <SearchHeader />
      {// todo make them a single component }
}
      <div className="home-content">
        <h3>GET STARTED WITH EXPLORING REAL ESTATE OPTIONS</h3>
        <div className="a-box mx-4">
          <div className="img-container">
            <div className="img-inner">
              <div className="inner-skew">
                <img src="/images/sell_rent.jpg" />
              </div>
            </div>
          </div>
          <div className="text-container">
            <h3>Sell/Rent property</h3>
          </div>
        </div>
        <div className="a-box mx-4">
          <div className="img-container">
            <div className="img-inner">
              <div className="inner-skew">
                <img src="/images/buying-home.jpg" />
              </div>
            </div>
          </div>
          <div className="text-container">
            <h3>Buying a home</h3>
          </div>
        </div>
        <div className="a-box mx-4">
          <div className="img-container">
            <div className="img-inner">
              <div className="inner-skew">
                <img src="/images/bedroom.jpg" />
              </div>
            </div>
          </div>
          <div className="text-container">
            <h3>PG and co-living</h3>
          </div>
        </div>
        <div className="a-box mx-4">
          <div className="img-container">
            <div className="img-inner">
              <div className="inner-skew">
                <img src="/images/rent.jpg" />
              </div>
            </div>
          </div>
          <div className="text-container">
            <h3>Rentind a home</h3>
          </div>
        </div>
      </div>
      
    <h6 className="my-4" style={{"color": "#96968d", "fontFamily": "'Poppins', sans-serif", "fontWeight": "700"}}>FOR ALL YOUR PROPEERTY RELATED NEEDS - We got a portal that has all</h6>
    <p style={{"fontSize": "50px", "fontFamily": "'Poppins', sans-serif", "fontWeight": "800",     "color": "#7d9644ad"}}>Price is what you pay. <br/> Value is what you get...</p>

    <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img style={{"height": "400px", "width": "1000px"}} src="/images/family-img.webp" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h6 style={{"color": "#96968d", "fontFamily": "'Poppins', sans-serif", "fontWeight": "700"}}>POST YOUR PROPERTY</h6>
        <h1 className="display-5 fw-bold lh-1 mb-3">Property owners get free posting when they register.</h1>
        <p className="lead">Sell or rent your residential/ commercial property.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
         <a href="postyourproperty"><button type="button" className="btn btn-primary btn-lg px-4 me-md-2" style={{"fontFamily": "'Poppins', sans-serif", "fontWeight": "700","marginLeft": "100px"}}>Post your property for FREE</button></a> 
        </div>
      </div>
    </div>
  </div>
  
      {// todo make them a single component }
}
  <h1 style={{"fontFamily": "'Poppins', sans-serif", "fontWeight": "700", "fontSize": "50px"}}>Explore Real Estate in Popular Indian Cities</h1> <br/>

  <div className="cities">
    <div className="city-cards">
      <div className="card">
        <div className="card-header">
          <img src="/images/delhi.jpg" alt="rover" />
        </div>
        <div className="card-body">
          <span className="tag tag-teal">Delhi</span>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <img src="/images/chennai.jpg" alt="rover" />
        </div>
        <div className="card-body">
          <span className="tag tag-teal">Chennai</span>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <img src="/images/mumbai.jpg" alt="rover" />
        </div>
        <div className="card-body">
          <span className="tag tag-teal">Mumbai</span>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <img src="/images/kolkata.jpg" alt="rover" />
        </div>
        <div className="card-body">
          <span className="tag tag-teal">Kolkata</span>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <img src="/images/lucknow.jpg" alt="rover" />
        </div>
        <div className="card-body">
          <span className="tag tag-teal">Lucknow</span>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <img src="/images/kanpur.jpg" alt="rover" />
        </div>
        <div className="card-body">
          <span className="tag tag-teal">Kanpur</span>
        </div>
      </div>
    </div>
  </div> <br/> <br/> <br/><br/>
</>
   
    
  );
};

export default Home;
