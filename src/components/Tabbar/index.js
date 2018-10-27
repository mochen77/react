import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import Icon from '../Icon';
import './tabbar.less';

const mapStateToProps = ( {ui} ) => {
  const {
    isTabBarShow
  } = ui;
  return {
    isTabBarShow
  }
}

@withRouter
@connect(mapStateToProps)
export default class Tabbar extends Component {
  render() {
    return (
      <div className="hydra-tabbar" style={{display:this.props.isTabBarShow ? 'flex':'none'}}>
      
      {
          this.props.routes.map(route => {
            return (
              <NavLink to={route.path} key={route.path}>
                <span className="hydra-tabbar-icon">
                  <Icon
                    type={this.props.location.pathname.indexOf(route.path) !== -1 ? route.activeIcon : route.icon}
                    style={{fontSize: '24px'}}
                  />
                </span>
                <span className="hydra-tabbar-text">{route.text}</span>
              </NavLink>
            )
          })
        }
      </div>
    )
  }
}