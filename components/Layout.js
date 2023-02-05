
import Footer from "./Footer"
import Navbar from "./Navbar"
import CookieConsent from "react-cookie-consent";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      { children }
      <Footer />
      <CookieConsent
        location="bottom"
        expires={365}
        style={{ background: "#2B373B", textAlign: "center", color: "white" }}
        buttonStyle={{ color: "#000", fontSize: "16px", backgroundColor: "#fff", borderRadius: "5px" }}
        >
          By using this website you agree with our <Link href="/tos">Terms and conditions</Link>. Please accept these first.
        </CookieConsent>
    </div>
  );
}
 
export default Layout;