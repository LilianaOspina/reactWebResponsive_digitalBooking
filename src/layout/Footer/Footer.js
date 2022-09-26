import React from "react";
import "./footer.css";
import facebook from "./assets/facebook.svg";
import linkedin from "./assets/linkedin.svg";
import twitter from "./assets/tweet.svg";
import ig from "./assets/ig.svg";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
	const navigate = useNavigate();
	return (
		<footer className="footer">
			<p role='contentinfo' className='footer__copy'>&copy; 2022 Digital Booking</p>

			<div className='footer__redes'>
				<Link to="/pageNotFound">
				<img src={facebook} alt='facebook' />
				</Link>
				<Link to="/pageNotFound">
				<img src={linkedin} alt='linkedin' />
				</Link>
				<Link to="/pageNotFound">
				<img src={twitter} alt='twitter' />
				</Link>
				<Link to="/pageNotFound">
				<img src={ig} alt='instagram' />
				</Link>
			</div>
		</footer>
	);
};
export default Footer;
