import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uiChangeTitle ,uiChangeTabBar} from '../../actions/ui';
import FacTab from './FacTab'

@connect(null, { uiChangeTitle,uiChangeTabBar })
export default class Factory extends Component {
  componentDidMount() {
    this.props.uiChangeTitle("手工特训营")
    this.props.uiChangeTabBar(true)
  }
  render() {
    return (
      <FacTab/> 
    )
  }
}
