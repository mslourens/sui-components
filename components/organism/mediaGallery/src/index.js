import React, {useState} from 'react'
import PropTypes from 'prop-types'
import ReactSlidy from 'react-slidy'
import Video from './mediaItems/video'
import Video3d from './mediaItems/video3d'
import Video360 from './mediaItems/video360'
import Image from './mediaItems/image'

const BASE_CLASS = 'sui-OrganismMediaGallery'
const MEDIA_TYPE = {
  IMAGE: 'image',
  VIDEO: 'video',
  VIDEO3D: 'video3d',
  VIDEO360: 'video360'
}

function OrganismMediaGallery({children}) {
  children = React.Children.toArray(children)
  const images = children.filter(child => child.type === Image)
  const videos = children.filter(child => child.type === Video)
  const videos3d = children.filter(child => child.type === Video3d)
  const videos360 = children.filter(child => child.type === Video360)
  const getFirstAvailableMediaType = () => {
    if (images.length > 0) return MEDIA_TYPE.IMAGE
    else if (videos.length > 0) return MEDIA_TYPE.VIDEO
    else if (videos3d.length > 0) return MEDIA_TYPE.VIDEO
    else if (videos360.length > 0) return MEDIA_TYPE.VIDEO
  }
  const [activeMedia, setActiveMedia] = useState(getFirstAvailableMediaType())

  const getActiveMedia = () => {
    switch (activeMedia) {
      case MEDIA_TYPE.IMAGE:
        return <ReactSlidy keyboardNavigation>{images}</ReactSlidy>
      case MEDIA_TYPE.VIDEO:
        return <React.Fragment>{videos}</React.Fragment>
      case MEDIA_TYPE.VIDEO3D:
        return <React.Fragment>{videos3d}</React.Fragment>
      case MEDIA_TYPE.VIDEO360:
        return <React.Fragment>{videos360}</React.Fragment>
      default:
        return null
    }
  }
  return (
    <div className={BASE_CLASS}>
      {getActiveMedia()}
      <button onClick={() => setActiveMedia(MEDIA_TYPE.VIDEO)}>Video!</button>
    </div>
  )
}

OrganismMediaGallery.displayName = 'OrganismMediaGallery'

OrganismMediaGallery.propTypes = {
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

export default OrganismMediaGallery
