import Cookies from 'js-cookie'

import {BsFillBriefcaseFill} from 'react-icons/bs'
import {MdHome} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'

import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')

    history.replace('/login')
  }
  return (
    <div className="header-container">
      <div className="header-sections-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="header-website-image"
          />
        </Link>
        <div className="mobile-view-icons">
          <Link to="/" className="mobile-header-link">
            <MdHome />
          </Link>
          <Link to="/jobs" className="mobile-header-link">
            <BsFillBriefcaseFill />
          </Link>
          <FiLogOut onClick={onClickLogout()} className="mobile-header-link" />
        </div>
        <div className="desktop-view-container">
          <Link to="/" className="desktop-view-links">
            Home
          </Link>
          <Link to="/jobs" className="desktop-view-links">
            Jobs
          </Link>
        </div>
        <button
          type="button"
          className="logout-button"
          onClick={onClickLogout()}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default withRouter(Header)
