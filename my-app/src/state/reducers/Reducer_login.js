const login_reducer=(state=-1,action)=>{
    switch(action.type){
        case 'login':          
            state=action.payload
            return state
        
        default:
            return state;
    }
}
export default login_reducer