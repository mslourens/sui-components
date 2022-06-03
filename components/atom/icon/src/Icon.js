import PropTypes from 'prop-types'

import Poly from '@s-ui/react-primitive-polymorphic-element'

import {IMG_ROLE} from './settings.js'

export default function AtomIcon({className, children, outerRef, title}) {
  const a11yAttributes = title
    ? {
        role: IMG_ROLE,
        ariaLabel: title
      }
    : {}

  return (
    <Poly
      className={className}
      title={title}
      ref={outerRef}
      {...a11yAttributes}
    >
      {children}
    </Poly>
  )
}

AtomIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
  outerRef: PropTypes.func,
  title: PropTypes.string
}
