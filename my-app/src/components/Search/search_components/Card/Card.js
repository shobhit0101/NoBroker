import React from 'react'

const Card = (props) => {
  const{coords,setcoords,data}=props
  const handleClick=()=>{
    setcoords([data.lat,data.lng])
  }
  return (
    <>
        <button className="btn" onClick={handleClick}>    
        <div className="card mb-3" style={{"width":"95%"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">ff</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        </button>
    </>
  )
}

export default Card