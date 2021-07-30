import { GET_WALLETS,DELETE_WALLET, GET_WALLET} from '../Actions/DispatcherTypes'
const initialState = {
    wallets:[],
    wallet:''
}

export default function operation (state=initialState,action){
    switch(action.type){
        case GET_WALLETS:
            return {...state,wallets:action.payload};
        case GET_WALLET:
            return {...state,wallet:action.payload}
        case DELETE_WALLET:
            return{...state,wallets:state.wallets.filter(x=>x.id!==action.payload)}
        default:
            return state;
    }
}