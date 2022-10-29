import React from 'react'
import "./Filter.css";
const Filter = () => {
    const handleSubmit=()=>{}
  return (
    <>
        <form action="/post" method="post" onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="container">
                <div className="container d-flex justify-content-between">
                    <div className='pt-2'>
                        <h5>Filter</h5>
                    </div>
                    <div className='align-self-end'>
                        <button className='btn'><h5>Clear all</h5></button>
                    </div>
                </div>
                <div className="container">
                    <label htmlFor="Carpet_Area">Location</label>
                    <select className='location' style={{"width":"100%"}} name="Area_Unit" id="Area_Unit"  size="1">
                        <option value="Delhi">Delhi</option>
                        <option value="Lucknow">Lucknow</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                        <option value="Kolkata">Kolkata</option>
                    </select>
                </div>
                <div className="container">
        <label
          htmlFor="lookingto"
          className="form-label"
          style={{ margin: "0px", fontSize: "14px" }}
          
        >
          Looking To:{" "}
        </label>
        <div className="row px-3">
        <div className="form-check col-3">
          <input
            className="form-check-input radio_color"
            value="All"
            type="radio"
            name="purpose"
            // onChange={handleChange}
            id=""
            // checked={prop_cat==="Land"}
          />
          <label className="form-check-label small_font" htmlFor="">
            All
          </label>
        </div>
        <div className="form-check col-3">
          <input
            className="form-check-input radio_color"
            value="buy"
            // onChange={handleChange}
            type="radio"
            name="purpose"
            id=""
            // checked={purpose==="sell" }
          />
          <label className="form-check-label small_font" htmlFor="">
            Buy
          </label>
        </div>
        <div className="form-check col-3">
          <input
            className="form-check-input radio_color"
            value="Rent"
            type="radio"
            name="purpose"
            // onChange={handleChange}
            id=""
            // checked={purpose==="Rent" }
          />
          <label className="form-check-label small_font" htmlFor="">
            Rent
          </label>
        </div>
        <div className="form-check col-3">
          <input
            className="form-check-input radio_color"
            value="PG"
            type="radio"
            name="purpose"
            // onChange={handleChange}
            id=""
            // checked={purpose==="PG" }
          />
          <label className="form-check-label small_font" htmlFor="">
            PG
          </label>
        </div>
        </div>
      </div>
      <div className="container">
        <label
          htmlFor="PropertyCategory"
          className="form-label"
          style={{ margin: "0px", fontSize: "14px" }}
        >
          {" "}
          <b>Type Of Place</b>{" "}
        </label>
        <div className="row px-3">
        <div className="form-check col-4">
          <input
            className="form-check-input radio_color"
            value="All"
            type="radio"
            name="prop_cat"
            // onChange={handleChange}
            id=""
            // checked={prop_cat==="Land"}
          />
          <label className="form-check-label small_font" htmlFor="">
            All
          </label>
        </div>
        <div className="form-check col-4">
          <input
            className="form-check-input radio_color"
            value="Residential"
            type="radio"
            name="prop_cat"
            // onChange={handleChange}
            id=""
            // checked={prop_cat==="Residential"}
          />
          <label className="form-check-label small_font" htmlFor="">
            Residential
          </label>
        </div>
        <div className="form-check col-4">
          <input
            className="form-check-input radio_color"
            value="Commercial"
            type="radio"
            name="prop_cat"
            // onChange={handleChange}
            id=""
            // checked={prop_cat==="Commercial"}
          />
          <label className="form-check-label small_font" htmlFor="">
            Commercial
          </label>
        </div>
        <div className="form-check col-4">
          <input
            className="form-check-input radio_color"
            value="Apartment"
            type="radio"
            name="prop_cat"
            // onChange={handleChange}
            id=""
            // checked={prop_cat==="Apartment"}
          />
          <label className="form-check-label small_font" htmlFor="">
            Apartment
          </label>
        </div>
        <div className="form-check col-4">
          <input
            className="form-check-input radio_color"
            value="House"
            type="radio"
            name="prop_cat"
            // onChange={handleChange}
            id=""
            // checked={prop_cat==="House"}
          />
          <label className="form-check-label small_font" htmlFor="">
            House
          </label>
        </div>
        <div className="form-check col-4">
          <input
            className="form-check-input radio_color"
            value="Land"
            type="radio"
            name="prop_cat"
            // onChange={handleChange}
            id=""
            // checked={prop_cat==="Land"}
          />
          <label className="form-check-label small_font" htmlFor="">
            Land
          </label>
        </div>
      </div>
        </div>
        <div className="container row">
        <div className="container col-6">
            Price Range:
            <div className="d-flex">
                <div className="mx-0">
                    <input type="number" name='min' id='min' placeholder='Min'/>    
                </div>
                <div className="mx-3">
                    <input type="number" name='max' id='max' placeholder='Max'/>    
                </div>   
            </div> 
        </div>
        <div className="container col-6">
            Area:
            <div className="d-flex">
                <div className="mx-0">
                    <input type="number" name='min' id='min' placeholder='Min'/>    
                </div>
                <div className="mx-3">
                    <input type="number" name='max' id='max' placeholder='Max'/>    
                </div>   
            </div> 
        </div>
        </div>
            </div>
        </form>
    </>
  )
}

export default Filter