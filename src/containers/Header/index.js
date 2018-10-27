import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavBar, Icon } from 'antd-mobile';
import { withRouter } from 'react-router-dom'





const mapStateToProps = ( {ui} ) => {
  const {
    title,
    isShowBack
  } = ui;
  return {
    title,
    isShowBack
  }
}

@withRouter
@connect(mapStateToProps)
export default class index extends Component {
  render() {
    return (
        <div className="lion-header">
        <NavBar
            mode="light"
            // icon={this.props.isShowBack ? <Icon type="left" onClick={()=>{
            //  window.history.back()
            // }} /> : ''}
            onLeftClick={() => {
              this.props.history.goBack()
            }}
            icon={this.props.isShowBack ? <Icon type="left" /> : ''}
            // onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
            ]}
        >{this.props.title}</NavBar>
      </div>
    )
  }
}
