import {createStore, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";
import reducers from "./reducers"

const enhancers =  compose;



export default createStore(reducers, enhancers(applyMiddleware(thunk)));

