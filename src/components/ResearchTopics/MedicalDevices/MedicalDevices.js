import React, { Component } from 'react';
import '../../../styles/ResearchTopics.css';

class MedicalDevices extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb">Research</a> > <a href="/research-md" className="researchSubPageBreadcrumb">Medical Devices</a></h2>
                <div id="researchTopicContainer">
                    <h3 id="researchTopicComponentMain"><a href="/research-md-1" id="researchTopicATag">Cardiac Devices, Testing, and Design</a></h3>
                    <h3 id="researchTopicComponentMain"><a href="/research-md-2" id="researchTopicATag">Visible Heart®: Functional Cardiac Anatomy using a 4-chamber Isolated Heart Preparation of Various Large Mammalians including Human Hearts</a></h3> 
                    <h3 id="researchTopicComponentMainLast"><a href="/research-md-3" id="researchTopicATag">Electrophysiology, Surface, and Noncontact Mapping</a></h3>  
                </div>
            </div>
        );
    }
}

export default MedicalDevices;