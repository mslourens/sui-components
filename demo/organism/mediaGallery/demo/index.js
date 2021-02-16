/* eslint-disable react/prop-types, no-unused-vars, no-console */
import {useState} from 'react'
import {
  H1,
  H2,
  H3,
  Text,
  Paragraph,
  Article,
  UnorderedList,
  ListItem,
  Code,
  Grid,
  Cell,
  RadioButton,
  Label
} from '@s-ui/documentation-library'
import OrganismMediaGallery, {
  Image,
  Video,
  Video3d
} from '../../../../components/organism/mediaGallery/src'
import AtomCard from '../../../../components/atom/card/src'

const Container = ({children, card}) =>
  card ? (
    <AtomCard
      media={() => children}
      content={() => (
        <div>
          <H3>content title</H3>
          <Text>content text</Text>
        </div>
      )}
    />
  ) : (
    <section>{children}</section>
  )

const DefaultDemo = () => {
  const [lite, setLite] = useState(true)
  const [fullWidth, setFullWidth] = useState(true)
  const [thumbnails, setThumbnails] = useState(false)
  const [imagesOnly, setImagesOnly] = useState(false)
  const [card, setCard] = useState(true)
  return (
    <Article>
      <H2>Default</H2>
      <Paragraph>
        By default, the component encapsulates media in a container and can have
        some controllers.
      </Paragraph>
      <Paragraph>
        There are 4 different types of media available to pass to the component
        as children:
      </Paragraph>
      <UnorderedList>
        <ListItem>
          <Code>Image</Code>: for all kind of pictures
        </ListItem>
        <ListItem>
          <Code>Video</Code>: for standard videos
        </ListItem>
        <ListItem>
          <Code>Video3d</Code>: for 3D videos in an iframe
        </ListItem>
        <ListItem>
          <Code>Video360</Code>: for 360 videos or images in an iframe
        </ListItem>
      </UnorderedList>
      <Paragraph>
        The Media Gallery tries to fill all the available space from its parent
        by default.
      </Paragraph>
      <Paragraph>
        If <Code>lite</Code> boolean prop is setted the component will show a
        reduced version with just images.
      </Paragraph>
      <Paragraph>
        If <Code>fullWidth</Code> boolean prop is setted a button will be shown
        to be able to position the component as fixed and filling all viewport's
        height and width.
      </Paragraph>
      <Paragraph>
        The component can show their thumbnails with a <Code>thumbnails</Code>{' '}
        boolean prop when showing images.
      </Paragraph>
      <Paragraph>
        It can be forced to show a media type and index position as initial
        values with <Code>initialMediaType</Code> and <Code>initialIndex</Code>{' '}
        props.
      </Paragraph>
      <Grid cols={5} gutter={[8, 8]}>
        <Cell>
          <Label>Lite</Label>
        </Cell>
        <Cell>
          <Label>Fullwidth</Label>
        </Cell>
        <Cell>
          <Label>Thumbnails</Label>
        </Cell>
        <Cell>
          <Label>Images only</Label>
        </Cell>
        <Cell>
          <Label>Container</Label>
        </Cell>
        <Cell>
          <RadioButton
            label={lite ? 'true' : 'false'}
            value="lite"
            checked={lite}
            fullWidth
            onClick={(target, value) => setLite(value === 'lite')}
          />
        </Cell>
        <Cell>
          <RadioButton
            label={fullWidth ? 'true' : 'false'}
            value="fullWidth"
            checked={fullWidth}
            fullWidth
            onClick={(target, value) => setFullWidth(value === 'fullWidth')}
          />
        </Cell>
        <Cell>
          <RadioButton
            label={thumbnails ? 'true' : 'false'}
            value="thumbnails"
            checked={thumbnails}
            fullWidth
            onClick={(target, value) => setThumbnails(value === 'thumbnails')}
          />
        </Cell>
        <Cell>
          <RadioButton
            label={imagesOnly ? 'true' : 'false'}
            value="imagesOnly"
            checked={imagesOnly}
            fullWidth
            onClick={(target, value) => setImagesOnly(value === 'imagesOnly')}
          />
        </Cell>
        <Cell>
          <RadioButton
            label={card ? 'in a card' : 'in a section'}
            value="card"
            checked={card}
            fullWidth
            onClick={(target, value) => setCard(value === 'card')}
          />
        </Cell>
      </Grid>
      <br />
      <Container card={card}>
        <OrganismMediaGallery
          imageTitle="Imagen"
          videoTitle="Vídeo"
          video3dTitle="Vídeo 3D"
          video360Title="Vídeo 360"
        >
          <Image
            src="https://avatars2.githubusercontent.com/u/13288987?s=200&v=4"
            alt="Image"
          />
          <Image
            src="https://avatars2.githubusercontent.com/u/13288987?s=200&v=4"
            alt="Image"
          />
          {!imagesOnly && (
            <Video
              src="https://www.youtube.com/embed/Q5mgQsmKtDQ"
              inIframe
              title="Vídeo title"
            />
          )}
          {!imagesOnly && (
            <Video3d src="https://my.matterport.com/show/?m=6yDd8eDbNHC&brand=0&brand=0&amp;mls=1&amp;title=0&amp;tourcta=0&amp;play=1&amp;lang=es" />
          )}
        </OrganismMediaGallery>
      </Container>
    </Article>
  )
}

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Media Gallery</H1>
        <Paragraph>
          Component that structures one container (which can be fixed width or
          fullwidth) in which, one by one, the user can see the different
          images, videos, plans, 360º, 3D of the product. The gallery will
          always have control to move between media.
        </Paragraph>
        <DefaultDemo />
        <br />
      </div>
    </div>
  )
}

export default Demo
