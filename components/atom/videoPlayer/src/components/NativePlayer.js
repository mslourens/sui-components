import {useRef} from 'react'

import PropTypes from 'prop-types'

import useGetBlobAsVideoSrcEffect from '../hooks/useGetBlobAsVideoSrcEffect.js'

const NativePlayer = ({src}) => {
  const videoNode = useRef(null)
  const videoSrc = useGetBlobAsVideoSrcEffect({src, videoNode})

  return (
    <video ref={videoNode} title="Native video player" controls>
      {videoSrc !== null && <source data-testid="videosrc" src={videoSrc} />}
      Your browser does not support the video tag.
    </video>
  )
}

NativePlayer.propTypes = {
  src: PropTypes.string
}

export default NativePlayer
