import { GET_ERRORS } from "../Actions/DispatcherTypes";
const initialState = {}

export default function genericreducer (state = initialState, action){
    switch(action.types) 
    {
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
}
