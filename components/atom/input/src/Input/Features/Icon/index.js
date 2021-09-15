import PropTypes from 'prop-types'
import cx from 'classnames'

const TYPES = {
  LEFT: 'left',
  RIGHT: 'right'
}

const BASE_CLASS = 'sui-AtomInput'
const CLASS_ICON = `${BASE_CLASS}--withIcon`
const CLASS_ICON_LEFT = `${CLASS_ICON}--${TYPES.LEFT}`
const CLASS_ICON_RIGHT = `${CLASS_ICON}--${TYPES.RIGHT}`
const CLASS_ICON_COMPONENT = `${CLASS_ICON}-icon`
const CLASS_ICON_COMPONENT_HANDLER = `${CLASS_ICON_COMPONENT}--withHandler`
const CLASS_ICON_COMPONENT_LEFT = `${CLASS_ICON_COMPONENT}--${TYPES.LEFT}`
const CLASS_ICON_COMPONENT_RIGHT = `${CLASS_ICON_COMPONENT}--${TYPES.RIGHT}`

const withIcons = WrappedInput => {
  const Icon = ({
    leftIcon,
    rightIcon,
    onClickLeftIcon,
    onClickRightIcon,
    ...props
  }) => {
    const handleLeftClick = e => {
      onClickLeftIcon && onClickLeftIcon(e)
    }

    const handleRightClick = e => {
      onClickRightIcon && onClickRightIcon(e)
    }

    return leftIcon || rightIcon ? (
      <div
        className={cx(CLASS_ICON, {
          [CLASS_ICON_LEFT]: leftIcon,
          [CLASS_ICON_RIGHT]: rightIcon
        })}
      >
        {leftIcon && (
          <span
            className={cx(CLASS_ICON_COMPONENT, CLASS_ICON_COMPONENT_LEFT, {
              [CLASS_ICON_COMPONENT_HANDLER]: onClickLeftIcon
            })}
            onClick={handleLeftClick}
          >
            {leftIcon}
          </span>
        )}
        <WrappedInput {...props} />
        {rightIcon && (
          <span
            className={cx(CLASS_ICON_COMPONENT, CLASS_ICON_COMPONENT_RIGHT, {
              [CLASS_ICON_COMPONENT_HANDLER]: onClickRightIcon
            })}
            onClick={handleRightClick}
          >
            {rightIcon}
          </span>
        )}
      </div>
    ) : (
      <WrappedInput {...props} />
    )
  }

  Icon.propTypes = {
    /* Left icon component */
    leftIcon: PropTypes.node,

    /* Left icon component */
    rightIcon: PropTypes.node,

    /* Left icon click callback */
    onClickLeftIcon: PropTypes.func,

    /* Right icon click callback */
    onClickRightIcon: PropTypes.func
  }

  return Icon
}

export default withIcons
