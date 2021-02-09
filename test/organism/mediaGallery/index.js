/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

// import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ReactDOM from 'react-dom'
import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import {
  Video,
  Video3d,
  Image
} from '../../../components/organism/mediaGallery/src/index'

chai.use(chaiDOM)

describe('Organism Media Gallery', () => {
  const Component = OrganismMediaGallery
  const defaultProps = {
    imageTitle: 'Image',
    videoTitle: 'Vídeo',
    video3dTitle: 'Vídeo 3D',
    video360Title: 'Vídeo 360'
  }
  it('should render without crashing', () => {
    // Given
    const props = {...defaultProps}

    // When
    const component = <Component {...props} />

    // Then
    const div = document.createElement('div')
    ReactDOM.render(component, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should be able to click media buttons when different media types given', () => {
    // Given
    render(
      <Component {...defaultProps}>
        <Image
          src="https://avatars2.githubusercontent.com/u/13288987?s=200&v=4"
          alt="Image"
        />
        <Image
          src="https://avatars2.githubusercontent.com/u/13288987?s=200&v=4"
          alt="Image"
        />
        <Video src="https://www.youtube.com/embed/Q5mgQsmKtDQ" inIframe />
        <Video3d src="https://my.matterport.com/show/?m=6yDd8eDbNHC" />
      </Component>
    )

    // Then
    userEvent.click(screen.getByText('Vídeo 3D'))
  })

  it('should hide media buttons when just one media type given', () => {
    // Given
    render(
      <Component {...defaultProps}>
        <Image
          src="https://avatars2.githubusercontent.com/u/13288987?s=200&v=4"
          alt="Image"
        />
      </Component>
    )

    // Then
    const videoButton = screen.queryByText('Vídeo')
    expect(videoButton).to.equal(null)
  })

  it('should open fullwidth when user press button', () => {
    // Given
    const props = {}

    // When
    const component = <Component {...props} />

    // Then
    const div = document.createElement('div')
    ReactDOM.render(component, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should show thumbnails', () => {
    // Given
    const props = {}

    // When
    const component = <Component {...props} />

    // Then
    const div = document.createElement('div')
    ReactDOM.render(component, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should change image when click on thumbnail', () => {
    // Given
    const props = {}

    // When
    const component = <Component {...props} />

    // Then
    const div = document.createElement('div')
    ReactDOM.render(component, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should show a counter when swipping images', () => {
    // Given
    const props = {}

    // When
    const component = <Component {...props} />

    // Then
    const div = document.createElement('div')
    ReactDOM.render(component, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
