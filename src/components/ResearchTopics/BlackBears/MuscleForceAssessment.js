import React, { Component } from 'react';
import '../../../styles/ResearchSubpages.css';

class MuscleForceAssessments extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-bb" className="researchSubPageBreadcrumb">Black Bears</a></h2>
                <div className="subpageContainer">
                    <h5 className="subpageTitle">Stimulated Muscle Force Assessment during Hibernation</h5>
                    <p>Black bears (Ursus americanus) spend several months each winter confined to their dens, during which time their body temperatures drop to approximately 4°C below normal and they do not eat, drink, urinate, defecate or show other perceptible activity. In nonhibernating mammals, these conditions would typically result in severe muscle atrophy, causing a loss of strength and endurance. However, initial studies in our lab indicate that bears appear to conserve muscle strength while denning.</p>

                    <p>In one study, we measured the strength of tibialis anterior muscles of bears using a modified, noninvasive force assessment system during late autumn, just after denning, and again early in the spring before the bears emerged from their dens (Figure 1). We found that overwintering black bears lost less than 23% of their muscle strength over 130 days [1].</p>

                    <p>In another study, we extended these initial observations to measure resistance to fatigue properties of the tibialis anterior muscles of hibernating bears during both early and late winter using the same noninvasive force assessment system as before. After 110 days of anorexia and confinement, skeletal muscle strength loss in hibernating bears was about one-half that in humans confined to bed rest. Bears lost only 29% of muscle strength over 110 days of denning without food, while humans on a balanced diet but confined to bed for 90 days have been reported to lose 54% of their strength. Additionally, muscle contractile properties, including contraction time, half-relaxation time, half–maximum value time, peak rate of development and decay, time to peak force development, and time to peak force decay did not change, indicating that no small-scale alterations in whole-muscle function occurred over the winter [2].</p>

                    <p>These studies suggest that black bears have a high resistance to skeletal muscle atrophy despite being subjected to long-term anorexia and limited mobility. We believe that such studies will help us understand more about treating muscle disorders and the effects of prolonged hospital-bed confinement, antigravity and long-distance space travel on humans.</p>

                    <p className='tinyText'>Figure 1. Noninvasive system for measuring muscle strength by force assessment in a hibernating bear</p>
                    {/* <img></img>
                    */}
                    <div>
                        <ol>
                            <li>Laske TG, Harlow HJ, Werder JC, Marshall MT, Iaizzo PA: High capacity implantable data recorders: system design and experience in canines and denning black bears. Journal of Biomechanical Engineering 127: 964-971, 2005.</li>
                            <li>Lohuis TD, Harlow HJ, Beck TD, Iaizzo PA: Hibernating bears conserve muscle strength and maintain fatigue resistance. Physiological and Biochemical Zoology, 80: 257-269, 2007.</li>
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default MuscleForceAssessments;