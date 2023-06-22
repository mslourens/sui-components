import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, H2, H3} from '@s-ui/documentation-library'

import MoleculePhoneInput from '../src/index.js'
import {phoneValidationType, PREFIXES} from '../src/settings.js'

export default function ArticleStates({icon}) {
  const [defaultPhone, setDefaultPhone] = useState('')
  const [errorPhone, setErrorPhone] = useState('')

  const onDefaultPhoneChange = (_, {value}) => {
    setDefaultPhone(value)
  }

  const onErrorPhoneChange = (_, {value}) => {
    setErrorPhone(value)
  }

  return (
    <Article>
      <H2>States</H2>
      <H3>Default</H3>
      <MoleculePhoneInput
        value={defaultPhone}
        onChange={onDefaultPhoneChange}
        dropdownIcon={icon}
        placeholder="612 345 678"
        type={phoneValidationType.DEFAULT}
        initialSelectedPrefix={PREFIXES[1]}
        prefixes={PREFIXES}
      />
      <H3>Error</H3>
      <MoleculePhoneInput
        value={errorPhone}
        onChange={onErrorPhoneChange}
        dropdownIcon={icon}
        placeholder="612 345 678"
        type={phoneValidationType.DEFAULT}
        initialSelectedPrefix={PREFIXES[2]}
        prefixes={PREFIXES}
        hasError
      />
      <br />
      <MoleculePhoneInput
        value={errorPhone}
        onChange={onErrorPhoneChange}
        dropdownIcon={icon}
        placeholder="612 345 678"
        type={phoneValidationType.SPLITTED}
        initialSelectedPrefix={PREFIXES[1]}
        prefixes={PREFIXES}
        hasError
      />
    </Article>
  )
}

ArticleStates.propTypes = {
  icon: PropTypes.element
}
