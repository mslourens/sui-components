import React from 'react'
import PropTypes from 'prop-types'

function video360(props) {
  const {src, ...videoProps} = props
  return <iframe src={src} {...videoProps} />
}

video360.propTypes = {
  /**
   * Video source
   */
  src: PropTypes.string.isRequired
}

export default video360
