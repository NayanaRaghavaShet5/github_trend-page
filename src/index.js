import React from 'react';
import ReactDOM from 'react-dom';
import ManageGithubTrending from './github-trend/components/GithubTrending';
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from '../src/github-trend/redux/reducers/RootReducer';
import { BrowserRouter, HashRouter } from "react-router-dom";

const store = createStore(RootReducer, composeWithDevTools(
  applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <ManageGithubTrending />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

