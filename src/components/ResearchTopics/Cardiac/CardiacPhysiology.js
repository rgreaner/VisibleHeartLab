import React, { Component } from 'react';
import '../../../styles/ResearchSubpages.css';

class CardiacPhysiology extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-ca" className="researchSubPageBreadcrumb">Cardiac</a></h2>
                <div className="subpageContainer">
                    <h5 className="subpageTitle">Cardiac Physiology (functional assessment)</h5>
                    <p>Cardiac physiology can be described in terms of hemodynamics, structure, electrical properties, and/or metabolic processes. Changes in any of these parameters may provide unique insights to physicians relative to the cardiac status of their patient. By using multiple imaging and physiologic monitoring modalities, the Visible Heart® laboratory is investigating which parameters (or combination of parameters) provide physicians with the most accurate cardiac assessments of various types of patients and perhaps the best means to obtain the information.</p>

                    <p>The Visible Heart® laboratory is equipped to monitor these measures of cardiac performance through a variety of methods. For example, hemodynamic parameters can be measured noninvasively using echocardiography, or invasively using pressure catheters, electromagnetic flow catheters, and/or Doppler flow monitors. Chamber volume measurements can be obtained using echocardiography, sonomicrometry crystals, and/or a conductance catheter. The measurements obtained from these modalities can then be used to functionally assess the performance of the heart through such derived parameters as ejection fraction and/or the rate of change of pressure during systole in the left ventricle. Structural parameters can be measured noninvasively through echocardiography, fluoroscopy, and MRI, invasively using direct visualization during Visible Heart® preparations, or finally with dissection upon termination of the study. Electrical parameters can be measured noninvasively using an electrocardiogram, or invasively using optical mapping or noncontact mapping.</p>
                    
                    <p>Additionally, the Visible Heart® laboratory regularly employs these multiple imaging and physiologic monitoring modalities to assess the delivery and functionality of implanted devices within the heart.</p>
                </div>
            </div>
        );
    }
}

export default CardiacPhysiology;