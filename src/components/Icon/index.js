import React from 'react';
import PropTypes from 'prop-types';
import './icon.less';
const Icon = (props) => {
  return (
    <i className={`iconfont icon-${props.type}`} style={props.style} />
  )
}
Icon.propTypes = {
  type: PropTypes.oneOf([
    'find-normal',
    'find-active',
    'factory-normal',
    'factory-active',
    'flower-normal',
    'flower-active',
    'mine-normal',
    'mine-active',
  ]).isRequired,
  style: PropTypes.object
}

export default Icon
