import React, { Component } from 'react';
import '../styles/Directions.css';

class Directions extends Component {
	render() {
		return (
				<div className='container'>
					<div className='contact'>
						<h1 id="header"> Contact Us!</h1>
						<div className="contactInfo">
							<h4 id="subHead">Questions? Comments? Concerns? Please reach out!</h4>
								<p>You can contact us at:</p>
								<p><a href="mailto:vhlab-info@umn.edu">vhlab-info@umn.edu</a></p>
								<p>612-624-3959</p>
						</div>
					</div>
					<div>
						<h1 id="header">Directions and Maps</h1>
						<div>
						<p>The Visible Heart® Laboratory is located at the University of Minnesota in the Mayo Memorial Building, on the East Bank of the University of Minnesota campus.</p>
						<p>If you are driving to the lab, the East River Road Garage is the easiest place to park. <strong>To get to the garage:</strong></p>
							<ul>
								<li>
								From South of campus, (including the airport) via Northbound I-35W: Continue on I-35W past downtown Minneapolis. Exit at Washington Avenue/3rd Street (Exit 17c). Bear right, and follow theWashington Avenue U of M East Bank exit.Turn right at the first traffic signal onto Washington Avenue and head east across the Washington Avenue Bridge. Follow the exit around to the right, and down onto East River Parkway. Turn left at the traffic signal, and proceed to the public entrance to the East River Road Garage for parking.
								</li>
								<li>
								From North of campus, via Southbound I-35W: Exit at Washington Avenue (Exit 17c). Turn left onto Washington Avenue.After a couple of blocks, Washington Avenue angles to the right and becomes Cedar Avenue. Continue a couple of blocks, and turn left to go down and across the Washington Avenue Bridge.. Follow the exit around to the right, and down onto East River Parkway. Turn left at the traffic signal, and proceed to the public entrance to the East River Road Garage for parking.
								</li>
								<li>
								From East and westbound I-94: Exit at Huron Boulevard (Exit 235B). Make an immediate left turn at the first traffic signal (Fulton Street). Proceed on Fulton Street until it becomes East River Parkway, and proceed to the public entrance to the East River Road Garage for parking.
								</li>
								<li>
								From Medtronic CRM take 35W south, exiting at University Ave. Go east (left) on University.  Take a right at 17th Ave./Church St. Take a left at the first stop sign (Pillsbury) and follow the road around the Civil Engineering building and north toward Washington Ave. Pillsbury turns into Union, and the entrance to the parking ramp is just north of the intersection between Union and Washington Ave.
								</li>
							</ul>
							<br></br>
							<h5><strong>From the East River Road Garage:</strong></h5>
								<div className="row" id="bottomRow">
								<div className="col-lg-5">
								<p>Take the ramp elevator up to level 1. <br></br>
									Follow Delaware Street around to the Mayo Building. <br></br>
									Enter through the door just past the skywalk. (see picture) <br></br>
									Go straight down the hallway to the elevator lobby. <br></br>
									Take the elevator to the first floor. <br></br>
									Follow the signs to B172 Mayo.</p>
									</div>
								<img className="col-lg-7" id="mapImage" src={process.env.PUBLIC_URL + "/images/VHLMap.png"}></img>
								</div>
						</div>
					</div>
				</div>
			);
	}
}

export default Directions;