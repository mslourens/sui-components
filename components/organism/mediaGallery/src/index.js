import {useState, Children} from 'react'
import PropTypes from 'prop-types'
import ReactSlidy from 'react-slidy'
import Video from './mediaItems/video'
import Video3d from './mediaItems/video3d'
import Video360 from './mediaItems/video360'
import Image from './mediaItems/image'
import AtomButton from '@s-ui/react-atom-button'
import MoleculeButtonGroup from '@s-ui/react-molecule-button-group'

const BASE_CLASS = 'sui-OrganismMediaGallery'
const MEDIA_TYPE = {
  IMAGE: 'image',
  VIDEO: 'video',
  VIDEO3D: 'video3d',
  VIDEO360: 'video360'
}

function OrganismMediaGallery({
  children,
  imageTitle,
  initialIndex = 0,
  initialMediaType,
  lite = false,
  thumbnails = false,
  fullWidth = false,
  videoTitle,
  video3dTitle,
  video360Title
}) {
  children = Children.toArray(children)
  const images = children.filter(child => child.type === Image)
  const videos = children.filter(child => child.type === Video)
  const videos3d = children.filter(child => child.type === Video3d)
  const videos360 = children.filter(child => child.type === Video360)
  const showMediaTypeBtns =
    (images.length > 0) +
      (videos.length > 0) +
      (videos3d.length > 0) +
      (videos360.length > 0) >
    1
  const getFirstAvailableMediaType = () => {
    if (initialMediaType) return initialMediaType
    if (images.length > 0) return MEDIA_TYPE.IMAGE
    else if (videos.length > 0) return MEDIA_TYPE.VIDEO
    else if (videos3d.length > 0) return MEDIA_TYPE.VIDEO3D
    else if (videos360.length > 0) return MEDIA_TYPE.VIDEO360
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
      {showMediaTypeBtns && (
        <div className={`${BASE_CLASS}-mediaType`}>
          <MoleculeButtonGroup>
            <AtomButton
              onClick={() => toggleMediaType(MEDIA_TYPE.IMAGE)}
              title={imageTitle}
              design="outline"
              focused={activeMedia === MEDIA_TYPE.IMAGE}
            >
              {imageTitle}
            </AtomButton>
            <AtomButton
              onClick={() => toggleMediaType(MEDIA_TYPE.VIDEO)}
              title={videoTitle}
              design="outline"
              focused={activeMedia === MEDIA_TYPE.VIDEO}
            >
              {videoTitle}
            </AtomButton>
            <AtomButton
              onClick={() => toggleMediaType(MEDIA_TYPE.VIDEO3D)}
              title={video3dTitle}
              design="outline"
              focused={activeMedia === MEDIA_TYPE.VIDEO3D}
            >
              {video3dTitle}
            </AtomButton>
            <AtomButton
              onClick={() => toggleMediaType(MEDIA_TYPE.VIDEO360)}
              title={video360Title}
              design="outline"
              focused={activeMedia === MEDIA_TYPE.VIDEO360}
            >
              {video360Title}
            </AtomButton>
          </MoleculeButtonGroup>
        </div>
      )}
      <div className={`${BASE_CLASS}-media`}>{getActiveMedia()}</div>
      <div className={`${BASE_CLASS}-clue`}>{index}</div>
    </div>
  )
}

OrganismMediaGallery.displayName = 'OrganismMediaGallery'

OrganismMediaGallery.propTypes = {
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
  ]).isRequired,
  /**
   * Image button title
   */
  imageTitle: PropTypes.string.isRequired,
  /**
   * Index number for initial position
   */
  initialIndex: PropTypes.number,
  /**
   * String with initial media type name
   */
  initialMediaType: PropTypes.string,
  /**
   * String with initial media type name
   */
  fullWidth: PropTypes.bool,
  /**
   * String with initial media type name
   */
  lite: PropTypes.bool,
  /**
   * String with initial media type name
   */
  thumbnails: PropTypes.bool,
  /**
   * Video button text
   */
  videoTitle: PropTypes.string.isRequired,
  /**
   * Video 3d button text
   */
  video3dTitle: PropTypes.string.isRequired,
  /**
   * Video 360 button text
   */
  video360Title: PropTypes.string.isRequired
}

export default OrganismMediaGallery

export {Video, Video3d, Video360, Image}
