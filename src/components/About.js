import React, { Component } from 'react';
import PersonCard from './PersonCard.js';
import peopleJson from '../json/people.json';
import '../styles/About.css';

var people = peopleJson['people'];

class About extends Component {

	compareNames(a, b) {
		a = a.name.split(" ")[1];
		b = b.name.split(" ")[1];
		return a.localeCompare(b);
	}


	render() {

		const paul = people.filter(person => person.name === "Paul A. Iaizzo")[0];

		const faculty = people.filter(person => person.name !== "Paul A. Iaizzo"
			&& person.designations.includes("Faculty")).sort(this.compareNames);

		const staff = people.filter(person =>
			person.designations.includes("Staff")).sort(this.compareNames);

		const adjunct = people.filter(person =>
			person.designations.includes("Adjunct")).sort(this.compareNames);

		const doctoral = people.filter(person =>
			person.designations.includes("Doctoral")).sort(this.compareNames);

		const masters = people.filter(person =>
			person.designations.includes("Masters")).sort(this.compareNames);

		const volunteers = people.filter(person =>
			person.designations.includes("Volunteer")).sort(this.compareNames);


		return (
			<div className='container'>
				<h1>Our Lab</h1>
				<p id="aboutParagraph">Dr. Paul A. Iaizzo has been at the University of Minnesota since 1990,
				performing research and teaching graduate and
				 undergraduate courses. In 1997, Dr. Iaizzo and his
				 coworkers began working on large mammalian isolated
				 heart models, and thus the Visible Heart® laboratory was
				 created in collaboration with Medtronic. Today, this
				 lab is a premiere place to perform translational systems
				 physiology research which ranges from cellular and tissue
				 studies to organ and whole body investigations. The Visible Heart®
				 lab embodies a creative atmosphere which is energized by
				 some of the best and brightest students at the University.
				 Our lab staff has over 100 years of collective
				 research experience and functions as a highly efficient
					 and productive team.</p>

				<h1>Our People</h1>
				<div className="dropdown show">
					<a className="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Jump to...
  					</a>
					<div className="dropdown-menu" id="jumpToMenuDiv" aria-labelledby="dropdownMenuLink">
						<a className="dropdown-item" id="jumpToMenu" href="#faculty">Faculty</a>
						<a className="dropdown-item" id="jumpToMenu" href="#staff">Staff</a>
						<a className="dropdown-item" id="jumpToMenu" href="#adjunct">Adjunct Assistant Professors</a>
						<a className="dropdown-item" id="jumpToMenu" href="#doctoral">Doctoral/Postdoctoral Students</a>
						<a className="dropdown-item" id="jumpToMenu" href="#masters">Masters Students</a>
						<a className="dropdown-item" id="jumpToMenu" href="#volunteers">Volunteers, Undergraduate Students,
					Casual/Temps/Directed Research</a>



					</div>
				</div>

				<h2 id="faculty">Faculty</h2>
				<div className="PersonGroup">
					<PersonCard data={paul} />
					{faculty.map(person => <PersonCard data={person} />)}
				</div>

				<h2 id="staff">Staff</h2>
				<div className="PersonGroup">
					{staff.map(person => <PersonCard data={person} />)}
				</div>

				<h2 id="adjunct">Adjunct Assistant Professors</h2>
				<div className="PersonGroup">
					{adjunct.map(person => <PersonCard data={person} />)}
				</div>

				<h2 id="doctoral">Doctoral/Postdoctoral Students</h2>
				<div className="PersonGroup">
					{doctoral.map(person => <PersonCard data={person} />)}
				</div>

				<h2 id="masters">Masters Students</h2>
				<div className="PersonGroup">
					{masters.map(person => <PersonCard data={person} />)}
				</div>

				<h2 id="volunteers">Volunteers, Undergraduate Students,
					Casual/Temps/Directed Research</h2>
				<div className="PersonGroup">
					{volunteers.map(person => <PersonCard data={person} />)}
				</div>
			</div>
		);
	}
}

export default About;