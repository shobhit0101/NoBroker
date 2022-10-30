import React from 'react'
import Card from '../Card/Card';
import './Results.css';
const Results = (props) => {
  const{res,coords,setcoords}=props
  return (
    <>
      <div className="container">    
     <form action="">
          <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
            <div className="input-group">
              <input type="search" placeholder="Search for City..." aria-describedby="button-addon1" className="form-control border-0 bg-light"/>
              <div className="input-group-append">
                <button id="button-addon1" type="submit" className="btn btn-link text-primary"><i className="fa fa-search"></i></button>
              </div>
            </div>
          </div>
          
      </form>
      </div> 
       
      {res.map((e)=>{return(<div className="container">
        <Card data={e} coords={coords} setcoords={setcoords}/>
      </div>)})} 
      {/* <div className="container">
        <Card/>
      </div> 
      <div className="container">
        <Card/>
      </div> 
      <div className="container">
        <Card/>
      </div> 
      <div className="container">
        <Card/>
      </div>  */}
    </>
  )
}

export default Results