const init_state={
    user:{
        username:'',
        email:'',
        password:'',
        posted_property:[],
        message:[]
    }
}
const initial=[]

const reducer=(state=initial,action)=>{
    switch(action.type){
        case 'register':
            return state.concat(action.payload)
            
        case 'postprop':
            console.log(action.payload.i.state)
            state[action.payload.i.state].posted_property=state[action.payload.i.state].posted_property.concat(action.payload.property)
            return state
            
        case 'sendmsg':
            return{
                ...state.user,
                message:action.payload.msg
            }
        default:
            return state;
    }
}
export default reducer