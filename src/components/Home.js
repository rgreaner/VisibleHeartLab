import React, { Component } from 'react';
import homeJson from '../json/homePage.json';
import { Timeline } from 'react-twitter-widgets'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Home.css';
import {Carousel} from 'react-responsive-carousel';

const carousel = homeJson['carousel'];

class Home extends Component {
    makeElement(data) {
		return (
			<div key={data.img_path}>
				<img alt="carousel" src={process.env.PUBLIC_URL + "/images/carousel/".concat(data.img_path)} />
				<a className="legend" href={data.link}>{data.legend}</a>
			</div>
		);
	}

    render() {
		return (
				<div className='Home'>
				<div className="row" id="row1">
				<div className="col-md-1"></div>
					<div className="col-md-7">
						<div className='CarouselContainer'>
							<Carousel className="Carousel" 
										dynamicHeight={false} 
										infiniteLoop={true} 
										autoPlay={true} 
										swipeable={true} 
										interval={3000}
										emulateTouch={true}
										showThumbs={false}>
								{carousel.map(el => this.makeElement(el))}
							</Carousel>
						</div>
					</div>
					{/* <div className="col-md-1" id="emptyDiv"></div> */}
					<div className="col-md-4" id="twitterDiv">
							<Timeline dataSource={{sourceType: "profile", screenName: "VisibleHeartLab"}}
								options={{username:"VisibleHeartLab", width:"300px", height:"350"}}/>
					</div>

					</div>
											{/* Home Element Cards */}

									<div className="row" id="row2">
									
											<div className="col-md-2" id="homeElementColumnFix">
															<div className="card" id="homeElementCard" >
																<a href="/about" id="homeElementLink">
																	<h3>Our Lab</h3>	
																	<img className="card-img-top" src={process.env.PUBLIC_URL + "/images/homeelements/ourlab3.jpg"} alt="Heart Lab" />
																	<div className="card-body" id="cardBodyFix">
																		<p className="card-text">Information here about The Lab.</p>
																	</div>
																</a>
															</div>
											</div>

											<div className="col-md-2" id="homeElementColumnFix">
													<div className="card" id="homeElementCard" >
														<a href="/research" id="homeElementLink">
															<h3>Research</h3>
															<img className="card-img-top" src={process.env.PUBLIC_URL + "/images/homeelements/Research.jpg"} alt="Research" />
															<div className="card-body" id="cardBodyFix">
																<p className="card-text">Information here about Research.</p>
															</div>
														</a>
													</div>
											</div>

											<div className="col-md-2" id="homeElementColumnFix">
													<div className="card" id="homeElementCard" >
														<a href="/outreach" id="homeElementLink">
															<h3>Outreach</h3>
															<img className="card-img-top" src={process.env.PUBLIC_URL + "/images/homeelements/education5.jpg"} alt="Outreach & Education" />
															<div className="card-body" id="cardBodyFix">
																<p className="card-text">Information here about Outreach and Education.</p>
															</div>
														</a>
													</div>
											</div>

											<div className="col-md-2" id="homeElementColumnFix">
													<div className="card" id="homeElementCard" >
														<a href="/clinical" id="homeElementLink">
															<h3>Clinical</h3>	
															<img className="card-img-top" src={process.env.PUBLIC_URL + "/images/homeelements/mhlogo.jpg"} alt="Mhaus logo" />
															<div className="card-body" id="cardBodyFix">
																<p className="card-text">Information here about Clinical.</p>
															</div>
														</a>
													</div>
											</div>

											<div className="col-md-2" id="homeElementColumnFix">
													<div className="card" id="homeElementCard" id="lastElementCard">
														<a href="http://www.vhlab.umn.edu/atlas/index.shtml" id="homeElementLink">
															<h3>The Atlas</h3>	
															<img className="card-img-top" src={process.env.PUBLIC_URL + "/images/homeelements/Happaratus.jpg"} alt="The Atlas" />
															<div className="card-body" id="cardBodyFix">
																<p className="card-text">Information here about The Atlas.</p>
															</div>
														</a>
													</div>
											</div>
									</div>




</div>

			
        )}}
export default Home;
