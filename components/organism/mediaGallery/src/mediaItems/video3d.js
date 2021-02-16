import PropTypes from 'prop-types'

function Video3d({src, title, ...videoProps}) {
  return <iframe src={src} title={title} {...videoProps} />
}

Video3d.propTypes = {
  /**
   * Video source
   */
  src: PropTypes.string.isRequired,
  /**
   * Video title
   */
  title: PropTypes.string
}

export default Video3d
