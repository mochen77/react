import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.less';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import Login from './pages/Login';

import {CheckAuth} from './containers';

import store from './store';
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Fragment>
      
    <CheckAuth />
    <Switch>
      
      {/* route只能有一个，要多的必须要包上 */}
    <Route component={Login} path="/login"/>
      <Route path="/"/* exact （这个绝对匹配不能要，只有斜线才能返回到app）*/ component={App} />
  
      </Switch>
      </Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
