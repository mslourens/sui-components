import PropTypes from 'prop-types'

function Video360({src, title, ...videoProps}) {
  return <iframe src={src} title={title} {...videoProps} />
}

Video360.propTypes = {
  /**
   * Video source
   */
  src: PropTypes.string.isRequired,
  /**
   * Video title
   */
  title: PropTypes.string
}

export default Video360
