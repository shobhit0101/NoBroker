

export const register=(user)=>{
  console.log(user)
  return(dispatch)=>{
    dispatch({
      type:'register',
      payload:user
    })
  }
}
export const postprop=(prop,i)=>{
  const p={
    property:prop,
    i:i
  }
  return(dispatch)=>{
    dispatch({
      type:'postprop',
      payload:p
    })
  }
}
export const sendmsg=(msg)=>{
  return(dispatch)=>{
    dispatch({
      type:'sendmsg',
      payload:msg
    })
  }
}
export const login=(i)=>{
  return(dispatch)=>{
    dispatch({
      type:'login',
      payload:i
    })
  }
}
export const updateprofile=(req)=>{
  return(dispatch)=>{
    dispatch({
      type:'update',
      payload:req
    })
  }
}
export const deleteprofile=(i)=>{
  return(dispatch)=>{
    dispatch({
      type:'update',
      payload:i
    })
  }
}