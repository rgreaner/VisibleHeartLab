import React, { Component } from 'react';
import '../../../styles/ResearchTopics.css';

class Cardiac extends Component {
    render() {
        return (
        <div className='container'>
            <h2><a href="/research" className="researchSubPageBreadcrumb">Research</a> > <a href="/research-ca" className="researchSubPageBreadcrumb">Cardiac</a></h2>
        
            <div id="researchTopicContainer">
               <h3 id="researchTopicComponentMain"><a href="/research-ca-1" id="researchTopicATag">Cardiac physiology (functional assessment)</a></h3>
               <h3 id="researchTopicComponentMain"><a href="/research-ca-2" id="researchTopicATag">Large mammalian comparative cardiac anatomy</a></h3> 
               <h3 id="researchTopicComponentMain"><a href="/research-ca-3" id="researchTopicATag">Intracelluar recording and patch clamp techniques</a></h3>  
               <h3 id="researchTopicComponentMain"><a href="/research-ca-4" id="researchTopicATag">Surface or Transmural Electromyography</a></h3> 
               <h3 id="researchTopicComponentMainLast"><a href="/research-ca-5" id="researchTopicATag">Action Potential Mapping</a></h3> 
            </div>
        </div>
        );
    }
}

export default Cardiac;