import React from 'react'
import "../postprop.css";
const AreaDetail = (props) => {
  const{fdata,handleChange}=props
  const{area,Area_Unit}=fdata
  return (
    <>
    <div className="form_element_box  mt-0">
            <p className="italic_font" style={{"textAlign": "center","margin": "0px","fontSize": "25px"}}> <b>Add Area
                    Details</b> </p>
        </div>
        <div className="form_element_box">

            <input type="text" className="textbox" style={{"border": "1px solid black","width":"100%"}} name="area" id="Carpet_Area" value={area} onChange={handleChange}
                placeholder="Carpet Area"/>
            <label htmlFor="Carpet_Area"></label>
            <select className="textbox" style={{"width":"100%"}} name="Area_Unit" id="Area_Unit" onChange={handleChange} value={Area_Unit} size="1">
                <option value="sq.ft">sq.ft</option>
                <option value="sq.yards">sq.yards</option>
                <option value="sq.m">sq.m</option>
                <option value="acres">acres</option>
                <option value="sq.km">sq.km</option>
                <option value="sq.hm">sq.hm</option>
                <option value="sq.cm">sq.cm</option>
            </select>
        </div>
    </>
  )
}

export default AreaDetail