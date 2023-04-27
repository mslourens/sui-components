/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import {
  HLS_DEFAULT_TITLE,
  NATIVE_DEFAULT_TITLE,
  VIMEO_DEFAULT_TITLE,
  YOUTUBE_DEFAULT_TITLE
} from '../src/settings/index.js'

chai.use(chaiDOM)

describe('AtomVideoPlayer', () => {
  const setup = setupEnvironment(AtomVideoPlayer)

  it('should render without crashing', () => {
    // Given
    const props = {src: ''}

    // When
    const component = <AtomVideoPlayer {...props} />

    // Then
    const div = document.createElement('div')
    ReactDOM.render(component, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should NOT render null', () => {
    // Given
    const props = {src: ''}

    // When
    const {container} = setup(props)

    // Then
    expect(container.innerHTML).to.be.a('string')
    expect(container.innerHTML).to.not.have.lengthOf(0)
  })

  describe('Error cases', () => {
    it('should display "Not supported media type" when a unknown video provier is received', () => {
      // Given
      const props = {
        src: 'https://random.and.invalid.video.com/hello-world-video'
      }

      // When
      const component = setup(props)

      // Then
      component.getByText('Not supported media type')
    })
  })

  describe('Adaptative streaming player', () => {
    it('should open adaptative streaming videos by using hls.js', () => {
      // Given
      const props = {
        src: 'https://media-frontend.yams-pro.mpi-internal.com/api/v1/yams-frontend/statics/vo/surf.mp4/hls.m3u8'
      }

      // When
      const component = setup(props)

      // Then
      component.getByTitle(HLS_DEFAULT_TITLE)
    })

    it('should display controls by default', () => {
      // Given
      const props = {
        src: 'https://media-frontend.yams-pro.mpi-internal.com/api/v1/yams-frontend/statics/vo/surf.mp4/hls.m3u8'
      }

      // When
      const component = setup(props)

      // Then
      expect(component.getByTitle(HLS_DEFAULT_TITLE).controls).to.eql(true)
    })

    it('should avoid displaying controls if controls prop is set to false', () => {
      // Given
      const props = {
        controls: false,
        src: 'https://media-frontend.yams-pro.mpi-internal.com/api/v1/yams-frontend/statics/vo/surf.mp4/hls.m3u8'
      }

      // When
      const component = setup(props)

      // Then
      expect(component.getByTitle(HLS_DEFAULT_TITLE).controls).to.eql(false)
    })
  })

  describe('Native video player', () => {
    it('should try to play the video using the native player if it is a remote file with a known extension', () => {
      // Given
      const props = {
        src: 'https://cdn.coverr.co/videos/coverr-boat-in-the-sea-5656/1080p.mp4'
      }

      // When
      const component = setup(props)

      // Then
      component.getByTitle(NATIVE_DEFAULT_TITLE)
    })

    it('should try to play the video using the native player when receiving a blob object as src', async () => {
      // Given
      const props = {
        src: new File(['fakeVideo'], 'hello.mp4', {type: 'video/mp4'})
      }

      // When
      const component = setup(props)

      // Then
      const {src} = await component.findByTestId('videosrc')
      expect(src).to.eql('data:video/mp4;base64,ZmFrZVZpZGVv')
    })

    it('should display controls by default', () => {
      // Given
      const props = {
        src: 'https://cdn.coverr.co/videos/coverr-boat-in-the-sea-5656/1080p.mp4'
      }

      // When
      const component = setup(props)

      // Then
      expect(component.getByTitle(NATIVE_DEFAULT_TITLE).controls).to.eql(true)
    })

    it('should avoid displaying controls if controls prop is set to false', () => {
      // Given
      const props = {
        controls: false,
        src: 'https://cdn.coverr.co/videos/coverr-boat-in-the-sea-5656/1080p.mp4'
      }

      // When
      const component = setup(props)

      // Then
      expect(component.getByTitle(NATIVE_DEFAULT_TITLE).controls).to.eql(false)
    })
  })

  describe('YouTube Videos', () => {
    it('should embed the youtube video player if src is a youtube video', () => {
      // Given
      const props = {
        src: 'https://www.youtube.com/embed/1gI_HGDgG7c'
      }

      // When
      const component = setup(props)

      // Then
      component.getByTitle(YOUTUBE_DEFAULT_TITLE)
    })

    it('should convert standard youtube urls to embedable urls', () => {
      // Given
      const props = {
        src: 'https://www.youtube.com/watch?v=1gI_HGDgG7c'
      }

      // When
      const component = setup(props)

      // Then
      const iframeNode = component.getByTitle(YOUTUBE_DEFAULT_TITLE)
      // check that the iframe src is the embedable url
      expect(iframeNode.src).to.equal(
        'https://www.youtube.com/embed/1gI_HGDgG7c'
      )
    })

    it('should convert shared videos urls to embedable urls', () => {
      // Given
      const props = {
        src: 'https://youtu.be/1gI_HGDgG7c'
      }

      // When
      const component = setup(props)

      // Then
      const iframeNode = component.getByTitle(YOUTUBE_DEFAULT_TITLE)
      // check that the iframe src is the embedable url
      expect(iframeNode.src).to.equal(
        'https://www.youtube.com/embed/1gI_HGDgG7c'
      )
    })

    it('should avoid displaying controls if controls prop is set to false', () => {
      // Given
      const props = {
        controls: false,
        src: 'https://www.youtube.com/embed/1gI_HGDgG7c'
      }

      // When
      const component = setup(props)

      // Then
      const iframeNode = component.getByTitle(YOUTUBE_DEFAULT_TITLE)
      // check that the iframe src is the embedable url
      expect(iframeNode.src).to.include('controls=0')
    })
  })

  describe('VIMEO Videos', () => {
    it('should embed the vimeo video player if src is a vimeo video', () => {
      // Given
      const props = {
        src: 'https://vimeo.com/54289199'
      }

      // When
      const component = setup(props)

      // Then
      component.getByTitle(VIMEO_DEFAULT_TITLE)
    })

    it('should convert standard vimeo url to an embeddable url', () => {
      // Given
      const props = {
        src: 'https://vimeo.com/54289199'
      }

      // When
      const component = setup(props)

      // Then
      const iframeNode = component.getByTitle(VIMEO_DEFAULT_TITLE)
      // check that the iframe src is the embedable url
      expect(iframeNode.src).to.include(
        'https://player.vimeo.com/video/54289199'
      )
    })

    it('should avoid displaying controls if controls prop is set to false', () => {
      // Given
      const props = {
        controls: false,
        src: 'https://vimeo.com/54289199'
      }

      // When
      const component = setup(props)

      // Then
      const iframeNode = component.getByTitle(VIMEO_DEFAULT_TITLE)
      // check that the iframe src is the embedable url
      expect(iframeNode.src).to.include('controls=0')
    })
  })
})
