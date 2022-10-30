import { useState } from "react";
import PropContext from "./propertyContext";
const PropState=(props)=>{
    const propInitial = []
    const [prop, setProp] = useState(propInitial)
    // const addprop=(x)=>{
    //   setProp(prop.concat(x))
    // }
    return (
        <PropContext.Provider value={{ prop,setProp }}>
          {props.children}
        </PropContext.Provider>
    )
}
export default PropState;