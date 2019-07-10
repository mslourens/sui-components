/* eslint-disable no-console */

import React from 'react'
import './index.scss'

import OrganismMediaGallery from '../../../../components/organism/mediaGallery/src'
import Video from '../../../../components/organism/mediaGallery/src/mediaItems/video'
import Image from '../../../../components/organism/mediaGallery/src/mediaItems/image'

const BASE_CLASS_DEMO = 'DemoOrganismMediaGallery'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => (
  <div className={BASE_CLASS_DEMO}>
    <h1>
      <code>Organism Media Gallery</code>
    </h1>
    <div className={CLASS_DEMO_SECTION}>
      <h4>Basic</h4>
      <OrganismMediaGallery>
        <Image
          src="https://avatars2.githubusercontent.com/u/13288987?s=200&v=4"
          alt="Image"
        />
        <Video src="https://www.youtube.com/embed/Q5mgQsmKtDQ" inIframe />
      </OrganismMediaGallery>
    </div>
  </div>
)

export default Demo
