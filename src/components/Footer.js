import React, { Component } from 'react';
import '../styles/Footer.css';
import { SocialIcon } from 'react-social-icons';
import ScrollToTop from 'react-scroll-up';
import TiArrowUpThick from 'react-icons/lib/ti/arrow-up-thick';

class Footer extends Component {
	render() {
		
		return (
				<div className='FootContainer'>

					<div className='yellow-footer-bar'></div>
					<div className="social">
						<span className="socialEl">
							<SocialIcon url="https://www.facebook.com/VisibleHeartLab/" className="socicon"/>
							<a href="https://www.facebook.com/VisibleHeartLab/" alt="Facebook Logo"><span>Facebook</span></a>
						</span>

						<span className="socialEl">
							<SocialIcon url="https://twitter.com/VisibleHeartLab" className="socicon"/>
							<a href="https://twitter.com/VisibleHeartLab" alt="Twitter Logo"><span>Twitter</span></a>
						</span>
						<span className="socialEl">

							<SocialIcon url="https://www.youtube.com/channel/UCwcaO45GJ_v-WrWXEUKCXKw" className="socicon"/>
							<a href="https://www.youtube.com/channel/UCwcaO45GJ_v-WrWXEUKCXKw" alt="Youtube Logo"><span>Youtube</span></a>
						</span>

						<a href="/gift">
						<span className="socialEl">
							<img className="gift" src={process.env.PUBLIC_URL + "/images/icons/gift.png"} width={50} alt={'Giving Hands'}/>
							<span>Give a Gift</span>
						</span></a>
					</div>

					<address>
						B172 Mayo, MMC195
						420 Delaware Street S.E.
						Minneapolis, MN 55455
					</address>



					<ScrollToTop showUnder={160}>
					  <TiArrowUpThick size={50}/>
					</ScrollToTop>

				</div>
			);
	}
}

export default Footer;