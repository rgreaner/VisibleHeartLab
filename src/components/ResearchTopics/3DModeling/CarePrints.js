import React, { Component } from 'react';
import '../../../styles/ResearchSubpages.css';

class CarePrints extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-3d" className="researchSubPageBreadcrumb">3D Modeling</a></h2>
                <div className="subpageContainer">
                    <h5 className="subpageTitle">CarePrints</h5>
                    <p>The CarePrints program was established in 2015 as a way to help families better understand their child’s surgery to repair a congenital defect. Instead of using just standard CT or MRI images to try and explain the complex defects, the same data is used to generate a 3D model. This model is 3D printed and given to the family, allowing the surgeon to point out and explain each defect and how it is affecting the patient.</p>
                </div>
            </div>
        );
    }
}

export default CarePrints;