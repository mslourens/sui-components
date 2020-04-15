import React from 'react'
import PropTypes from 'prop-types'

function Video360(props) {
  const {src, ...videoProps} = props
  return <iframe src={src} {...videoProps} />
}

Video360.propTypes = {
  /**
   * Video source
   */
  src: PropTypes.string.isRequired
}

export default Video360
