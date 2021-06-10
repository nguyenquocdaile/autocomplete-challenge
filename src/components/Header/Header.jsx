import airbnbLogo from 'assets/airbnb-logo.svg';
import Toggle from 'components/Toggle/Toggle';
import './Header.scss';

function Header() {

  return (
    <header className="header">
        <a href="/" title="back to homepage" className="header__logo">
          <img src={airbnbLogo} alt="logo" />
        </a>

        <div className="header--right">
          <div className="toggle-mobile">
            <Toggle />
          </div>
          <nav className="header__nav">
            <ul >
              <li className="nav-item"><a href="/become-a-host"> Become a host</a></li>
              <li className="nav-item"><a href="/help"> Help </a></li>
              <li className="nav-item"><a href="/sign-up"> Sign up</a></li>
              <li className="nav-item"><a href="/login"> Login</a></li>
            </ul>
          </nav>
        </div>
    </header>
  );
}

export default Header;
