import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uiChangeTitle, uiChangeStyle } from '../../actions/ui';
import {Carousel} from '../../containers';
import { FindTitel, FindOption, FindContent} from '../../components';

import './find.less';


@connect(null, { uiChangeTitle,uiChangeStyle })
export default class Factory extends Component {
  componentDidMount() {
    this.props.uiChangeStyle({
      title: '发现',
      isShowBack: false,
      isTabBarShow: true
    })
  }
  render() {
    return (
      <div>
        <Carousel />
        <FindTitel />
        <FindOption />
        <FindContent />
      </div>
    )
  }
}
