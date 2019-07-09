import React from 'react'
import PropTypes from 'prop-types'
import ReactSlidy from 'react-slidy'
import {Video, Video3d, Video360} from './mediaItems'
import AtomImage from '@s-ui/react-atom-image'

const BASE_CLASS = 'sui-OrganismMediaGallery'

const isAcceptedMediaItem = (
  propValue,
  key,
  componentName,
  location,
  propFullName
) => {
  return (
    propValue instanceof AtomImage ||
    propValue instanceof Video ||
    propValue instanceof Video3d ||
    propValue instanceof Video360
  )
}

function OrganismMediaGallery(props) {
  const {children} = props
  return (
    <div className={BASE_CLASS}>
      <ReactSlidy keyboardNavigation>{children}</ReactSlidy>
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
  children: PropTypes.arrayOf(isAcceptedMediaItem)
}

OrganismMediaGallery.defaultProps = {
  inMoleculeModal: false
}

export default OrganismMediaGallery
