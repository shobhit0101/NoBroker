import React, { useState,useEffect } from 'react'

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, useMap,Marker,Popup,useMapEvents } from 'react-leaflet'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
import LocationCard from './LocationCard/LocationCard ';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: new L.Point(25, 35)
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = (props) => {
    const{lat,lng,data}=props
    // const map = useMap();
    // useEffect(() => {
    //   map.flyTo([lat,lng], 13);
    // },[lat,lng,map])
    
  const FlyMapTo=(props2) =>{
    const map = useMap();
  
    useEffect(() => {
      map.flyTo(props2.center, props2.zoom);
    });
  
    return null;
  }

  return (
    
    <>
  <MapContainer center={[lat,lng]} style={{ height: '100%', width: '100%' }} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {data!==null&&<Marker position={[lat,lng]}>
      <div className="container" style={{"width":"30px"}}>
      <Popup >
        
      
      
        <LocationCard data={data}/>
        
      </Popup>
      </div>
    </Marker>}
    <FlyMapTo center={[lat,lng]} zoom={13} />
  </MapContainer>
    </>
  )
}

export default Map