import React, { Component } from 'react';
import '../../../styles/ResearchTopics.css';

class PatientCare extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb">Research</a> > <a href="/research-pc" className="researchSubPageBreadcrumb">Patient Care</a></h2>
                    <div id="researchTopicContainer">
                        <h3 id="researchTopicComponentMain"><a href="/research-pc-1" id="researchTopicATag">Thermal Management of the Surgical Patient</a></h3>
                        <h3 id="researchTopicComponentMain"><a href="/research-pc-2" id="researchTopicATag">Cerebral protection using mild hypothermia</a></h3> 
                        <h3 id="researchTopicComponentMain"><a href="/research-pc-3" id="researchTopicATag">LTX3000TM Lumbar Rehabilitation System</a></h3>  
                        <h3 id="researchTopicComponentMainLast"><a href="/research-pc-4" id="researchTopicATag">Cardiac Function during Hibernation: EKG and Echocardiographic Analyses</a></h3> 
                    </div>
            </div>
        );
    }
}

export default PatientCare;