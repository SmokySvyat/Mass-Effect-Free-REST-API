import './App.css';
import { useEffect, useState } from 'react';
import { MOBILE_RESOLUTION } from '../../utils/constants';
import { PAGE_EN } from '../../utils/languages/en';
import { PAGE_RU } from '../../utils/languages/ru';

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_RESOLUTION);
  const browserLanguage = navigator.language.toString();
  const [userLanguage, setUserLanguage] = useState(localStorage.getItem('Language') || null);
  
  const setLanguageFromBrowser = () => {
    if (browserLanguage === 'ru-RU' || browserLanguage === 'ru') {
      return PAGE_RU
    } else {
      return PAGE_EN
    }
  }
  const handleLanguage = () => {
    switch (userLanguage) {
      case 'ru':
        return PAGE_RU;
      case 'en':
        return PAGE_EN;
      case null:
        return setLanguageFromBrowser();
      default:
        break;
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_RESOLUTION);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, );

  return (
    <div className="app">
      <Header />
      <Navigation
        isMobile = {isMobile}
        language = {handleLanguage()}
        handleLanguage = {setUserLanguage}
        />
      <Main />
      <Footer
        language = {handleLanguage()}
      />
    </div>
  );
}

export default App;
