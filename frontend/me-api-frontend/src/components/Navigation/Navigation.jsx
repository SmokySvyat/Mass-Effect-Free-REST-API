import './Navigation.css';
import React from "react";

function Navigation (props) {
  const [navClassName, setNavClassName] = React.useState('nav-landing');
  const [isActive, setIsActive] = React.useState(false);

  const language = props.language;
  const isMobile = props.isMobile;
  const setUserLanguage = props.handleLanguage;
  const stickyNav = () => {
    setNavClassName((window.scrollY >= window.innerHeight) ? 'nav-landing sticky' : 'nav-landing')
  }

  const toggleLanguage = (e) => {
    setUserLanguage(e.target.value);
    localStorage.setItem('Language', e.target.value);
  }

  const toggleLanguageSelector = () => {
    setIsActive(!isActive);
  }
  
  window.onscroll = stickyNav;

    if (isMobile) {
      return (
        <nav className='navigation'>
          <ul id='nav' className={navClassName}>
            <li><button className='nav-landing__btn'>&#9776;</button></li>
          </ul>
        </nav>
      )
    } else {
      return (
        <nav className="navigation">
            <ul id="nav" className={navClassName}>
              <li><a className="nav-landing__link" href="#main">{language.main_link}</a></li>
              <li><a className="nav-landing__link" href="#about">{language.descr_link}</a></li>
              <li><a className="nav-landing__link" href="#spec">{language.spec_link}</a></li>
              <li><a className="nav-landing__link" href="#contacts">{language.cont_link}</a></li>
              {/* <li><a className="nav-landing__link" href="#">Add more INFO</a></li> */}
              {/* <li><a className="nav-landing__link" href="#">Example</a></li> */}
              <li>
                <button onClick={toggleLanguageSelector} className='nav-landing__btn'>{language.lang}&#9660;</button>
                <div className={`nav-landing__btn-menu ${isActive ? 'active' : ''}`}>
                  <button className='nav-landing__btn_selector' onClick={toggleLanguage} value={'ru'}>{language.ru}</button>
                  <button className='nav-landing__btn_selector' onClick={toggleLanguage} value={'en'}>{language.en}</button>
                </div>
              </li>
            </ul>
          </nav>
      )
    }
  }
  
  export default Navigation;