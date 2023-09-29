export const FLAG_SIZE = 24

export const phoneValidationType = {
  DEFAULT: 'default',
  SPLITTED: 'splitted'
}

// This icons comes from an external library:
// https://www.npmjs.com/package/country-flag-icons
// You can easily check here all the flags that provides it:
// https://purecatamphetamine.github.io/country-flag-icons/3x2/index.html
export const PREFIXES = [
  {
    value: 'ES',
    label: 'España',
    countryCode: '+34',
    landlinePrefixs: ['9'],
    flag: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg',
    mask: {
      mobileMask: '000 000 000',
      landlineMask: '00 000 00 00'
    }
  },
  {
    value: 'FR',
    label: 'Francia',
    countryCode: '+33',
    landlinePrefixs: ['1', '2', '3', '4', '5'],
    flag: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg',
    mask: {
      mobileMask: '0 00 00 00 00',
      landlineMask: '0 00 00 00 00'
    }
  },
  {
    value: 'PT',
    label: 'Portugal',
    countryCode: '+351',
    landlinePrefixs: ['2'],
    flag: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/PT.svg',
    mask: {
      mobileMask: '0 0000 0000',
      landlineMask: '00 000 0000'
    }
  },
  {
    value: 'AD',
    label: 'Andorra',
    countryCode: '+376',
    landlinePrefixs: ['8'],
    flag: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/AD.svg',
    mask: {
      mobileMask: '000 000',
      landlineMask: '000 000'
    }
  }
]
