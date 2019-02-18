import React, { Component } from 'react';
import '../../../styles/ResearchSubpages.css';

class PharmacologicalCardioprotection extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-bb" className="researchSubPageBreadcrumb">Black Bears</a></h2>
                <div className="subpageContainer">
                    <h5 className="subpageTitle">Pharmacological Approaches to Cardioprotection</h5>
                    <p>Myocardial ischemia is defined as a greater myocardial tissue oxygen demand than oxygen supply. During ischemic events, the heart’s defense mechanism tends to depress contractility in order to conserve energy. Ischemic events can be the result of cardiac arrest during surgery, occluded coronary arteries, etc., and/or may consequently cause a variety of ischemic syndromes including hibernating myocardium, maimed myocardium, stunned myocardium, infaracted myocardium, and/or silent ischemia [1]. The complications typically associated with these syndromes include cardiac arrhythmias, depressed contractility, reduced pump function, and/or cell death. Because of these complications, there is great clinical interest in protecting the heart from such consequences, i.e. cardioprotection. Our lab has studied pharmacological approaches to cardioprotection using both in situ and in vitro swine models. Specifically, we have studied the role of opioid receptor preconditioning and demonstrated that delta-receptor-specific opioids increase systolic and diastolic function after cold ischemic storage and reduce normalized infarct size after coronary occlusion [2,3]. Additionally, we have shown that kappa-receptor-specific opioids are proarrhythmic and do not provide any means of cardioprotection [4].</p>

                    <p>Currently, we are studying the role of lipids in cardioprotection by assessing in vitro cardiac performance and myocardial oxygen consumption over time using the Visible Heart® methodologies [5]. The modified Krebs perfusate utilized in the Visible Heart® may contain as little as 10% of the amount of oxygen normally carried in blood because it does not include any cellular or synthetic oxygen carriers. Thus, the Visible Heart® may be a highly useful model for the study of cardioprotective pharmacological agents, as the heart is reanimated in a state of global ischemia. Unpublished results shown below in Figure 1 indicate that some lipids may increase myocardial performance during ischemia.</p>

                    <p className='tinyText'>Figure 1. Comparison of cardioprotective pharmacological agents in the isolated swine heart</p>

                    <div>
                        <ol>
                            <li>Iaizzo, PA. Handbook of Cardiac Anatomy, Physiology, and Devices. 2005.</li>
                            <li>Sigg, DC, Coles JA Jr, Gallagher WJ, Oeltgen PR, Iaizzo PA: Opioid preconditioining: myocardial function and energy metabolism. Annals of Thoracic Surgery, 72: 1576-1582, 2001.</li>
                            <li>Sigg, D, Coles JA Jr, Oeltgen P, Iaizzo PA: Role of delta-opioid receptors on infarct size reduction in swine. American Journal of Physiology: Heart and Circulatory. 282: H1953-1960, 2002.</li>
                            <li>Coles JA Jr, Sigg, D, Iaizzo PA: Role of kappa-opioid receptor activation in pharmacological preconditioning in swine. American Journal of Physiology: Heart and Circulatory 284: 2091-2099, 2003.</li>
                            <li>Chinchoy E, Soule CL, Houlton AJ, Gallagher WJ, Hjelle MA, Laske TG, Morissett J, Iaizzo PA: Isolated four-chamber working swine heart model. Annals of Thoracic Surgery 70: 1607-1614, 2000.</li>
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default PharmacologicalCardioprotection;