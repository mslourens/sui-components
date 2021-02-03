import PropTypes from 'prop-types'
import AtomButton, {atomButtonSizes} from '@s-ui/react-atom-button'
import * as pagination from './helpers/pagination'
import {
  isValidPage,
  isValidTotalPages,
  isValidShowPages
} from './customPropTypes'

const BASE_CLASS = 'sui-MoleculePagination'
const CLASS_PREV_BUTTON_ICON = 'sui-MoleculePagination-prevButtonIcon'
const CLASS_NEXT_BUTTON_ICON = 'sui-MoleculePagination-nextButtonIcon'
const PAGE_NUMBER_HOLDER = '%{pageNumber}'
const DIVIDER = '···'

const PageButton = ({onSelectPage, page, design, color, ...props}) => {
  const _onSelectPage = e => {
    onSelectPage(e, {page})
  }
  return (
    <li className={`${BASE_CLASS}-item`}>
      <AtomButton
        onClick={_onSelectPage}
        design={design}
        color={color}
        {...props}
      />
    </li>
  )
}

PageButton.propTypes = {
  /** Callback that will be called with (event, page) on each page button click */
  onSelectPage: PropTypes.func,
  /** Current page selected */
  page: isValidPage,
  /** Design to be used for the page button. Design types 'solid', 'outline' or 'flat' */
  design: PropTypes.string,
  /** Button color */
  color: PropTypes.string,
  /** Factory used to create navigation links */
  linkFactory: PropTypes.func
}

const defaultCreateUrl = ({pageNumber, urlPattern}) =>
  urlPattern.replace(PAGE_NUMBER_HOLDER, pageNumber)

const noop = () => {}

const MoleculePagination = ({
  onSelectNext = noop,
  onSelectPage = noop,
  onSelectPrev = noop,
  page = 1,
  totalPages,
  showPages = 10,
  prevButtonText = 'Previous',
  prevButtonIcon: PrevButtonIcon,
  nextButtonText = 'Next',
  nextButtonIcon: NextButtonIcon,
  compressed = false,
  hideDisabled,
  selectedPageButtonDesign = 'solid',
  showEdges,
  nonSelectedPageButtonDesign = 'flat',
  prevButtonDesign = 'flat',
  nextButtonDesign = 'flat',
  selectedPageButtonColor = 'primary',
  size,
  nonSelectedPageButtonColor = 'primary',
  prevButtonColor = 'primary',
  nextButtonColor = 'primary',
  linkFactory,
  createUrl = defaultCreateUrl,
  urlPattern = '#',
  renderLinks = false
}) => {
  const paramsPagination = {
    page,
    totalPages,
    showPages,
    showEdges
  }

  const FIRST_PAGE = 1

  const handleClickNext = e => {
    const page = pagination.nextPage(paramsPagination)
    onSelectNext(e, {page})
  }

  const handleClickPrev = e => {
    const page = pagination.prevPage(paramsPagination)
    onSelectPrev(e, {page})
  }

  const range = pagination.range(paramsPagination)
  const nextPage = pagination.nextPage(paramsPagination)
  const prevPage = pagination.prevPage(paramsPagination)
  const isHidePrev = hideDisabled && !prevPage
  const isHideNext = hideDisabled && !nextPage

  const linkProps = pageNumber =>
    renderLinks && {
      link: true,
      href: createUrl({pageNumber, urlPattern}),
      ...(linkFactory && {linkFactory})
    }

  return (
    <ul className={BASE_CLASS}>
      {!isHidePrev && (
        <li className={`${BASE_CLASS}-item`}>
          <AtomButton
            onClick={handleClickPrev}
            design={prevButtonDesign}
            color={prevButtonColor}
            disabled={!prevPage}
            size={size}
            {...linkProps(prevPage)}
          >
            {PrevButtonIcon && (
              <span className={CLASS_PREV_BUTTON_ICON}>
                <PrevButtonIcon />
              </span>
            )}
            {prevButtonText}
          </AtomButton>
        </li>
      )}
      {compressed ? (
        <PageButton
          page={page}
          design={selectedPageButtonDesign}
          color={selectedPageButtonColor}
          onSelectPage={onSelectPage}
          size={size}
          {...linkProps(page)}
        >
          {page}
        </PageButton>
      ) : (
        <>
          {showEdges && range[0] !== FIRST_PAGE && (
            <>
              <PageButton
                page={FIRST_PAGE}
                design={
                  page === FIRST_PAGE
                    ? selectedPageButtonDesign
                    : nonSelectedPageButtonDesign
                }
                color={
                  page === FIRST_PAGE
                    ? selectedPageButtonColor
                    : nonSelectedPageButtonColor
                }
                onSelectPage={onSelectPage}
                size={size}
                {...linkProps(FIRST_PAGE)}
              >
                {FIRST_PAGE}
              </PageButton>
              {range[0] - 1 > FIRST_PAGE && (
                <li className={`${BASE_CLASS}-divider`}>{DIVIDER}</li>
              )}
            </>
          )}
          {range.map(pageRange => (
            <PageButton
              key={pageRange}
              page={pageRange}
              design={
                pageRange === page
                  ? selectedPageButtonDesign
                  : nonSelectedPageButtonDesign
              }
              color={
                pageRange === page
                  ? selectedPageButtonColor
                  : nonSelectedPageButtonColor
              }
              onSelectPage={onSelectPage}
              size={size}
              {...linkProps(pageRange)}
            >
              {pageRange}
            </PageButton>
          ))}
          {showEdges &&
            totalPages > 1 &&
            range[range.length - 1] !== totalPages && (
              <>
                {totalPages - range[range.length - 1] > 1 && (
                  <li className={`${BASE_CLASS}-divider`}>{DIVIDER}</li>
                )}
                <PageButton
                  page={totalPages}
                  design={
                    page === totalPages
                      ? selectedPageButtonDesign
                      : nonSelectedPageButtonDesign
                  }
                  color={
                    page === totalPages
                      ? selectedPageButtonColor
                      : nonSelectedPageButtonColor
                  }
                  onSelectPage={onSelectPage}
                  size={size}
                  {...linkProps(totalPages)}
                >
                  {totalPages}
                </PageButton>
              </>
            )}
        </>
      )}
      {!isHideNext && (
        <li className={`${BASE_CLASS}-item`}>
          <AtomButton
            onClick={handleClickNext}
            design={nextButtonDesign}
            color={nextButtonColor}
            disabled={!nextPage}
            size={size}
            {...linkProps(nextPage)}
          >
            {nextButtonText}
            {NextButtonIcon && (
              <span className={CLASS_NEXT_BUTTON_ICON}>
                <NextButtonIcon />
              </span>
            )}
          </AtomButton>
        </li>
      )}
    </ul>
  )
}

MoleculePagination.displayName = 'MoleculePagination'

MoleculePagination.propTypes = {
  /** Total number of pages */
  totalPages: isValidTotalPages,

  /** Current page selected */
  page: isValidPage,

  /** Number of pages to be displayed in the range (10 by default) */
  showPages: isValidShowPages,

  /** Size of buttons */
  size: PropTypes.oneOf(Object.values(atomButtonSizes)),

  /** If the pagination should be displayed in compressed mode or not */
  compressed: PropTypes.bool,

  /** Text to be displayed on the previous button */
  prevButtonText: PropTypes.string,

  /** Icon to be displayed on the previous button */
  prevButtonIcon: PropTypes.any,

  /** Text to be displayed on the next button */
  nextButtonText: PropTypes.string,

  /** Icon to be displayed on the next button */
  nextButtonIcon: PropTypes.any,

  /** Callback that will be called with (event, page) on prev button click */
  onSelectPrev: PropTypes.func,

  /** Callback that will be called with (event, page) on next button click */
  onSelectNext: PropTypes.func,

  /** Callback that will be called with (event, page) on each page button click */
  onSelectPage: PropTypes.func,

  /** Hide Previous/Next buttons if they're disabled */
  hideDisabled: PropTypes.bool,

  /** Design to be used for the selected page. Design types 'solid', 'outline' or 'flat' */
  selectedPageButtonDesign: PropTypes.string,

  /** Design to be used for the selected page. Design types 'solid', 'outline' or 'flat' */
  nonSelectedPageButtonDesign: PropTypes.string,

  /** Design to be used for the previous button if its visible. Design types 'solid', 'outline' or 'flat' */
  prevButtonDesign: PropTypes.string,

  /** Design to be used for the next button if its visible. Design types 'solid', 'outline' or 'flat */
  nextButtonDesign: PropTypes.string,

  /** Color to be used for the selected page. */
  selectedPageButtonColor: PropTypes.string,

  /** Makes first and last always visible. */
  showEdges: PropTypes.bool,

  /** Color to be used for the selected page. */
  nonSelectedPageButtonColor: PropTypes.string,

  /** Color to be used for the previous button if its visible. */
  prevButtonColor: PropTypes.string,

  /** Color to be used for the next button if its visible. */
  nextButtonColor: PropTypes.string,

  /** Factory used to create navigation links */
  linkFactory: PropTypes.func,

  /** Factory used to create the urls */
  createUrl: PropTypes.func,

  /** URL patterns */
  urlPattern: PropTypes.string,

  /** tells wether to render links as anchor tags or as buttons */
  renderLinks: PropTypes.bool
}

export default MoleculePagination
