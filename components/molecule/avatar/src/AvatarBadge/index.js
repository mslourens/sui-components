import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

export const AVATAR_BADGE_STATUSES = {
  ERROR: 'error',
  SUCCESS: 'success'
}

export const AVATAR_BADGE_PLACEMENTS = {
  TOP: 'top',
  BOTTOM: 'bottom'
}

export const AVATAR_BADGE_SIZES = {
  XLARGE: 'xlarge',
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small'
}

export const AVATAR_ANIMATIONS = {
  PULSE: 'pulse'
}

const MoleculeAvatarBadge = ({
  className: classNameProp,
  size,
  animation,
  status = AVATAR_BADGE_STATUSES.ERROR,
  placement = AVATAR_BADGE_PLACEMENTS.BOTTOM,
  ...others
}) => {
  const baseClassName = 'sui-MoleculeAvatarBadge'
  const className = cx(
    baseClassName,
    classNameProp,
    `${baseClassName}--${size}`,
    `${baseClassName}--${status}`,
    `${baseClassName}--${placement}`,
    {
      [`${baseClassName}--pulse`]: animation === AVATAR_ANIMATIONS.pulse
    }
  )

  return <div className={className} {...others} />
}

MoleculeAvatarBadge.displayName = 'MoleculeAvatarBadge'
MoleculeAvatarBadge.propTypes = {
  className: PropTypes.string,
  status: PropTypes.oneOf(Object.values(AVATAR_BADGE_STATUSES)),
  placement: PropTypes.oneOf(Object.values(AVATAR_BADGE_PLACEMENTS)),
  size: PropTypes.oneOf(Object.values(AVATAR_BADGE_SIZES)),
  animation: PropTypes.oneOf(Object.values(AVATAR_ANIMATIONS))
}

export default MoleculeAvatarBadge
