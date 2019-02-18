import React, { Component } from 'react';
import Image from 'react-image-resizer';
import '../styles/PersonCard.css';

const CVComponent = ({ children, pdf }) => pdf ? (
  <a href={process.env.PUBLIC_URL + "/pdfs/" + pdf} target="_blank">
    {children}
  </a>
) : <div>{children}</div>;

class PersonCard extends Component {
  
  render() {
    return (
      <div className="card-container">
        <div className="card" id="personCard">
          <div className="side">
            <Image className="card-img-top" src={process.env.PUBLIC_URL + "/images/bios/" + this.props.data.img_name} height={249} width={249} /></div>
          <div className="card-body">
          <CVComponent pdf={this.props.data.pdf}>
              <h5 className="card-title">
                {this.props.data.name + " " + this.props.data.credentials}
              </h5>
            </CVComponent>
            <h6 className="card-text">{this.props.data.position}</h6>
            <p className="card-text">{this.props.data.email}</p>
            <p className="card-text">{this.props.data.phone}</p>
          </div>
        </div>
      </div>
			);
  }
}

export default PersonCard;