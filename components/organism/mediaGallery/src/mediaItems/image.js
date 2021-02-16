import PropTypes from 'prop-types'
import AtomImage from '@s-ui/react-atom-image'

function Image({src, ...imageProps}) {
  return <AtomImage src={src} {...imageProps} />
}

Image.propTypes = {
  /**
   * Image source
   */
  src: PropTypes.string.isRequired,
  /**
   * Aternative text
   */
  alt: PropTypes.string.isRequired
}

export default Image
