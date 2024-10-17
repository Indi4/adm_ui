
import { createStore, applyMiddleware } from "redux";
import { CommonReducer } from './reducer/reducer'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middleware = [thunk]

const store = createStore(
    CommonReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
