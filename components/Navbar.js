import hamburger from '../public/icon-hamburger.svg';
import logoDark from '../public/logodark.png';
import Image from 'next/image';
import { FaFacebook, FaPhoneAlt, FaRegEnvelope, FaEbay } from 'react-icons/fa';

const Navbar = () => {
  
  const handleClick = () => {
    document.querySelector('.nav-items').classList.toggle('show');
  };

    return ( 
        <header className="primary-heading">
      <nav className="primary-navigation">
        <a className="logo" href="./">
        <Image
          src={logoDark}
          alt=""
          width={235}
          height={70}/>
        </a>
        <button type="button" onClick={handleClick} id="mobile-nav-btn">
        <Image
          src={hamburger}
          alt=""
          width={36}
          height={26}/>
        </button>
        <ul className="nav-items">          
          <li><a href="./about">About Us</a></li>
          <li><a href="./contact">Contact</a></li>
          <li><a href="./services">Services</a></li>
          <li><a className='eBay' target="_blank" href="https://www.ebay.co.uk/str/sdmetals"><img src="/ebay.png" alt="" /></a></li>
        </ul>
      </nav>
    </header>
     );
}
 
export default Navbar;