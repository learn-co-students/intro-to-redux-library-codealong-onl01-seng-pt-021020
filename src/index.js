// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* code change */
import { Provider } from 'react-redux'; /* code change */

import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); /* code change */
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> /* code change */,
  document.getElementById('root')
);

//this store value is then passed in as a prop to Provider.

//However, reducing the need for passing props is part of why Redux works well
// with React. To avoid passing store as a prop, we use the Provider component,
// which is imported from react-redux. The Provider component wraps the top level
// component, App, in this case, and is the only component where store is passed in
