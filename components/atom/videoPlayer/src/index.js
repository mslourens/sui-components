import {forwardRef} from 'react'

import PropTypes from 'prop-types'

import useVideoPlayer from './hooks/useVideoPlayer.js'
import {BASE_CLASS} from './settings/index.js'

const AtomVideoPlayer = forwardRef(
  ({autoPlay = false, controls = true, offset, src = ''}, forwardedRef) => {
    const [Component, props] = useVideoPlayer({
      autoPlay,
      controls,
      offset,
      src
    })
    return (
      <div ref={forwardedRef} className={BASE_CLASS}>
        <Component {...props} />
      </div>
    )
  }
)

AtomVideoPlayer.displayName = 'AtomVideoPlayer'

AtomVideoPlayer.propTypes = {
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool,
  offset: PropTypes.number,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Blob)])
}

export default AtomVideoPlayer
