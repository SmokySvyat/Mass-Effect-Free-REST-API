import './Footer.css';
import { useEffect, useState } from 'react';

import telegram from '../../images/telegram-desktop-svgrepo-com.svg';
import github from '../../images/github-svgrepo-com.svg';

import { MOBILE_RESOLUTION } from '../../utils/constants';

function Footer ({ language }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_RESOLUTION);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_RESOLUTION);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const footerContent = () => {
    if (isMobile) {
      return (
        <div className='footer__content'>
        <ul id='contacts' className='footer__contacts'>
          <li className='footer__link-item'>
            <a className='footer__link' href='https://t.me/mass_effect_api' target='blanc'>
              <img className='footer__link-ico' src={telegram} alt='telegram logo'></img>
            </a>
          </li>

          <li className='footer__link-item'>
            <a className='footer__link' href='https://github.com/SmokySvyat/Mass-Effect-Free-REST-API' target='blanc'>
              <img className='footer__link-ico' src={github} alt='github logo'></img>
            </a>
          </li>
        </ul>
        <p className='footer__copyrights'>{language.telegram}</p>
        <p className='footer__copyrights'>{language.copyrights}</p>
        </div>
      )
    } else {
      return (
        <div className='footer__content'>
          <ul id='contacts' className='footer__contacts'>
            <li className='footer__link-item'>
              <img className='footer__link-ico' src={telegram} alt='telegram logo'></img>
              <a className='footer__link' href='https://t.me/mass_effect_api' target='blanc'>
                {language.telegram}
              </a>
            </li>
        
            <li className='footer__link-item'>
              <img className='footer__link-ico' src={github} alt='github logo'></img>
              <a className='footer__link' href='https://github.com/SmokySvyat/Mass-Effect-Free-REST-API/' target='blanc'>
                {language.github}
              </a>
            </li>
          </ul>
          <p className='footer__copyrights'>{language.copyrights}</p>
        </div>
      )
    }
  }
    return (
        <footer className='footer'>
          {footerContent()}
        </footer>
    )
}

export default Footer;