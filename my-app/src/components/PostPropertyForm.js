import React from 'react'

const PostPropertyForm = () => {
  return (
    <><form action="/post" method="post" enctype="multipart/form-data">
    <div className="form-body">
      <div className="initial-container">
        <div className="transparent_bg">
            <p className="italic_font" style="text-align: center; margin: 0px; font-size: 30px;"> <b>Begin posting your
                    property</b> </p>
        </div>
        <div className="transparent_bg">
            <p className="italic_font" style="text-align: center; margin: 0px;"> <b>Basic Details</b> </p>
        </div>
        <div className="form_element_box">
            <label htmlFor="Purpose" className="form-label" style="margin: 0px; font-size: 14px;"><b>Purpose (you're looking
                    to...)</b> </label>
            <div className="form-check">
                <input className="form-check-input radio_color" value="Sell" type="radio" name="purpose" id="" checked/>
                <label className="form-check-label small_font" htmlFor="">
                    Sell
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input radio_color" value="Rent" type="radio" name="purpose" id=""/>
                <label className="form-check-label small_font" htmlFor="">
                    Rent
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input radio_color" value="PG" type="radio" name="purpose" id=""/>
                <label className="form-check-label small_font" htmlFor="">
                    PG
                </label>
            </div>
        </div>
        <div className="form_element_box">
            <label htmlFor="PropertyCategory" className="form-label" style="margin: 0px; font-size: 14px;"> <b>Property's
                    Category</b> </label>
            <div className="form-check">
                <input className="form-check-input radio_color" value="Residential" type="radio" name="prop_cat" id=""
                    checked/>
                <label className="form-check-label small_font" htmlFor="">
                    Residential
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input radio_color" value="Commercial" type="radio" name="prop_cat" id=""/>
                <label className="form-check-label small_font" htmlFor="">
                    Commercial
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input radio_color" value="Apartment" type="radio" name="prop_cat" id=""/>
                <label className="form-check-label small_font" htmlFor="">
                    Apartment
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input radio_color" value="House" type="radio" name="prop_cat" id=""/>
                <label className="form-check-label small_font" htmlFor="">
                    House
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input radio_color" value="Land" type="radio" name="prop_cat" id=""/>
                <label className="form-check-label small_font" htmlFor="">
                    Land
                </label>
            </div>
        </div>
       

        <div className="transparent_bg">
            <p className="italic_font" style="text-align: center; margin: 0px;"> <b>Location Details</b> </p>
        </div>
        <div className="form_element_box">
            <input type="text" className="form-control textbox" name="city" id="city" placeholder="City*" required/><br/>

            <input type="text" className="form-control textbox" name="Apartment_society" id="Apartment\society"
                placeholder="Apartment\society*" required/><br/>

            <input type="text" className="form-control textbox" name="Locality" id="Locality" placeholder="Locality*"
                required/><br/>

            <input type="text" className="form-control textbox" name="sublocality" id="sublocality"
                placeholder="Sub locality(Optional)"/><br/>

            <input type="text" className="form-control textbox" name="houseno" id="houseno"
                placeholder="House no.(Optional)"/>
        </div>
        <div className="transparent_bg">
            <p className="italic_font " style="text-align: center; margin: 0px; font-size: 33px;"> <b>Tell us about your property </b>
            </p>
            <br/>
            <input type="text" className="form-control textbox" name="property_title" id="property_title"
                placeholder="Property Title"/>
                <br/>
            <input type="text" className="form-control textbox" name="abt_property" id="abt_property"
                placeholder="About Property"/>
                <br/>
            <input type="number" className="form-control textbox" name="property_age" id="property_age"
                placeholder="property_age"/>    
            
        </div>
        <div className="form_element_box">
            <p className="italic_font" style="text-align: center; margin: 0px; font-size: 25px;"> <b>Add Room
                Details</b> </p>
        </div>
        <div className="form_element_box">
            <label htmlFor="bedrooms" style="font-size: 14px;"> <b> No.of bedrooms</b></label><br/>
            <select name="bedrooms" id="bedrooms" className="form-select selectbox textbox">
                <option value="0">none</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="more than 5">more than 5</option>
            </select>
            <br/>
            <label htmlFor="bedrooms" style="font-size: 14px;"> <b> No.of bathrooms</b></label><br/>
            <select name="Bathrooms" id="Bathrooms" className="form-select selectbox textbox">
                <option value="0">none</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="more than 5">more than 5</option>
            </select>
            <br/>
            <label htmlFor="bedrooms">No.of Balconies</label><br/>

            <select name="Balconies" id="Balconies" className="form-select selectbox textbox">
                <option value="0">none</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="more than 5">more than 5</option>
            </select>
            <br/>
            <label htmlFor="bedrooms">No.of floors</label><br/>

            <select name="floorno" id="floorno" className="form-select selectbox textbox">
                <option value="0">none</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="more than 5">more than 5</option>
            </select>
        </div>

        <div className="form_element_box">
            <p className="italic_font" style="text-align: center; margin: 0px; font-size: 25px;"> <b>Add Area
                    Details</b> </p>
        </div>
        <div className="form_element_box">

            <input type="text" className="textbox" style="border: 1px solid black;" name="area" id="Carpet_Area"
                placeholder="Carpet Area"/>
            <label htmlFor="Carpet_Area"></label>
            <select className="textbox" name="Area_Unit" id="Area_Unit" size="1">
                <option value="sq.ft">sq.ft</option>
                <option value="sq.yards">sq.yards</option>
                <option value="sq.m">sq.m</option>
                <option value="acres">acres</option>
                <option value="sq.km">sq.km</option>
                <option value="sq.hm">sq.hm</option>
                <option value="sq.cm">sq.cm</option>
            </select>
        </div>

        <div className="form_element_box">
            <p className="italic_font" style="text-align: center; margin: 0px; font-size: 25px;"> <b>Upload Photo</b>
            </p>
        </div>
        <div className="form_element_box" style="text-align: center;">
            <img src="images/collections_black_24dp.svg" alt="not found" style="height: 4rem; "/>
            <br/>
            <label htmlFor="image">Select a file:</label><br/>
            <input type="file" className="file-upload-button" name="image" id="image"/>
        </div>
        <div className="form_element_box">
            <p className="italic_font" style="text-align: center; margin: 0px; font-size: 25px;"> <b>Pricing and ownership</b>
            </p>
        </div>
        <div className="form_element_box">
            <input type="number" className="form-control textbox" name="price" id="" placeholder="₹ Expected Price"/>
            <br/>
            <input type="text" className="form-control textbox" name="owner_name" id="" placeholder="Owner's Name"/>
            <br/>
            <input type="number" className="form-control textbox" name="phoneno" id="" placeholder="Phone Number"/>
            
        </div>

        <div style="text-align: center;">
            <button type="submit" className="btn btn-outline-dark "
                style="padding: 5px 30vh; border: 3px solid black; "> <b>Submit</b></button>
        </div>



    </div>
    </div>
        
    
  </form></>
  )
}

export default PostPropertyForm