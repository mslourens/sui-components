import {useEffect} from 'react'

import Hls from 'hls.js'

const useInitHlsEffect = ({
  autoPlay,
  hlsConfig,
  playerRef,
  src,
  timeOffset
}) => {
  useEffect(() => {
    let hls

    const startOffsetConfig = timeOffset
      ? {
          startPosition: timeOffset
        }
      : {}

    function _initPlayer() {
      if (hls !== undefined) {
        hls.destroy()
      }

      const newHls = new Hls({
        enableWorker: false,
        ...hlsConfig,
        ...startOffsetConfig
      })

      if (playerRef.current !== null) {
        newHls.attachMedia(playerRef.current)
      }

      newHls.on(Hls.Events.MEDIA_ATTACHED, () => {
        newHls.loadSource(`${src}`)

        newHls.on(Hls.Events.MANIFEST_PARSED, () => {
          if (autoPlay) {
            /* eslint-disable no-console */
            playerRef?.current
              ?.play()
              .catch(() =>
                console.log(
                  'Unable to autoplay prior to user interaction with the dom.'
                )
              )
          }
        })
      })

      newHls.on(Hls.Events.ERROR, function (event, data) {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              newHls.startLoad()
              break
            case Hls.ErrorTypes.MEDIA_ERROR:
              newHls.recoverMediaError()
              break
            default:
              _initPlayer()
              break
          }
        }
      })

      hls = newHls
    }

    // Check for Media Source support
    if (Hls.isSupported()) {
      _initPlayer()
    }

    return () => {
      if (hls !== undefined) {
        hls.destroy()
      }
    }
  }, [autoPlay, hlsConfig, playerRef, src, timeOffset])
}

export default useInitHlsEffect
