import React, { Component } from 'react';
import '../../../styles/ResearchSubpages.css';

class CerebralProtection extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-pc" className="researchSubPageBreadcrumb">Patient Care</a></h2>
                <div className="subpageContainer">
                    <h5 className="subpageTitle">Cerebral protection using mild hypothermia</h5>
                    <p>Brain temperatures markedly influence the consequences of cerebral ischemia, and a mild reduction of core temperature by 1-2°C may confer significant cerebral protection. Various studies have shown that mild hypothermia can be beneficial for stroke patients (lower infarct size and mortality) and febrile patients. Three primary modes of noninvasive cooling can be employed either individually or in combination—convective (forced air blankets), conductive (circulating water blankets/mattresses), and evaporative. However, the relative clinical efficacies of different methods for reducing core body temperature have not been thoroughly studied.</p>
                    <p>In evaluating any type of cooling technique that is employed without anesthesia, it is considered that skin warmth and thus vasodilation must be controlled in order to avoid counter-productive shivering. Thus, initial studies in our lab have aimed to comparatively assess the clinical application of focal facial warming and focal hand warming with several different cooling techniques in healthy, unanesthetized subjects.</p>
                <div>
                    <h6>Related articles from the lab:</h6>
                    <ul>
                        <li>Lanier WL, Iaizzo PA, Murray MJ: The effects of convective cooling and rewarming on systemic and central nervous system physiology in isoflurane-anesthetized dogs. Resuscitation 23: 121-136, 1992.</li>
                        <li>Iaizzo PA, Jeon YM, Sigg DC: Facial warming increases the threshold for shivering. Journal of Neurosurgical Anesthesiology 11: 231-239, 1999.</li>
                        <li>Sweney MT, Sigg DC, Tahvildari S, Iaizzo PA: Shiver suppression using focal hand warming in unanesthetized normal subjects. Anesthesiology 95: 1089-1095, 2001.</li>
                        <li>Pozos RS, Iaizzo PA, Danzl DF, Mills W III: Limits of tolerance to cold. In: Handbook of Physiology: Environmental Physiology, Fregly MJ, Blatteis CM (eds.) Oxford University Press, Chapter 25, pp. 557-578, 1996.</li>
                    </ul>
                </div>

                <div>
                    <h6>Patents related to this research:</h6>
                    <ul>
                        <li>US5860292: Inflatable thermal blanket for convectively cooling a body: Augustine SD, Iaizzo PA: Issued January 19, 1999.</li>
                        <li>US6119474: Inflatable thermal blanket for convectively and evaporatively cooling a body. Augustine SD, Iaizzo PA: Issued September 19, 2000.</li>
                        <li>U6487871: Apparatus, system and method for convectively and evaporatively cooling a body. Augustine SD, Iaizzo PA: Issued December 3, 2002.</li>
                        <li>US 6,581,400: Apparatus, system and method for convectively and evaporatively cooling a head. Augustine SD, Iaizzo PA: Issued June 24, 2003.</li>
                    </ul>
                </div>

                </div>
            </div>
        );
    }
}

export default CerebralProtection;