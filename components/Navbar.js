const Navbar = () => {

  const handleClick = () => {
    document.querySelector('.nav-items').classList.toggle('show');
  };

    return ( 
        <header className="primary-heading">
      <nav className="primary-navigation">
        <a className="logo" href="./">
        <img src="/logodark.png" alt="" />
        </a>
        <button type="button" onClick={handleClick} id="mobile-nav-btn">
        <img src="/icon-hamburger.svg" alt="" />
        </button>
        <ul className="nav-items">          
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/services">Services</a></li>
          <li><a className='eBay' target="_blank" href="https://www.ebay.co.uk/str/sdmetals"><img src="/ebay.png" alt="" /></a></li>
        </ul>
      </nav>
    </header>
     );
}
 
export default Navbar;