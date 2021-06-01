import React from 'react';
// import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from '../../shop/redux/store';
import CartApp from '../../shop/CartApp';

export default function Cart() {
  return (
    <div>
      <Provider store={store}>
      <React.StrictMode>
        <CartApp />
      </React.StrictMode>
      </Provider>
      
    </div>
  )
}