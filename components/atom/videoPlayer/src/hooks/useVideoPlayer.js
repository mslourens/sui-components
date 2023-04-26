import HLSPlayer from '../components/HLSPlayer.js'
import NativePlayer from '../components/NativePlayer.js'
import VimeoPlayer from '../components/VimeoPlayer.js'
import YouTubePlayer from '../components/YouTubePlayer.js'
import {HLS, NATIVE, VIMEO, YOUTUBE} from '../settings.js'
import useDetectVideoType from './useDetectVideoType.js'
const useVideoPlayer = props => {
  const {src} = props
  const {detectVideoType} = useDetectVideoType()
  const videoType = detectVideoType(src)

  switch (videoType) {
    case HLS.VIDEO_TYPE:
      return [HLSPlayer, props]

    case NATIVE.VIDEO_TYPE:
      return [NativePlayer, props]

    case VIMEO.VIDEO_TYPE:
      return [VimeoPlayer, props]

    case YOUTUBE.VIDEO_TYPE:
      return [YouTubePlayer, props]

    default:
      return ['p', {...props, children: 'Not supported media type'}]
  }
}

export default useVideoPlayer
