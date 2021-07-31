import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux"
import {store,persistor} from "./redux/store"
import { PersistGate } from "redux-persist/integration/react"
<link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap" rel="stylesheet"></link>

ReactDOM.render(
  <Provider store={store}>
<BrowserRouter> 
<PersistGate persistor={persistor}>
   <App /></PersistGate>
</BrowserRouter></Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
