import {forwardRef} from 'react'

import PropTypes from 'prop-types'

import useMount from '@s-ui/react-hooks/lib/useMount'

import {SIZES} from '../config.js'
import Input from '../Input/Component/index.js'
import useMask from './useMask.js'

const MaskInput = forwardRef(
  (
    {
      name,
      onChange,
      onComplete,
      mask,
      value,
      defaultValue,
      size = SIZES.MEDIUM,
      ...props
    },
    forwardedRef
  ) => {
    const {
      ref,
      value: maskedValue,
      setValue
    } = useMask({
      value,
      defaultValue,
      mask,
      onChange,
      onComplete,
      forwardedRef
    })
    useMount(() => {
      setValue(maskedValue)
    })

    return (
      <Input ref={ref} id={name} value={maskedValue} size={size} {...props} />
    )
  }
)

MaskInput.displayName = 'MaskInput'

MaskInput.propTypes = {
  /* The value of the control */
  value: PropTypes.string,
  /* default value of the control */
  defaultValue: PropTypes.string,
  /* mask object, see https://unmanner.github.io/imaskjs/ */
  mask: PropTypes.object.isRequired,
  /* The name of the control */
  name: PropTypes.string,
  /* Event launched on every input change */
  onChange: PropTypes.func,
  /* Event fired every onChange which completes teh mask */
  onComplete: PropTypes.func,
  /* Size of the input */
  size: PropTypes.oneOf(Object.values(SIZES))
}

export default MaskInput
