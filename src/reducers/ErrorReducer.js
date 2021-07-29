import {GET_ERRORS} from "../Actions/DispatcherTypes";

const initialState = {}

export default function generic (state = initialState, action){
    switch(action.type) 
    {
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
}
