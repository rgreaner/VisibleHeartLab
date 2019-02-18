import React, { Component } from 'react';
import '../../../styles/ResearchSubpages.css';

class CardiacFunctionHibernation extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-pc" className="researchSubPageBreadcrumb">Patient Care</a></h2>
                    <div className="subpageContainer">
                        <h5 className="subpageTitle">Cardiac Function during Hibernation: EKG and Echocardiographic Analyses</h5>
                        <p>Black bears (Ursus americanus) remain inactive during hibernation, during which time their body temperatures drop to approximately 4°C below normal and they do not eat, drink, urinate, or defecate. Yet, during this time, hibernating bears can return to apparently normal systemic function within minutes of arousal. The hearts of hibernating bears must be conservative in terms of energy expenditure, and must also be capable of supporting rapid arousal in the event of threats (i.e., predators). A reduction in cardiovascular function without adequate protection in large mammals (including humans) would, within hours, result in irreversible ischemic tissue damage.</p>
                        <p>Along with the Department of Natural Resources and Medtronic, Inc., our lab has studied the cardiovascular performance of hibernating bears in the wild. Implantable data recorders, echocardiography, and electrocardiography were used to show that cardiac mass and electrophysiology are conserved during hibernation [1]. A dramatic heart rate modulation from exceptionally low values (4.5 beats/min), accelerated by up to 865% during inspiration, minimizes energy expenditure while maintaining cardiac mass and adequate brain and tissue perfusion.</p>
                        <p>This adaptive cardiac physiology may have broad implications for human medicine (i.e., Seasonal Affective Disorder, heart failure, heart attack) and possibly space travel, since it would allow for prolonged periods of inactivity while maintaining both cardiac capacity and alertness.</p>

                        <ol>
                            <li>Laske TG, Harlow HJ, Werder JC, Marshall MT, Iaizzo PA: High capacity implantable data recorders: system design and experience in canines and denning black bears. Journal of Biomechanical Engineering 127: 964-971, 2005.</li>
                        </ol>
                    </div>
            </div>
        );
    }
}

export default CardiacFunctionHibernation;