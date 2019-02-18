import React, { Component } from 'react';
import '../../../styles/ResearchTopics.css';
import Cardiac from '../Cardiac/Cardiac';

class BlackBears extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb">Research</a> > <a href="/research-bb" className="researchSubPageBreadcrumb">Black Bears</a></h2>
                <div id="researchTopicContainer">
                    <h3 id="researchTopicComponentMain"><a href="/research-bb-1" id="researchTopicATag">Stimulated Muscle Force Assessment during Hibernation</a></h3>
                    <h3 id="researchTopicComponentMain"><a href="/research-bb-2" id="researchTopicATag"> Wound Healing during Hibernation</a></h3> 
                    <h3 id="researchTopicComponentMain"><a href="/research-bb-3" id="researchTopicATag">Pharmacological Approaches to Cardioprotection</a></h3>  
                    <h3 id="researchTopicComponentMainLast"><a href="/research-bb-4" id="researchTopicATag">Wound Formation, Treatment, and Healing</a></h3> 
                </div>
            </div>
        );
    }
}

export default BlackBears;