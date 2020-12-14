import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from 'react-redux';
import {applyMiddleware,createStore} from 'redux';
// With a plain basic Redux store you can only do simple synchronous updates by dispatching an action
import thunk from 'redux-thunk';
import rootReducer from './reducers';
//dev tools
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import './App.css'
// dhia test
// creation our store 
const store=createStore(
  
  rootReducer ,composeWithDevTools(applyMiddleware(thunk,logger))
)
ReactDOM.render(
  <Provider store={store} >
<App />
</Provider>,
 document.getElementById("root")
);
