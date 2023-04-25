import {useState} from 'react'

import AtomVideoPlayer from 'components/atom/videoPlayer/src'

export default () => {
  const [selectedFile, setSelectedFile] = useState('')

  return (
    <>
      <h1>YouTube</h1>
      <AtomVideoPlayer src="https://www.youtube.com/embed/1gI_HGDgG7c" />

      <h1>VIMEO</h1>
      <AtomVideoPlayer src="https://vimeo.com/54289199" />

      <h1>Native from remote url</h1>
      <AtomVideoPlayer src="https://cdn.coverr.co/videos/coverr-boat-in-the-sea-5656/1080p.mp4" />

      <h1>Native from a blob</h1>
      <input
        type="file"
        accept="video/*"
        onChange={e => {
          setSelectedFile(event.target.files[0])
        }}
      />
      <AtomVideoPlayer src={selectedFile} />
    </>
  )
}
