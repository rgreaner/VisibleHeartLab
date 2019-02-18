import React, { Component } from 'react';
import '../styles/NavBar.css';


class NavBar extends Component {
	render() {
		return (
			
			<div className='NavBar'>
				<nav className="navbar navbar-expand-xl navbar-light">
				<span><a id="pageTitle" className="navbar-brand" href="/">Visible Heart<sup>®</sup> Laboratories</a> | <a id="surgeryTitle" className="navbar-brand" href="https://www.surgery.umn.edu/">Department of Surgery</a></span>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						
						<ul className="navbar-nav" id="hamburgerMenuFix">
							<li className="nav-item dropdown" id="navListItem">
								<a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
									People
        						</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<a className="dropdown-item" href="/about">Meet the Lab</a>
									<a className="dropdown-item" href="/collaborators">Collaborators</a>
									<a className="dropdown-item" href="/affiliations">Department Affiliations</a>
								</div>
							</li>
							<li className="nav-item dropdown" id="navListItem">
								<a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
									Research
        						</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<a className="dropdown-item" href="/research-3d">3D Modeling</a>
									<a className="dropdown-item" href="/research-ca">Cardiac</a>
									<a className="dropdown-item" href="/research-pc">Patient Care</a>
									<a className="dropdown-item" href="/research-bb">Black Bears</a>
									<a className="dropdown-item" href="/research-md">Medical Devices</a>
									<a className="dropdown-item" href="/research-sm">Skeletal Muscle</a>
								</div>
							</li>
							<li className="nav-item" id="navListItem">
								<a className="nav-link" href="/publications" id="navbarDropdownMenuLink" role="button">
									Publications
        						</a>
							</li>
							<li className="nav-item" id="navListItem">
								<a className="nav-link" href="http://www.vhlab.umn.edu/atlas/index.shtml" id="navbarDropdownMenuLink" role="button">
									The Atlas
        						</a>
							</li>
							<li className="nav-item" id="navListItem">
								<a className="nav-link" href="/news" id="navbarDropdownMenuLink" role="button">
									Lab News
        						</a>
							</li>
							<li className="nav-item" id="navListItem">
								<a className="nav-link" href="/media" id="navbarDropdownMenuLink" role="button">
									Media
        						</a>
							</li>
							<li className="nav-item" id="navListItem">
								<a className="nav-link" href="/gift" id="navbarDropdownMenuLink" role="button">
									Give
        						</a>
							</li>	
							<li className="nav-item dropdown" id="navListItem">
								<a className="nav-link" id="navbarDropdownMenuLink" href="/contact" role="button">
									Contact
        						</a>
							</li>
						</ul>
						</div>
				</nav>
			</div>
		);
	}
}

export default NavBar;