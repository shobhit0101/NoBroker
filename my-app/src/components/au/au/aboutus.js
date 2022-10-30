import React from "react";
import './aboutus.css'
import building from './img/building.png'
import building_gif from './img/building_gif.gif'
import strategy from './img/strategy.webp';
import Footer from "../sub/footer";

function AboutUs(){

    return(
        <div>
            <div class="header_container">
            <img src={building_gif} style={{width:'100%',height:'200px'}} />
            <div class="text">
            <div class="au_text">About Us</div>
            </div>
            </div>
            
            <div class="section-wrapper">
            <div class="container">
            <div class="row align-items-center">
            <div class="col-lg-6 col-md-12 col-sm-12 content-left">
            <div class="heading-title"><div class="heading-decor">
            <i class="icon_before opal-icon-decor "></i>
            </div>
            <h3 class="values">OUR VISION</h3>
            </div>
            <h4>In-House Made</h4>
            <p>From the vibrant ground level plaza to the terraces, private gardens, balconies and lush rooftop work spaces, Maisonco</p>
            <h4>Our Customers Mean the World</h4>
            <p>From the vibrant ground level plaza to the terraces, private gardens, balconies and lush rooftop work spaces, Costix offers an array of amenities …</p>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12">
            <img class="img-fluid" src={building} alt="" />
            </div>
            </div>
            </div>
            </div>

            <div class="section-wrapper">
            <div class="container">
            <div class="row align-items-center">
            <div class="col-lg-6 col-md-12 col-sm-12">
            <img class="img-fluid" src={strategy} alt="" />
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 content-right">
            <div class="heading-title"><div class="heading-decor">
            <i class="icon_before opal-icon-decor "></i>
            </div>
            <h3 class="smv">OUR VALUES</h3>
            </div>
            <p>We are committed to high standards, ethics and dedication to deliver quality service to our clients! We pride ourselves on our ability to listen to and understand our client’s needs; our in depth knowledge of the area and the high level of personal service we deliver, ensuring our clients are completely satisfied.</p>
            </div>
            </div>
            </div>
            </div>






            <div class="section-wrapper">
            <div class="ourteam">
            <div class="container">
            <div class="heading-title">
            <div class="heading-decor">
            <i class="icon_before opal-icon-decor "></i>
            </div>
            <h3 class="text-ot">OUR TEAM</h3>
            </div><div class="row no-gutters">
            <div class="col">
            <div class="our-team-block-wrap">
            <div class="box-ourteam ">
            <div class="avarta-team">
            <img class="img-fluid" src={building} alt="" />
            </div>
            <div class="content-team">
            <h3 class="name">SHOBHIT GUPTA</h3>
            <span class="job">Indian Institute of Information Technology Sricity</span>
            </div>
            </div>
            </div>
            </div>
            <div class="col">
            <div class="our-team-block-wrap">
            <div class="box-ourteam d-flex flex-sm-column-reverse flex-column">
            <div class="avarta-team">
            <img class="img-fluid" src={building} alt="" />
            </div>
            <div class="content-team">
            <h3 class="name">UTKARSH VERMA</h3>
            <span class="job">Indian Institute of Information Technology Sricity</span>
            </div>
            </div>
            </div>
            </div>
            <div class="col">
            <div class="our-team-block-wrap">
            <div class="box-ourteam ">
            <div class="avarta-team">
            <img class="img-fluid" src={building} alt="" />
            </div>
            <div class="content-team">
            <h3 class="name">LAKSHYA BOOB</h3>
            <span class="job">Indian Institute of Information Technology Sricity</span>
            </div>
            </div>
            </div>
            </div>
            <div class="col">
            <div class="our-team-block-wrap">
            <div class="box-ourteam d-flex flex-sm-column-reverse flex-column">
            <div class="avarta-team">
            <img class="img-fluid" src={building} alt="" />
            </div>
            <div class="content-team">
            <h3 class="name">SAKAMURI KODANDA RAMA PHANEENDRA</h3>
            <span class="job">Indian Institute of Information Technology Sricity</span>
            </div>
            </div>
            </div>
            </div>
            <div class="col">
            <div class="our-team-block-wrap">
            <div class="box-ourteam ">
            <div class="avarta-team">
            <img class="img-fluid" src={building} alt="" />
            </div>
            <div class="content-team">
            <h3 class="name">RAM GOPAL ZAMPANI</h3>
            <span class="job">Indian Institute of Information Technology Sricity</span>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            <Footer />
        </div>
    )

}

export default AboutUs