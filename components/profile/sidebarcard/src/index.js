import React, {Component} from 'react'
import ProfileRating from '@schibstedspain/sui-profile-rating/lib'
import PropTypes from 'prop-types'
import CounterBox from './CounterBox'
import Avatar from './Avatar'

class ProfileSidebarcard extends Component {
  render () {
    return (
      <div className='sui-ProfileSidebarcard'>
        <div className='sui-ProfileSidebarcard-topContainer'>
          <Avatar profilePic={this.props.userInfo.profilePic} />
          <div className='sui-ProfileSidebarcard-topContainerRatingInfoBox'>
            <span className='sui-ProfileSidebarcard-topContainerRatingInfoBoxName'>{this.props.userInfo.username}</span>
            <ProfileRating iconSize={this.props.iconSize} rating={this.props.averageScore} maxValue={this.props.maxRatingValue} icon={this.props.icon} />
          </div>
        </div>
        <div className='sui-ProfileSidebarcard-bottomContainer'>
          {this.props.stats.map(stat => <CounterBox key={stat.label + stat.number} number={stat.number} label={stat.label} link={stat.link} />)}
        </div>
      </div>
    )
  }
}

ProfileSidebarcard.displayName = 'ProfileSidebarcard'

ProfileSidebarcard.propTypes = {
  /**
   *   The user information, requires a name and a profile pic.
   */
  userInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    profilePic: PropTypes.string.isRequired
  }),
  /**
   *  The stats array is an array of 'stats' objects. Those objects require a number, a label and a link to be painted. Are dynamic, so, if you want to paint more stats on the menu you can.
   */
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      link: PropTypes.string
    }).isRequired
  ).isRequired,
  /**
   * Is the number of ratings that you have, if you have 5 of 10 possible ratings the component will paint 5 of 10 icons filled.
   */
  averageScore: PropTypes.number.isRequired,
  /**
   * Is the number of maxRatings that you can have. The bigger this number is the more number of total icons that you will have on the rating
   */
  maxRatingValue: PropTypes.number.isRequired,
  /**
   * The icon to be painted as your rating icon.
   */
  icon: PropTypes.func.isRequired,
  /**
   * The icon size to allow the system to make their math calcs to build fill width's.
   */
  iconSize: PropTypes.number.isRequired
}

export default ProfileSidebarcard
