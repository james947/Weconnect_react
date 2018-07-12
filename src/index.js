import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import { userLoggedIn } from './redux/actions/user_auth';

// store configuration
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// repopulating redux state
if (localStorage.auth_token) {
  const user = { user: localStorage.auth_token };
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>
  , document.getElementById('root')
);
registerServiceWorker();
