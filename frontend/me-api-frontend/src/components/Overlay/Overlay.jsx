import './Overlay.css';
import React, { useEffect } from 'react';

function Overlay (props) {
    const language = props.language;
    const toggleLanguage = props.toggleLanguage;
    const toggleOverlay = props.toggleOverlay;
    const classNameOverlayContainer = props.isOpen ? 'overlay__container open' : 'overlay__container';

    const handleClick = (e) => {
      if (e.target.className === 'overlay__container open') {
        toggleOverlay();
      }
    }

    useEffect(() => {
      if (props.isOpen) {
        window.addEventListener('click', handleClick);
        return () => {
          window.removeEventListener('click', handleClick);
        };
      }
    }, );
    return (
        <div className={classNameOverlayContainer}>
            <ul className='overlay'>
              <li className='overlay__header'>
                <button className='overlay__btn' onClick={toggleLanguage} value={language.overlay_value}>{language.overlay_lang}</button>
                <button className='overlay__btn_close-btn' onClick={toggleOverlay}></button>
              </li>
              <li className='overlay__item-container'>
                <a className="overlay__link" href="#main">{language.main_link}</a>
              </li>
              <li className='overlay__item-container'>
                <a className="overlay__link" href="#about">{language.descr_link}</a>
              </li>
              <li className='overlay__item-container'>
                <a className="overlay__link" href="#spec">{language.spec_link}</a>
              </li>
              <li className='overlay__item-container'>
                <a className="overlay__link" href="#contacts">{language.cont_link}</a>
              </li>
            </ul>
        </div>
    )
}

export default Overlay;