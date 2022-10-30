import React, { useState } from 'react';
import Filter from '../Filter/Filter';
import Map from './search_components/Map/Map';
import Results from './search_components/Results/Results';
import './Search.css';
const Search = () => {
  const [res, setres] = useState([])
  const [coords, setcoords] = useState(['54','36'])
  return (
    <>
    <div className="" >
    <div className="row mainn">
    <div className="col-3" style={{"height":"100%"}}>
      <Filter res={res} setres={setres}/>
    </div>
    <div className="col-4 " style={{"overflow-y":"auto","maxHeight":"100vh","scrollbarWidth":"none"}}>
    <Results res={res} coords={coords} setcoords={setcoords}/>
    </div>
    <div className="col-5">
      <Map lat={coords[0]} lng={coords[1]}/>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Search