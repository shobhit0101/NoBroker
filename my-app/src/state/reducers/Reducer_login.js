const login_reducer=(state=-1,action)=>{
    switch(action.type){
        case 'login':          
            return {state:action.payload}
            
        
        default:
            return state;
    }
}
export default login_reducer