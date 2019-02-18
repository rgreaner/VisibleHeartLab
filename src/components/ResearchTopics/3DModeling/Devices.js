import React, { Component } from 'react';
import '../../../styles/ResearchSubpages.css';

class Devices extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-3d" className="researchSubPageBreadcrumb">3D Modeling</a></h2>
                <div className="subpageContainer">
                    <h5 className="subpageTitle">Devices</h5>
                    <p>The Visible Heart Laboratory has established rich collaborations within the medical device community. Combining industry connections with our own anatomic library, we have generated computational models of medical device placements within human anatomy. These models help us to educate the community at-large about medical device therapy, while communicating the nuances of specific technologies with clinicians. Using 3D printing and virtual reality, we can fly through a stent in the left anterior descending coronary artery, follow a catheter through the femoral venous system, visualize a trans-septal puncture, appreciate the size of a leadless pacemaker, and much more.</p>
                </div>
        </div>
        );
    }
}

export default Devices;