import React, { Component } from 'react';
import '../../../styles/ResearchSubpages.css';

class LargeMammalianAnatomy extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-ca" className="researchSubPageBreadcrumb">Cardiac</a></h2>
                    <div className="subpageContainer">
                        <h5 className="subpageTitle">Large mammalian comparative cardiac anatomy</h5>
                        <p>The use of animal models is critical in understanding cardiovascular physiology and designing new therapeutics targeted at cardiovascular disease. Selection of a specific animal model is based on many different factors including experimental design constraints, anatomy and physiology, cost, manageability of animals in research settings, familiarity of researchers with a specific animal, availability, quantity and quality of obtained data, and relevance to the human condition. Anatomical considerations are often overlooked, but remain an important factor in the selection of a proper model for certain types of cardiovascular research, because similarities and/or differences will determine the applicability of results to humans.</p>
                        <p>Researchers in our lab have compiled previously published information comparing large mammalian cardiac anatomy, determined the current opinions on large mammalian cardiac anatomy, and critically described qualitative and quantitative details of the anatomy of swine, canine, and ovine hearts, all which are used as animal models in cardiovascular research. Additionally, unique methodologies for the study of isolated human hearts have been described. Our results showed two major points:</p>
                        <ol>
                            <li>Researchers typically have a general idea as to which model they feel most closely resembles the human heart, but they do not necessarily understand specifics regarding comparative anatomy. Furthermore, the model that they feel closely resembles the human heart is not the most commonly employed model.</li>
                            <li>Significant differences exist between the most commonly used models in important anatomical regions that may have an impact on current and future cardiovascular device design and pre-clinical trials.</li>
                        </ol>
                        <p>These results provide further insight into large mammalian comparative cardiac anatomy, which will aid in proper animal model selection for cardiovascular research. Additionally, all dimensional measurements from the hearts were published in Dr. Alex Hill's PhD thesis for assistance in development of cardiovascular devices and for extrapolation to the human heart.</p>
                    </div>
            </div>
        );
    }
}

export default LargeMammalianAnatomy;