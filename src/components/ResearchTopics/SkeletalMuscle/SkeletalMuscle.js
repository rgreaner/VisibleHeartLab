import React, { Component } from 'react';
import '../../../styles/ResearchTopics.css';

class SkeletalMuscle extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb">Research</a> > <a href="/research-sm" className="researchSubPageBreadcrumb">Skeletal Muscle</a></h2>
                    <div id="researchTopicContainer">
                        <h3 id="researchTopicComponentMain"><a href="/research-sm-1" id="researchTopicATag">Anesthetic complications in muscular disorders</a></h3>
                        <h3 id="researchTopicComponentMain"><a href="/research-sm-2" id="researchTopicATag">Stimulated Muscle Force Measurements in Neuromuscular Diseases</a></h3> 
                        <h3 id="researchTopicComponentMain"><a href="/research-sm-3" id="researchTopicATag">Prevention of hypoxic damage using opioid agonists</a></h3>  
                        <h3 id="researchTopicComponentMainLast"><a href="/research-sm-4" id="researchTopicATag">Doxorubicin Chemomyectomy</a></h3> 
                    </div>
            </div>
        );
    }
}

export default SkeletalMuscle;