import PropTypes from 'prop-types'

function Video({src, title, inIframe, ...videoProps}) {
  return inIframe ? (
    <iframe src={src} title={title} {...videoProps} />
  ) : (
    <video controls src={src} title={title} {...videoProps} />
  )
}

Video.propTypes = {
  /**
   * Video source
   */
  src: PropTypes.string.isRequired,
  /**
   * True/false to force iframe video
   */
  inIframe: PropTypes.bool,
  /**
   * Video title
   */
  title: PropTypes.string
}

Video.defaultProps = {
  inIframe: false
}

export default Video
