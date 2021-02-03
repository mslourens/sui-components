/* eslint-disable no-console */
import './index.scss'

import OrganismMediaGallery from '../../../../components/organism/mediaGallery/src'
import Video from '../../../../components/organism/mediaGallery/src/mediaItems/video'
import Video3d from '../../../../components/organism/mediaGallery/src/mediaItems/video3d'
import Image from '../../../../components/organism/mediaGallery/src/mediaItems/image'
import AtomCard from '../../../../components/atom/card/src'

const BASE_CLASS_DEMO = 'DemoOrganismMediaGallery'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

const MediaGallery = () => (
  <div>
    <OrganismMediaGallery>
      <Image
        src="https://avatars2.githubusercontent.com/u/13288987?s=200&v=4"
        alt="Image"
      />
      <Image
        src="https://avatars2.githubusercontent.com/u/13288987?s=200&v=4"
        alt="Image"
      />
      <Video src="https://www.youtube.com/embed/Q5mgQsmKtDQ" inIframe />
      <Video3d src="https://my.matterport.com/show/?m=6yDd8eDbNHC&brand=0&brand=0&amp;mls=1&amp;title=0&amp;tourcta=0&amp;play=1&amp;lang=es" />
    </OrganismMediaGallery>
  </div>
)

const Demo = () => (
  <div className={BASE_CLASS_DEMO}>
    <h1>
      <code>Organism Media Gallery</code>
    </h1>
    <div className={CLASS_DEMO_SECTION}>
      <h4>Basic </h4>
      <AtomCard media={MediaGallery} content={() => <p>Card title</p>} />
      <OrganismMediaGallery>
        <Video src="https://www.youtube.com/embed/Q5mgQsmKtDQ" inIframe />
      </OrganismMediaGallery>
    </div>
  </div>
)

export default Demo
