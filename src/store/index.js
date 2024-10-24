
import { createStore, applyMiddleware, combineReducers } from "redux";
import { CommonReducer } from './reducer/reducer'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import forgotPasswordSlice from "./authentication/forgotpasswordSlice"
import authSlice from "./authentication/authSlice"


const rootReducer = combineReducers({
    commonReducer: CommonReducer,  
    auth: authSlice,
    forgotpassword: forgotPasswordSlice,
});

const middleware = [thunk]

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
