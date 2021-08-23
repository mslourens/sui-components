import PropTypes from 'prop-types'
import {Article, H2, Paragraph, RadioButton} from '@s-ui/documentation-library'
import PinInput from '../src/PinInput'
import {useState} from 'react'

const ArticleDisabled = ({className}) => {
  const [code, setCode] = useState('725412')
  const [disabled, setDisabled] = useState(true)

  const onChangeHandler = (event, args) => {
    setCode(args.value)
  }

  return (
    <Article className={className}>
      <H2>Disabled</H2>
      <Paragraph>
        By setting the prop disabled to true we can disable the pinInput.
      </Paragraph>
      <RadioButton
        value={disabled}
        label="disabled"
        checked={disabled}
        onClick={() => setDisabled(!disabled)}
      />
      <br />
      <br />
      <PinInput
        status="undefined"
        onChange={onChangeHandler}
        defaultValue={code}
        disabled={disabled}
      />
      <br />
    </Article>
  )
}

ArticleDisabled.propTypes = {
  className: PropTypes.string
}

export default ArticleDisabled
