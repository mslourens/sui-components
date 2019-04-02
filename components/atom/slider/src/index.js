import React, {Component} from 'react'
import PropTypes from 'prop-types'

const BASE_CLASS = `sui-AtomSlider`

class AtomSlider extends Component {
  state = {
    Slider: null
  }

  componentDidMount() {
    require.ensure(
      [],
      require => {
        const Slider = require('rc-slider').default
        this.setState({Slider})
      },
      'rc-slider'
    )
  }

  render() {
    const {Slider} = this.state
    const {min, max, step} = this.props
    return (
      <div className={BASE_CLASS}>
        {Slider && <Slider min={min} max={max} step={step} />}
      </div>
    )
  }
}

AtomSlider.displayName = 'AtomSlider'

// Remove these comments if you need
// AtomSlider.contextTypes = {i18n: PropTypes.object}
AtomSlider.propTypes = {
  /** minimal value in range */
  min: PropTypes.number,

  /** minimal value in range */
  max: PropTypes.number,

  /** steps for range */
  step: PropTypes.number
}
AtomSlider.defaultProps = {
  min: 0,
  max: 100,
  step: 25
}

export default AtomSlider
