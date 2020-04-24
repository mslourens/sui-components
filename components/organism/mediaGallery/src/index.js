import React, {useState} from 'react'
import PropTypes from 'prop-types'
import ReactSlidy from 'react-slidy'
import Video from './mediaItems/video'
import Video3d from './mediaItems/video3d'
import Video360 from './mediaItems/video360'
import Image from './mediaItems/image'
import AtomButton from '@s-ui/react-atom-button'

const BASE_CLASS = 'sui-OrganismMediaGallery'
const MEDIA_TYPE = {
  IMAGE: 'image',
  VIDEO: 'video',
  VIDEO3D: 'video3d',
  VIDEO360: 'video360'
}

function OrganismMediaGallery({children, initialIndex, initialMediaType}) {
  children = React.Children.toArray(children)
  const images = children.filter(child => child.type === Image)
  const videos = children.filter(child => child.type === Video)
  const videos3d = children.filter(child => child.type === Video3d)
  const videos360 = children.filter(child => child.type === Video360)
  const getFirstAvailableMediaType = () => {
    if (initialMediaType) return initialMediaType
    if (images.length > 0) return MEDIA_TYPE.IMAGE
    else if (videos.length > 0) return MEDIA_TYPE.VIDEO
    else if (videos3d.length > 0) return MEDIA_TYPE.VIDEO
    else if (videos360.length > 0) return MEDIA_TYPE.VIDEO
  }
  const [activeMedia, setActiveMedia] = useState(getFirstAvailableMediaType())
  const [index, setActualIndex] = useState(initialIndex)

  const getActiveMedia = () => {
    switch (activeMedia) {
      case MEDIA_TYPE.IMAGE:
        return <ReactSlidy keyboardNavigation>{images}</ReactSlidy>
      case MEDIA_TYPE.VIDEO:
        return <>{videos}</>
      case MEDIA_TYPE.VIDEO3D:
        return <>{videos3d}</>
      case MEDIA_TYPE.VIDEO360:
        return <>{videos360}</>
      default:
        return null
    }
  }

  const toggleMediaType = mediaType => {
    setActiveMedia(mediaType)
    setActualIndex(0)
  }

  return (
    <div className={BASE_CLASS}>
      <div className={`${BASE_CLASS}-mediaType`}>
        <AtomButton
          onClick={() => toggleMediaType(MEDIA_TYPE.IMAGE)}
          title="image"
        >
          Image
        </AtomButton>
        <AtomButton
          onClick={() => toggleMediaType(MEDIA_TYPE.VIDEO)}
          title="video"
        >
          Video
        </AtomButton>
        <AtomButton
          onClick={() => toggleMediaType(MEDIA_TYPE.VIDEO3D)}
          title="video 3D"
        >
          Video 3D
        </AtomButton>
      </div>
      <div className={`${BASE_CLASS}-media`}>{getActiveMedia()}</div>
      <div className={`${BASE_CLASS}-clue`}>{index}</div>
    </div>
  )
}

OrganismMediaGallery.displayName = 'OrganismMediaGallery'

OrganismMediaGallery.propTypes = {
  /**
   * Index number for initial position
   */
  initialIndex: PropTypes.number,
  /**
   * String with initial media type name
   */
  initialMediaType: PropTypes.string,
  /**
   * True to insert MediaGallery in a Modal
   */
  inMoleculeModal: PropTypes.bool,
  /**
   * Media Items as children
   */
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([Image, Video, Video360, Video3d])
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([Image, Video, Video360, Video3d])
      })
    )
  ]).isRequired
}

OrganismMediaGallery.defaultProps = {
  initialIndex: 0
}

export default OrganismMediaGallery
