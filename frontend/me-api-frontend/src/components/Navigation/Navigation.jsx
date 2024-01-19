import './Navigation.css';
import React from "react";

function Navigation () {
    const [navClassName, setNavClassName] = React.useState('nav-landing');
    
    const stickyNav = () => {
        setNavClassName((window.scrollY >= window.innerHeight) ? 'nav-landing sticky' : 'nav-landing')
    }

    window.onscroll = stickyNav;

    return (
        <nav className="navigation">
          <ul id="nav" className={navClassName}>
            <li><a className="nav-landing__link" href="#main">Главня</a></li>
            <li><a className="nav-landing__link" href="#about">Описание</a></li>
            <li><a className="nav-landing__link" href="#spec">Спецификация</a></li>
            <li><a className="nav-landing__link" href="#contacts">Контакты</a></li>
            {/* <li><a className="nav-landing__link" href="#">Add more INFO</a></li> */}
            {/* <li><a className="nav-landing__link" href="#">Example</a></li> */}
            {/* <li><a className="nav-landing__link" href="#">Language</a></li> */}
          </ul>
        </nav>
    )
}

export default Navigation;