import {useState} from 'react'
import PropTypes from 'prop-types'
import {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'
import {IconStarOutline} from '../Icons'
import cx from 'classnames'

const BASE_CLASS = `sui-MoleculeRating-Star`

const DEFAULTS = {
  IconStarEmpty: IconStarOutline
}

const MoleculeRatingStarHover = ({
  iconStar = DEFAULTS.IconStarEmpty,
  initialRating = 0,
  numStars,
  onClick,
  size
}) => {
  const StarHover = iconStar
  const [ratingValue, setRatingValue] = useState(initialRating)
  const handleClick = (e, {value, isActive}) => {
    if (isActive && value === ratingValue) {
      setRatingValue(0)
      onClick(e, {value: 0})
    } else {
      setRatingValue(value)
      onClick(e, {value})
    }
  }

  const renderStars = () => {
    const stars = []
    for (let value = 1; value < numStars + 1; value++) {
      const isActive = value <= ratingValue
      const className = cx(BASE_CLASS, {
        [`is-active`]: isActive
      })
      stars.push(
        <div
          key={value}
          className={className}
          onClick={e => handleClick(e, {value, isActive})}
        >
          <StarHover size={size} />
        </div>
      )
    }
    return stars
  }

  return <>{renderStars()}</>
}

MoleculeRatingStarHover.displayName = 'MoleculeRatingStarHover'

MoleculeRatingStarHover.propTypes = {
  /** total number of the stars */
  numStars: PropTypes.number,

  /** Icon for star */
  iconStar: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /** init value assigned to rating */
  initialRating: PropTypes.number,

  /** Callback used component hovered */
  onClick: PropTypes.func,

  /** size */
  size: PropTypes.oneOf(Object.values(ATOM_ICON_SIZES))
}

export default MoleculeRatingStarHover
