import './Footer.css';
import telegram from '../../images/telegram-desktop-svgrepo-com.svg';
import github from '../../images/github-svgrepo-com.svg';

function Footer () {
    return (
        <footer className='footer'>
          <div className='footer__content'>
            <ul id='contacts' className='footer__contacts'>
              <li>
                <a className='footer__link' href='https://t.me/mass_effect_api' target='blanc'>
                  <img className='footer__link-ico' src={telegram} alt='telegram logo'></img>
                  С вопросами, пожеланиями и предложениями писать в группу Telegram
                </a>
              </li>
            
              <li>
                <a className='footer__link' href='https://github.com/SmokySvyat/Mass-Effect-Free-REST-API/' target='blanc'>
                  <img className='footer__link-ico' src={github} alt='github logo'></img>
                  Проект на GitHub
                </a>
              </li>
            </ul>
            <p className='footer__copyrights'> Святослав Нестеров</p>
          </div>
        </footer>
    )
}

export default Footer;