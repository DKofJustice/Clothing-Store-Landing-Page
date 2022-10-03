import './App.css';
import { useState } from 'react';

import CartIcon from './Assets/shopping_cart_FILL0_wght400_GRAD0_opsz48 2.svg';
import AccountIcon from './Assets/account_circle_FILL0_wght400_GRAD0_opsz48 1.svg';
import MobileMenuButton from './Assets/menu_FILL0_wght400_GRAD0_opsz48 (1).svg';

import StarrLogo from './Assets/Starr Logo.svg';

import Homepage from './Pages/Homepage/Homepage';

function App() {

  const [sideMenuToggle, setSideMenuToggle] = useState(false);

  const handleMobileMenu = () => {
    if (window.innerWidth <= 992 && sideMenuToggle === false) {
      setSideMenuToggle(true);
    } else if (window.innerWidth <= 992 && sideMenuToggle === true) {
      setSideMenuToggle(false);
    }
  };

  return (
    <div className="App">
      <header className={`${sideMenuToggle === true ? 'headerToggledOn' : ''}`}>

        <div className={`header-mobile-button ${sideMenuToggle === true ? 'toggledON' : ''}`} 
            onClick={handleMobileMenu}>
          <img src={MobileMenuButton} alt="Mobile Menu Button" />
        </div>

        <div className='header-content'>
          <div className='header-logo'>
            <img src={StarrLogo} alt="Starr Logo" />
          </div>
        
          <ul className='web-link-list'>
            <li>
              Home
            </li>

            <li>
              Shop
            </li>

            <li>
              About
            </li>

            <li>
              Blog
            </li>
          </ul>

          <ul className='account-list'>
            <li><img src={CartIcon} alt="" /></li>

            <li><img src={AccountIcon} alt="" /></li>
          </ul> 
        </div>
      </header>

      <Homepage />
    </div>
  );
}

export default App;
