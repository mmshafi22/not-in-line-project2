import {useState, useContext} from 'react'
import {FaGooglePlay, FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => {
  const [menu, openMenu] = useState(false)
  const {isDarkMode, changeTheme} = useContext(ThemeContext)
  const bgColor = isDarkMode ? 'nav-dark-bg-color' : 'nav-light-bg-color'
  const textColor = isDarkMode ? 'nav-text-dark-color' : 'nav-text-light-color'
  const toggleMenu = () => {
    openMenu(prev => !prev)
  }
  return (
    <>
      <nav className={`navbar-large-screen ${bgColor}`}>
        <div className="nav-logo-container">
          <img
            src="https://res.cloudinary.com/shafi-tech/image/upload/v1695114344/NIL_logo_Transparent_1_1_ovjtm3.png"
            alt="not-in-logo"
          />
          <h1 className={textColor}>
            Not<span>In</span>Line
          </h1>
        </div>
        <ul className={`not-in-line-navigation-lists ${textColor}`}>
          <li>Home</li>
          <li>Health Conditions</li>
          <li>Lab tests</li>
          <li>Medicines</li>
        </ul>
        <div className="not-in-line-btn-container">
          <button className="btn-patients-hospital" type="button">
            For Patients
          </button>
          <button className="btn-patients-hospital" type="button">
            For Hospital
          </button>
          <button
            type="button"
            className="btn-menu"
            onClick={() => changeTheme()}
          >
            {isDarkMode ? (
              <FiSun size={25} color={isDarkMode ? '#fefefe' : '#0f0f0f'} />
            ) : (
              <FaMoon size={25} color={isDarkMode ? '#fefefe' : '#0f0f0f'} />
            )}
          </button>
        </div>
        <button
          className={`btn-play-store ${isDarkMode && 'btn-light-text'} ${
            isDarkMode && 'btn-light'
          }`}
          type="button"
        >
          <FaGooglePlay />
          Play store
        </button>
      </nav>
      <nav className={`navbar-small-medium-screen ${bgColor}`}>
        <div className="navbar-mobile-small-top-section">
          <div className="nav-logo-container">
            <img
              src="https://res.cloudinary.com/shafi-tech/image/upload/v1695114344/NIL_logo_Transparent_1_1_ovjtm3.png"
              alt="not-in-logo"
            />
            <h1 className={textColor}>
              Not<span>In</span>Line
            </h1>
          </div>
          <div className="toggle-menu-theme">
            <button
              type="button"
              className="btn-menu"
              onClick={() => changeTheme()}
            >
              {isDarkMode ? (
                <FiSun size={25} color={isDarkMode ? '#fefefe' : '#0f0f0f'} />
              ) : (
                <FaMoon size={25} color={isDarkMode ? '#fefefe' : '#0f0f0f'} />
              )}
            </button>
            <button
              type="button"
              className="btn-menu"
              onClick={() => toggleMenu()}
            >
              <GiHamburgerMenu size={30} className={textColor} />
            </button>
          </div>
        </div>
        {menu && (
          <div className="navbar-mobile-bottom-section">
            <ul className={`not-in-line-navigation-lists ${textColor}`}>
              <li>Home</li>
              <li>Health Conditions</li>
              <li>Lab tests</li>
              <li>Medicines</li>
              <li>
                <button
                  type="button"
                  className="btn-menu mobile-position"
                  onClick={() => toggleMenu()}
                >
                  <IoMdClose
                    size={20}
                    color={isDarkMode ? '#fefefe' : '#0f0f0f'}
                  />
                </button>
              </li>
            </ul>
            <div className="not-in-line-btn-container">
              <button className="btn-patients-hospital" type="button">
                For Patients
              </button>
              <button className="btn-patients-hospital" type="button">
                For Hospital
              </button>
              <button
                className={`btn-play-store ${isDarkMode && 'btn-light-text'} ${
                  isDarkMode && 'btn-light'
                }`}
                type="button"
              >
                <FaGooglePlay />
                Play store
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
