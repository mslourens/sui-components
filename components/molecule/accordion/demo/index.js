// import {useState} from 'react'

import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleDefault from './articles/ArticleDefault.js'
import ArticleBehavior from './articles/ArticleBehavior.js'
import ArticleHeight from './articles/ArticleHeight.js'
import ArticleTransition from './articles/ArticleTransition.js'
import ArticleIcon from './articles/ArticleIcon.js'
import {CLASS_SECTION} from './settings.js'

export default () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Accordion</H1>
      <Paragraph>
        An accordion is a vertically stacked set of interactive headings that
        each contain a title, content snippet, or thumbnail representing a
        section of content. The headings function as controls that enable users
        to reveal or hide their associated sections of content. Accordions are
        commonly used to reduce the need to scroll when presenting multiple
        sections of content on a single page.
      </Paragraph>
      <ArticleDefault className={CLASS_SECTION} />
      <br />
      <ArticleBehavior className={CLASS_SECTION} />
      <br />
      <ArticleHeight className={CLASS_SECTION} />
      <br />
      <ArticleTransition className={CLASS_SECTION} />
      <br />
      <ArticleIcon className={CLASS_SECTION} />
    </div>
  )
}
