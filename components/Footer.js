import { FaFacebook, FaPhoneAlt, FaRegEnvelope, FaEbay } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer>
        <a href="./" className="footer-logo">
          <img src="/logowhite-svg.svg" alt="PMGates - The Purpose Made Gates Company Logo" />
        </a>
        <div className="socials">
          <a href="#"><FaFacebook /></a>          
          <a href="#"><FaPhoneAlt /></a>
          <a href="#"><FaRegEnvelope /></a>
          <a target="_blank" href="https://www.ebay.co.uk/str/sdmetals"><FaEbay /></a>
        </div>
        <p>&copy; 2023 PMGates</p>
      </footer>
     );
}
 
export default Footer;