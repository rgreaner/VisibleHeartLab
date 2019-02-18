import React, { Component } from 'react';
import '../styles/Research.css';

class Research extends Component {
	render() {
		return (
				<div className='container'>
					<h1 id="researchHeader">Research</h1>
					<h2 id="researchSubheader">What would you like to learn about today?</h2>

					<div className="row" id="researchRow">
						<div className="col-md-3" id="colFix">
							<a href="research-3d">
								<img id="researchTopicImg" src={'../images/research/icon3d.jpg'} height={250} width={250} alt={'3D Heart'}/>
								<h3 id="researchTopic">3D Modeling</h3>
							</a>
						</div>

						<div className="col-md-3" id="colFix">
							<a href="research-ca">
								<img id="researchTopicImg" src={'../images/research/iconcardiac.jpg'} height={250} width={250} alt={'Open Heart'}/>
								<h3 id="researchTopic">Cardiac</h3>
							</a>
						</div>

						<div className="col-md-3" id="colFix">
							<a href="research-pc">
								<img id="researchTopicImg" src={'../images/research/iconhealth.jpg'} height={250} width={250} alt={'Testing Equipment'}/>
								<h3 id="researchTopic">Patient Care</h3>
							</a>
						</div>
					</div>


					<div className="row" id="researchRow">
						<div className="col-md-3" id="colFix">
							<a href="research-bb">
								<img id="researchTopicImg" src={'../images/research/iconbear.jpg'} height={250} width={250} alt={'Black Bear Mom & Cub'}/>
								<h3 id="researchTopic">Black Bears</h3>
							</a>
						</div>

						<div className="col-md-3" id="colFix">
							<a href="research-md">
								<img id="researchTopicImg" src={'../images/research/icondevice.jpg'} height={250} width={250} alt={'Heart Monitor & Heart Model'}/>
								<h3 id="researchTopic">Medical Devices</h3>
							</a>
						</div>

						<div className="col-md-3" id="colFix">
							<a href="research-sm">
								<img id="researchTopicImg" src={'../images/research/iconsm.png'} height={250} width={250} alt={'Muscle Testing Equipment'}/>
								<h3 id="researchTopic">Skeletal Muscle</h3>
							</a>
						</div>
					</div>
				</div>
			);
	}
}

export default Research;