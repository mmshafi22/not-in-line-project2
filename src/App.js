import {useState} from 'react'
import {MdCall} from 'react-icons/md'
import Navbar from './components/Navbar'
import Expanding from './components/Expanding'
import Packages from './components/Packages'
import WhyChooseUsSection from './components/WhyChooseUsSection'
import ThemeContext from './context/ThemeContext'
import FormSection from './components/FormSection'

import './App.css'

const App = () => {
  const [isDarkMode, setDark] = useState(false)

  const changeTheme = () => {
    setDark(prev => !prev)
  }

  return (
    <ThemeContext.Provider value={{isDarkMode, changeTheme}}>
      <Navbar />
      <div className="not-in-line-page-bg-container">
        <FormSection />
        <Expanding />
        <Packages />
        <WhyChooseUsSection />
      </div>
      <footer className="footer">
        <div className="footer-details">
          <div className="footer-section1">
            <img
              src="https://res.cloudinary.com/shafi-tech/image/upload/v1695191373/NIL_logo_Transparent_1_1_1_hvlced.png"
              alt="company logo"
            />
            <p>
              Book doctor appointments online and get your ailments treated in
              no time with our expert medical support systems. Get rid of all
              your medical problem with our expert panel of doctors who guide
              you towards a healthier life.
            </p>
            <div className="call-input">
              <div className="std">
                <p>+91</p>
              </div>
              <input type="tel" className="input-number" />
              <button type="button" className="btn-call">
                <MdCall size={25} color="#fff" />
              </button>
            </div>
          </div>
          <div className="footer-section2">
            <div className="footer-card">
              <h1>Services</h1>
              <ul className="footer-lists">
                <li>Appointments</li>
                <li>Lab tests</li>
                <li>A-Z medicine</li>
                <li>Doctor support</li>
              </ul>
            </div>
            <div className="footer-card">
              <h1>Legal</h1>
              <ul className="footer-lists">
                <li>General info</li>
                <li>Privacy policy</li>
                <li>Terms of services</li>
                <li>Consultation</li>
                <li>How it works</li>
              </ul>
            </div>
            <div className="footer-card">
              <h1>Talk to us</h1>
              <ul className="footer-lists">
                <li>support@notinline.com</li>
                <li>appointment@notinline.com</li>
                <li>+91 12345 67899</li>
                <li>+91 97642 09752</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <p className="copy-right">
          <span className="copy">&copy;</span>2021-2023 All Rights Reserved
        </p>
      </footer>
    </ThemeContext.Provider>
  )
}

export default App
