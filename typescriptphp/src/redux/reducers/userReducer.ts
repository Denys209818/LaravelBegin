import { ActionTypes, UserActions, UserState } from "../reduxTypes";

var initialState: UserState = {
    user: null,
    access_token: ''
}

const userReducer = (state = initialState, action: UserActions): UserState => 
{
    switch(action.type) 
    {
        case ActionTypes.INIT: 
        {
            return action.payload;
        } 
        default : 
        {
            return state;
        }
    }
}

export default userReducer;