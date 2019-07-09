import React from 'react'
// import PropTypes from 'prop-types'
import ReactSlidy from 'react-slidy'

const BASE_CLASS = 'sui-OrganismMediaGallery'

function OrganismMediaGallery(props) {
  return (
    <div className={BASE_CLASS}>
      <ReactSlidy keyboardNavigation>
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
      </ReactSlidy>
    </div>
  )
}

OrganismMediaGallery.displayName = 'OrganismMediaGallery'

// Remove these comments if you need
// OrganismMediaGallery.contextTypes = {i18n: PropTypes.object}
// OrganismMediaGallery.propTypes = {}
// OrganismMediaGallery.defaultProps = {}

export default OrganismMediaGallery
