import Link from "next/link";
import { setCookie } from 'cookies-next';
import { getCookie } from 'cookies-next';

let cookies = null;
function checkCookies(){
        let cookie = getCookie('pmgates');
        cookie === true ? null : cookies = true;
    }
checkCookies();
const Cookie = () => {
    function handleCookie(e) {
        setCookie('pmgates', true);
        console.log(getCookie('pmgates'))
    }
        return (
            cookies = true &&
            <div className="cookiePopUp">
                <p>By using this website you agree with our <Link href="/tos">Terms and conditions</Link>. Please <button onClick={handleCookie}>accept</button> these first.</p>
            </div>
         );
}

export default Cookie;