import React from "react";
import "./footer.css";
import facebook from "./assets/facebookLogin.svg";
import linkedin from "./assets/linkedinLogin.svg";
import twitter from "./assets/tweetLogin.svg";
import ig from "./assets/igLogin.svg";

const FooterLogin = () => {
	return (
		<footer className="footer__login">
			<p className='footer__copy'>&copy; 2022 Digital Booking</p>

			<div className='footer__redes'>
				<img src={facebook} alt='facebook' />
				<img src={linkedin} alt='linkedin' />
				<img src={twitter} alt='twitter' />
				<img src={ig} alt='instagram' />
			</div>
		</footer>
	);
};
export default FooterLogin;
