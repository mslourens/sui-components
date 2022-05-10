/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import sinon from 'sinon'
import userEvents from '@testing-library/user-event'

import * as pkg from '../src/index.js'

import json from '../package.json'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = [
      'MoleculeAccordion',
      'MoleculeAccordionItem',
      'MoleculeAccordionItemHeader',
      'MoleculeAccordionItemHeaderIcon',
      'MoleculeAccordionItemPanel',
      'moleculeAccordionBehavior',
      'moleculeAnimationDuration',
      'moleculeAccordionHeaderIconPosition',
      'default'
    ]

    // When
    const {
      MoleculeAccordion,
      MoleculeAccordionItem,
      MoleculeAccordionItemHeader,
      MoleculeAccordionItemHeaderIcon,
      MoleculeAccordionItemPanel,
      moleculeAccordionBehavior,
      moleculeAnimationDuration,
      moleculeAccordionHeaderIconPosition,
      default: MoleculeAccordionDefault,
      ...others
    } = library

    // Then
    expect(Object.keys(library).length).to.equal(libraryExportedMembers.length)
    expect(Object.keys(library)).to.have.members(libraryExportedMembers)
    expect(Object.keys(others).length).to.equal(0)
  })

  describe(Component.displayName, () => {
    it('should render without crashing', () => {
      // Given
      const {MoleculeAccordionItem} = pkg
      const props = {
        children: [
          <MoleculeAccordionItem
            key={0}
            label="label 1"
            value={1}
            header="header 1"
            content="content 1"
          />,
          <MoleculeAccordionItem
            key={1}
            label="label 2"
            value={2}
            header="header 2"
            content="content 2"
          />
        ]
      }

      // When
      const component = <Component {...props} />

      // Then
      const div = document.createElement('div')
      ReactDOM.render(component, div)
      ReactDOM.unmountComponentAtNode(div)
    })

    it('should NOT render null', () => {
      // Given
      const props = {
        children: [
          <MoleculeAccordionItem
            key={0}
            label="label 1"
            value={1}
            header="header 1"
            content="content 1"
          />,
          <MoleculeAccordionItem
            key={1}
            label="label 2"
            value={2}
            header="header 2"
            content="content 2"
          />
        ]
      }

      // When
      const {container} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
    })

    it('should NOT extend classNames', () => {
      // Given
      const props = {
        className: 'extended-classNames',
        children: [
          <MoleculeAccordionItem
            key={0}
            label="label 1"
            value={1}
            header="header 1"
            content="content 1"
          />,
          <MoleculeAccordionItem
            key={1}
            label="label 2"
            value={2}
            header="header 2"
            content="content 2"
          />
        ]
      }
      const findSentence = str => string =>
        string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
    })

    it('should trigger onChange when tab is clicked', () => {
      // Given
      const spy = sinon.spy()
      const props = {
        children: [
          <MoleculeAccordionItem
            key={0}
            label="label 1"
            value={1}
            header="header 1"
            content="content 1"
          />,
          <MoleculeAccordionItem
            key={1}
            label="label 2"
            value={2}
            header="header 2"
            content="content 2"
          />
        ],
        onChange: spy
      }
      const {getByText} = setup(props)

      // When
      const tab = getByText('header 1')
      userEvents.click(tab)

      // Then
      sinon.assert.called(spy)
    })

    it('should show the second and third tab open when set via openedTabs prop', () => {
      // Given
      const spy = sinon.spy()
      const props = {
        children: [
          <MoleculeAccordionItem
            key={0}
            label="label 1"
            value={1}
            header="header 1"
            content="content 1"
          />,
          <MoleculeAccordionItem
            key={1}
            label="label 2"
            value={2}
            header="header 2"
            content="content 2"
          />,
          <MoleculeAccordionItem
            key={2}
            label="label 3"
            value={3}
            header="header 3"
            content="content 3"
          />
        ],
        onChange: spy,
        values: [1, 2]
      }
      const {getAllByRole} = setup(props)

      // When
      const panels = getAllByRole('region')

      // Then
      panels.forEach(panel => {
        if (['content 1', 'content 2'].includes(panel.innerText)) {
          expect(Boolean(panel.hasAttribute('aria-expanded'))).to.be.true
        } else if (['content 3'].includes(panel.innerText)) {
          expect(Boolean(panel.hasAttribute('aria-collapsed'))).to.be.false
        }
        expect(
          ['content 1', 'content 2', 'content 3'].some(
            text => panel.innerText === text
          )
        ).to.be.true
      })
    })
  })

  describe('moleculeAccordionBehavior', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeAccordionBehavior: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        SINGLE: 'single',
        MULTIPLE: 'multiple'
      }

      // When
      const {moleculeAccordionBehavior: actual} = library
      const {SINGLE, MULTIPLE, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('moleculeAnimationDuration', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeAnimationDuration: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        NONE: 0,
        FAST: 100,
        NORMAL: 300,
        SLOW: 500
      }

      // When
      const {moleculeAnimationDuration: actual} = library
      const {NONE, FAST, NORMAL, SLOW, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('moleculeAccordionHeaderIconPosition', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeAccordionHeaderIconPosition: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        LEFT: 'left',
        RIGHT: 'right'
      }

      // When
      const {moleculeAccordionHeaderIconPosition: actual} = library
      const {LEFT, RIGHT, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })
})
