import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';
import searchReducer, { initialState as searchInitState } from './reducers/searchReducer';
import historyReducer, { initialState as historyInitState } from './reducers/historyReducer';
import loaderReducer, { initialState as loaderInitState } from './reducers/loaderReducer';
import { initializeFromUrl } from './gitQueryFunctions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
// import reportWebVitals from './reportWebVitals';

const reducers = {
  search: searchReducer,
  history: historyReducer,
  loader: loaderReducer,
  form: formReducer
}

const reducer = combineReducers(reducers);

export const initForm = {
  searchValue: '',
  user: '',
  org: '',
  lang: '',
  topic: '',
  name: true,
  description: false,
  readme: false,
  starCheck: 'greater',
  starsNumber: '',
  sizeCheck: 'greater',
  sizeNumber: ''
};

const urlInitializedForm = initializeFromUrl(initForm);

const store = createStore(reducer, {
  search: searchInitState,
  history: historyInitState,
  loader: loaderInitState,
  form: {
    /**
     * Search form initial state here,
     * as it has its own reducer.
     */
    simpleSearch: {...urlInitializedForm}
  }
}, composeWithDevTools(applyMiddleware(thunk))
);

render(<Provider store={store}>
  <App />
</Provider>
  , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(// console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
