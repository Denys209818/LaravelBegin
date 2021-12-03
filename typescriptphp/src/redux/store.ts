import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";

var middleware = [thunk];


export const rootReducer = combineReducers({
    user: userReducer
});

export type RootReducer = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;