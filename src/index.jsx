// eslint-disable-next-line import/no-extraneous-dependencies
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import '../style/styles.css';
import App from './Components/App';
import reducers from './Reducers';

/* eslint-disable no-underscore-dangle */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(promise, ReduxThunk));

const store = createStore(reducers, enhancer);
/* eslint-enable */

const rootEl = document.getElementById('root');
const render = Component =>
// eslint-disable-next-line react/no-render-return-value
ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
      <Component />
    </AppContainer>
  </Provider>,
  rootEl);

render(App);
if (module.hot) module.hot.accept('./Components/App', () => render(App));
