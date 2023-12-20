import './Header.css';

function Header () {
    const paralaxHeader = () => {
        let title = document.querySelector('#header-title');
        let background = document.querySelector('#header-background');
        let value = window.scrollY;
        title.style.left = value * -1.6 + 'px';
        background.style.right = value * -1.05 +'px';
        background.style.top = value * 0.7 - 130 +'px';
        background.style.transform = `rotate(${value * 0.023}deg)`;
      }
    window.addEventListener('scroll', paralaxHeader);

    return (
        <header id="main" className="header">
          <h1 id="header-title" className="header-title">Mass Effect REST API</h1>
          <div id="header-background" className="header-background"></div>
        </header>
    );
}

export default Header;