import {applyMiddleware, createStore} from "redux";
import rootReducers from '../reducers/index';
import thunk from "redux-thunk";

const initialState = {}
const middleware = [thunk]
const store = createStore(rootReducers,initialState, applyMiddleware(...middleware))

export default store;