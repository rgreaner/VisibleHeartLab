import React, { Component } from 'react';
import '../styles/Affiliations.css';

class Affiliations extends Component {
	render() {
		return (
				<div className='container'>
				<h1>Affiliations</h1>
					<h4>University of Minnesota Affiliations</h4>
					<ul>
						<p><a href="https://carlsonschool.umn.edu/" target="_blank" rel="noopener noreferrer">Carlson School of Management</a></p>
						<p><a href="https://cbs.umn.edu/" target="_blank" rel="noopener noreferrer">College of Biological Sciences</a></p>
						<p><a href="http://bme.umn.edu/" target="_blank" rel="noopener noreferrer">Department of Biomedical Engineering</a></p>
						<p><a href="https://www.physiology.umn.edu/" target="_blank" rel="noopener noreferrer">Department of Integrative Biology and Physiology</a></p>
						<p><a href="http://www.me.umn.edu/" target="_blank" rel="noopener noreferrer">Department of Mechanical Engineering</a></p>
						<p><a href="http://www.neuroscience.umn.edu/" target="_blank" rel="noopener noreferrer">Department of Neuroscience</a></p>
						<p><a href="https://www.surgery.umn.edu/" target="_blank" rel="noopener noreferrer">Department of Surgery</a></p>
						<p><a href="https://www.surgery.umn.edu/research/research-groups/experimental-surgical-services" target="_blank" rel="noopener noreferrer">Experimental Surgical Services</a></p>
						<p><a href="https://tc-cardiopulmonary.embs.org/" target="_blank" rel="noopener noreferrer">IEEE EMBS Technical Committee on Cardiopulmonary Systems</a></p>
						<p><a href="http://www.iem.umn.edu/" target="_blank" rel="noopener noreferrer">Institute of Engineering in Medicine</a></p>
						<p><a href="https://www.heart.umn.edu/" target="_blank" rel="noopener noreferrer">Lillehei Heart Institute</a></p>
						<p><a href="http://www.mdc.umn.edu/" target="_blank" rel="noopener noreferrer">Medical Devices Center</a></p>
						</ul>
				</div>
			);
	}
}

export default Affiliations;