import React from 'react'
import PropTypes from 'prop-types'

function Video3d(props) {
  const {src, ...videoProps} = props
  return <iframe src={src} {...videoProps} />
}

Video3d.propTypes = {
  /**
   * Video source
   */
  src: PropTypes.string.isRequired
}

export default Video3d
