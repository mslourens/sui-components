import React from 'react'
import PropTypes from 'prop-types'
import AtomImage from '@s-ui/react-atom-image'

function image(props) {
  const {src, ...imageProps} = props
  return <AtomImage src={src} {...imageProps} />
}

image.propTypes = {
  /**
   * Image source
   */
  src: PropTypes.string.isRequired,
  /**
   * Aternative text
   */
  alt: PropTypes.string.isRequired
}

export default image
