import TranslateModeToggle from '../translateModeToggle/translateModeToggle';
import './header.scss';

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        Logo
      </div>
      <TranslateModeToggle />
    </div>
  );
}

export default Header;