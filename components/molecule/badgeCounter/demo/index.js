import {H1, Paragraph} from '@s-ui/documentation-library'
import Icon from './Icon'
import ArticleDefault from './ArticleDefaut'

const BASE_CLASS_DEMO = `DemoMoleculeBadgeCounter`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

export default () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>BadgeCounter</H1>
        <Paragraph>
          Breadcrumbs, or a breadcrumb navigation, can help to enhance how users
          navigate to previous page levels of a website, especially if that
          website has many pages or products.
        </Paragraph>
        <ArticleDefault className={CLASS_SECTION} />
        <br />
      </div>
    </div>
  )
}
