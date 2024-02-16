import './Navigation.css';
import React from "react";

function Navigation (props) {
  const [navClassName, setNavClassName] = React.useState('nav-landing');

  const language = props.language;
  const isMobile = props.isMobile;
  const setUserLanguage = props.handleLanguage;
  const stickyNav = () => {
    setNavClassName((window.scrollY >= window.innerHeight) ? 'nav-landing sticky' : 'nav-landing')
  }

  const setLanguageRu = () => {
    setUserLanguage('ru');
    localStorage.setItem('Language', 'ru');
  }

  const setLanguageEn = () => {
    setUserLanguage('en');
    localStorage.setItem('Language', 'en');
  }
  
  window.onscroll = stickyNav;

    if (isMobile) {
      return (
        <nav className='navigation'>
          <ul id='nav' className={navClassName}>
            <li><button>{language.menu}</button></li>
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
                  <button onClick={setLanguageRu} value={'ru'}>{language.ru}</button>
                  <button onClick={setLanguageEn} value={'en'}>{language.en}</button>
              </li>
            </ul>
          </nav>
      )
    }
  }
  
  export default Navigation;