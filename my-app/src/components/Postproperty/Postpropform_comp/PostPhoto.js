import React from 'react'
import "../postprop.css";
const PostPhoto = (props) => {
  const{fdata,handleChange,handleChange_file}=props
  const{price,owner_name,phoneno,isimg,image_file,image}=fdata
  return (
    <>
    <div className="form_element_box">
            <p className="italic_font" style={{"textAlign": "center","margin":" 0px","fontSize": "25px"}}> <b>Upload Photo</b>
            </p>
        </div>
        <div className="form_element_box" style={{"textAlign": "center"}}>
            <img src={!isimg?`../../../images/collections_black_24dp.svg`:image} alt="not found" style={{"height": "4rem "}}/>
            <br/>
            <label htmlFor="image">{!isimg?`Select a file:`:`${image_file.name}`}</label><br/>
            <input type="file" className="file-upload-button" name="image_file" id="image_file"  onChange={handleChange_file} />
        </div>
        <div className="form_element_box">
            <p className="italic_font" style={{"textAlign": "center","margin":" 0px","fontSize": "25px"}}> <b>Pricing and ownership</b>
            </p>
        </div>
        <div className="form_element_box">
            <input type="number" className="form-control textbox" name="price" id="" placeholder="₹ Expected Price" required onChange={handleChange} value={price}/>
            <br/>
            <input type="text" className="form-control textbox" name="owner_name" id="" placeholder="Owner's Name" onChange={handleChange} value={owner_name}/>
            <br/>
            <input type="number" className="form-control textbox" name="phoneno" id="" placeholder="Phone Number" onChange={handleChange} value={phoneno}/>
            
        </div>
    </>
  )
}

export default PostPhoto