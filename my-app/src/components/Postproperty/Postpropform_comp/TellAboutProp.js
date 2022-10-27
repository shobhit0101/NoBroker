import React from 'react'
import "../postprop.css";
const TellAboutProp = (props) => {
  const{fdata,handleChange}=props
  const{property_title,abt_property,property_age}=fdata
  return (
    <>
    <div class="transparent_bg pt-2 pb-5">
            <p class="italic_font " style={{"textAlign": "center","margin":" 0px","fontSize": "33px"}}> <b>Tell us about your property </b>
            </p>
            <br/>
            <input type="text" class="form-control textbox" name="property_title" id="property_title" value={property_title} onChange={handleChange}
                placeholder="Property Title"/>
                <br/>
            <input type="text" class="form-control textbox" name="abt_property" id="abt_property" value={abt_property} onChange={handleChange}
                placeholder="About Property"/>
                <br/>
            <input type="number" class="form-control textbox" name="property_age" id="property_age" value={property_age} onChange={handleChange}
                placeholder="property_age"/>    
            
    </div>
    </>
  )
}

export default TellAboutProp