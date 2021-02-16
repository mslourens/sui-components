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
  Video360,
  Image
} from '../../../components/organism/mediaGallery/src/index'

chai.use(chaiDOM)

const imageElement = () => (
  <Image
    src="https://avatars2.githubusercontent.com/u/13288987?s=200&v=4"
    alt="Image"
  />
)

const videoElement = () => (
  <Video
    src="https://www.youtube.com/embed/Q5mgQsmKtDQ"
    inIframe
    title="Video title"
  />
)

const video3DElement = () => (
  <Video3d
    src="https://my.matterport.com/show/?m=6yDd8eDbNHC"
    title="Video3D"
  />
)

const video360Element = () => (
  <Video360
    src="https://my.matterport.com/show/?m=6yDd8eDbNHC"
    title="Video360"
  />
)

describe('Organism Media Gallery', () => {
  const Component = OrganismMediaGallery
  const defaultProps = {
    imageTitle: 'Imagen',
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

  it('should show media buttons from the media types given', () => {
    // Given
    const props = {...defaultProps}

    // When
    render(
      <Component {...props}>
        {imageElement()}
        {videoElement()}
        {video3DElement()}
      </Component>
    )

    // Then
    const imageButton = screen.getByRole('button', {name: 'Imagen'})
    const videoButton = screen.getByRole('button', {name: 'Vídeo'})
    const video3DButton = screen.getByRole('button', {name: 'Vídeo 3D'})
    expect(imageButton).to.exist
    expect(videoButton).to.exist
    expect(video3DButton).to.exist
    expect(screen.queryByRole('button', {name: 'Vídeo 360'})).not.to.exist
  })

  it('should change media type when user clicks button', () => {
    // Given
    const props = {...defaultProps}

    // When
    render(
      <Component {...props}>
        {imageElement()}
        {videoElement()}
        {video3DElement()}
        {video360Element()}
      </Component>
    )

    // Then
    const videoButton = screen.getByRole('button', {name: 'Vídeo'})
    userEvent.click(videoButton)
    expect(screen.getByTitle('Video title'))
  })

  it('should hide media buttons when just one media type given', () => {
    // Given
    const props = {...defaultProps}

    // When
    render(<Component {...props}>{imageElement()}</Component>)

    // Then
    expect(screen.queryByText('Vídeo')).not.to.exist
  })

  it('should show fullwidth button when activated', () => {
    // Given
    const props = {}

    // When
    const component = <Component {...props} />

    // Then
    const div = document.createElement('div')
    ReactDOM.render(component, div)
    ReactDOM.unmountComponentAtNode(div)
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
