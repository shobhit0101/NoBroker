import React from 'react'
import "../postprop.css";
const RoomDetails = (props) => {
    const{fdata,handleChange}=props;
    console.log(fdata)
    const {bedrooms,Bathrooms,Balconies,floorno}=fdata;
  return (
    <>
    <div className="form_element_box">
            <p className="italic_font" style={{"textAlign": "center", "margin": "0px","fontSize": "25px"}}> <b>Add Room
                Details</b> </p>
        </div>
        <div className="form_element_box">
            <label htmlFor="bedrooms" style={{"fontSize": "14px"}}> <b> No.of bedrooms</b></label><br/>
            <input type="text" name="bedrooms" id="bedrooms" className="form-control textbox" value={bedrooms} onChange={handleChange} />
            <br/>
            <label htmlFor="bedrooms" style={{"fontSize": "14px"}}> <b> No.of bathrooms</b></label><br/>
            <input type="number" name="Bathrooms" id="Bathrooms" className="form-select selectbox textbox" onChange={handleChange} value={Bathrooms}/>
                
            <br/>
            <label htmlFor="bedrooms">No.of Balconies</label><br/>

            <input type="number" name="Balconies" id="Balconies" className="form-select selectbox textbox" onChange={handleChange} value={Balconies}/>
                
            <br/>
            <label htmlFor="bedrooms">No.of floors</label><br/>

            <input type="number" name="floorno" id="floorno" className="form-select selectbox textbox" onChange={handleChange} value={floorno} required/>
                
        </div>
    </>
  )
}

export default RoomDetails