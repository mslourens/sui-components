import PropTypes from 'prop-types'

import {Article, Box, Code, H2, Paragraph} from '@s-ui/documentation-library'

import AtomSlider from '../src/index.js'

const ArticleSliderSteps = ({className}) => {
  return (
    <Article className={className}>
      <H2>Steps</H2>
      <Paragraph>
        User can tackle the valid values spreading the domain using gaps with the <Code>step</Code> prop
      </Paragraph>
      <Box>
        <AtomSlider step={10} />
      </Box>
    </Article>
  )
}

ArticleSliderSteps.propTypes = {
  className: PropTypes.string
}

export default ArticleSliderSteps
