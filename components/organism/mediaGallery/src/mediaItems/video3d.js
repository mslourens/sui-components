import React from 'react'
import PropTypes from 'prop-types'

function video3d(props) {
  const {src, ...videoProps} = props
  return <iframe src={src} {...videoProps} />
}

video3d.propTypes = {
  /**
   * Video source
   */
  src: PropTypes.string.isRequired
}

video3d.propTypes.default = {
  inIframe: false
}

export default video3d
