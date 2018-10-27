import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  Tabbar
} from './components';
import {
  Header
} from './containers';

import routes from './routes';

const mapState = ({ui}) => {
  return {
    isShowTabbar: !ui.isShowBack
  }
}

@connect(mapState)
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="hydra-main">
          <Switch>
            {
              routes.map(route => {
                return (
                  <Route
                    component={route.component}
                    path={route.path}
                    key={route.path}
                  />
                )
              })
            }
            <Redirect to="/find" />
          </Switch>
        </div>
        {/* <Tabbar
          routes={routes.filter( route => {
            return route.isShowTabbar;
           })} */}
        {
          this.props.isShowTabbar && <Tabbar
          routes={routes.filter(route => route.isTabbarItem === true)}
        />
        }
      </Fragment>
    )
  }
}
