import React, { Component } from 'react';
import '../../../styles/ResearchSubpages.css';

class StimulatedMuscleForce extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-sm" className="researchSubPageBreadcrumb">Skeletal Muscle</a></h2>
                <div className="subpageContainer">
                    <h5 className="subpageTitle">Stimulated Muscle Force Measurements in Neuromuscular Diseases</h5>
                    <p>Muscle strength assessment is necessary for determining distribution of weakness, disease progression, and/or treatment efficacy for patients with neuromuscular diseases or those with long-term critical illnesses. Manual testing is the standard method used to assess muscle strength, yet it relies on subjective assessment by the clinician and is thus inadequate to quantify small changes in muscle strength. Devices to quantify force objectively (i.e., hand-held dynamometry and isokinetic devices) have been developed and used clinically, however they still rely on voluntary effort. Additionally, neurologically impaired or critically ill patients generally have difficulty with voluntary force assessment tasks. Our lab has designed and tested a noninvasive muscle force assessment device to objectively quantify muscle strength for clinical use (Figure 1). Specifically, we have investigated the following areas related to the muscle force assessment system:</p>

                    <p>Measure force of ankle dorsiflexors (Figure 1) and thumb adductors muscle groups (Figure 2) in patients with chronic inflammatory demyelinating polyneuropathy (CIPD) or another peripheral neuromuscular disorder. The measurement system offered several advantages: 1) improved objectivity and reliability compared to other methods, 2) ability to distinguish weakness due to peripheral nerve or muscle disorders from that caused by central nervous system disorders, and 3) ability to measure temporal aspects of muscle contraction, leading to better understanding of the pathophysiology of neuromuscular diseases [1].</p>
                    {/* <img></img> */}

                    <p>Study of ankle dorsiflexion force during induced paralytic attacks in hyperkalemic and hypokalemic patients. It was found that stimulated force measurements can characterize phenotypic muscle function in these neuromuscular diseases; additionally, it offered several advantages in characterizing muscle dysfunction in periodic paralysis: 1) force measurement was independent of patient effort, 2) it showed a definitive abnormal response early during provocative maneuvers; 3) characteristics of muscle contraction could be measured that were unobservable during voluntary contraction [2].</p>
                    {/* <img></img> */}

                    <p>Adaptation of the muscle force assessment system to measure arm flexor contractile responses of normal subjects (Figure 3). This modified system provided a high degree of reproducibility in generating twitch and/or multiple-pulse stimulations of the arm flexors elicited by either superficially applied motor-point or nerve stimulation [3].</p>
                    {/* <img></img> */}

                    <p>Configuration of the muscle force assessment system for quantitative evaluation of neck muscles (sternocleidomastoid) using normal subjects (Figure 4). The adapted system provided for consistent stimulated force responses in repeated trials, and could be used clinically for patients affected by alterations in head/neck stability (i.e., neck injury, cervical dystonia) [4].</p>
                    {/* <img></img> */}

                    <p>Quantification of isometric skeletal muscle forces in critically ill patients (ankle dorsiflexors), baseline and after one week of ventilation and immobilization in the ICU (Figure 5). It was determined that muscle weakness begins during the early stages of critical illness for patients that are immobilized and ventilated (i.e., reduced torques, shorter contraction times, prolonged relaxation times) and that this system should be further evaluated for use in a long-term ICU setting [5].</p>
                    {/* <img></img> */}

                    <p>Measurement of muscle torque (ankle dorsiflexors) in long-term mechanically ventilated and immobilized ICU patients. The researchers/clinicians determined that this muscle force measurement system was feasible for use in a long-term ICU environment; further, there is clinical merit for monitoring patient status and they plan to modify the existing system for optimal application to the ICU environment (i.e., light-weight plastics)[6].</p>
                    {/* <img></img> */}

                    <ol>
                        <li>Journal of Medical Engineering and Technology 20: 67-74, 1996.</li>

                        <li>Day JW, Sakamoto C, Parry GJ, Lehmann-Horn F, Iaizzo PA: Force assessment in periodic paralysis after electrical muscle stimulation. Mayo Clinic Proceedings 77: 232-240, 2002.</li>

                        <li>Hong J, Iaizzo PA: Force assessment of the stimulated arm flexors: quantification of contractile propoerties. Journal of Medical Engineering & Technology 26:28-35, 2002.</li>

                        <li>Hong J, Falkenberg JH, Iaizzo PA: Stimulated muscle force assessment of the sternocleidomastoid muscle in humans. Journal of Medical Engineering & Technology 29: 82-89, 2005.</li>

                        <li>Ginz HF, Iaizzo PA, Girard T, Urwyler A, Pargger H: Decreased isometric skeletal muscle force in critically ill patients. Swiss Medical Weekly 135:555-561, 2005.</li>

                        <li>Ginz HF, Iaizzo PA, Urwyler A, Pargger H: Use of non-invasive stimulation muscle force assessment in long-term critically ill patients: a future standard in the intensive care unit? Acta Anaesthesiologica Scandinavica (in press) 2007.</li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default StimulatedMuscleForce;