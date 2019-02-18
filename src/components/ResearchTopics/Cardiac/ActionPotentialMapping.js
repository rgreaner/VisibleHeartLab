import React, { Component } from 'react';
import '../../../styles/ResearchSubpages.css';

class ActionPotentialMapping extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-ca" className="researchSubPageBreadcrumb">Cardiac</a></h2>
                <div className="subpageContainer">
                    <h5 className="subpageTitle">Action Potential Mapping</h5>
                    <p>Cardiac action potential mapping is an important tool for both clinicians and researchers. Analysis of the monophasic action potential (MAP) can lead to insight regarding ionic flux across membranes, electro-mechanical coupling, activation time, repolarization and depolarization cycles, and arrhythmia. More importantly, MAP recordings provide insight into local cellular electrophysiology, which can provide a very precise index of ischemia compared to measurements from surface (skin) electrodes.</p>
                    <p>MAP recordings have been conducted for over a century, with the earliest experiments in 1882 by Burdon-Sanderson and Page [1,2]. A number of mid 20th century action potential compilations were also made by Hodgkin (1951) and Grundfest (1947, 1961) using wick, pressure, and intracellular electrodes that facilitated an understanding of membrane structure and properties [3,4]. These studies were also important for elucidating the sequence of chemical and electrical events that occur during impulse propagation. Other clinical uses of MAP recording today include:</p>
                    <ul>
                        <li>
                        Evaluation of potential benefits of antiarrhythmic drugs: action potential analysis allows for the quantification of myocardial repolarization, a way to evaluate the specific electrophysiological effects of pharmacologic intervention.
                        </li>
                        <li>Study of the effects of the dispersion profile on relative ventricular repolarization.
                        </li>
                        <li>
                        Investigation of T waves and/or underlying mechanisms of elicited T wave alternans.
                        </li>
                        <li>
                        Facilitation of the localization of precise ablation targets.
                        </li>
                        <li>
                        Detection of regional myocardial ischemia.
                        </li>
                    </ul>
                    <p>In our lab, action potential waveforms are acquired directly from the myocardium. Several methods exist for the acquisition of such signals. The major methods include the use of glass micropipette electrodes, metal electrodes of various design, multielectrode arrays, optical mapping, and contact or non-contact endocardial mapping. There are various designs for metal recording electrodes which are employed to monitor action potential waveforms extracellularly.</p>
                    <p>Our method involves using a needle electrode with two embedded conductors. The spacing between the active and reference conductors can be manipulated to control the sensing area. A permutation to this method involves using an internal conductor needle and the cannula of the needle as the reference electrode. The internal conducting wire is electrically isolated from the cannula. In a monopolar configuration, the needle is a single shaft, and the reference is taken from the subject ground. Our most frequently used electrode spacing is 0.30 mm, which allows for very local recording of myocardial activity.</p>
                    <p>Future projects in our lab include detailed cardiac ischemia studies using a local infarct model and the identification of ischemic regions and border zones. We are also in the process of setting up an optical mapping system that will allow monitoring the wavefront of propagation around regions of interest.</p>

               <div>
                   <ol>
                       <li>Hodgkin AL: The ionic basis of electrical activity in nerve and muscle. Cambridge Philosophical Society: Biological Reviews 26; 339-401, 1951.</li>
                       <li>
                       Sahakian AV, Peterson MS, Shkurovich S, Hamer M, Votapka T, Ji T, Swiryn S: A simultaneous multichannel monophasic action potential electrode array for in vivo epicardial repolarization mapping. IEEE Trans Biomed Eng 48; 345-53, 2001.
                       </li>
                       <li>
                       Grundfest H: Comparative electrobiology of excitable membranes. Adv Comp Physiol Biochem 2; 1-116, 1966.
                       </li>
                       <li>
                       Laske TG, Iaizzo PA: The cardiac conduction system. In Handbook of Cardiac Anatomy, Physiology, and Devices. Iaizzo PA, Ed. Totowa, N.J., Humana Press Inc., pp. 123-136, 2005.
                       </li>
                   </ol>
                   <h6><strong>Related Publications from our lab:</strong></h6>
                   <ul>
                       <li>Ahlberg SE, Grenz NA, Ewert DL, Iaizzo PA, Mulligan LJ: Effect of pacing site on systolic mechanical restitution curves in the in vivo canine model. Cardiovascular Engineering (in press) 2007.</li>
                       <li>
                       Shrivastav M, Iaizzo P: Discrimination of ischemia and normal sinus rhythm for cardiac signals using a modified k means clustering algorithm. Proceedings of the IEEE Engineering in Medicine and Biology Conference, 2007. Lyon, France.
                       </li>
                       <li>
                       Shrivastav M, Iaizzo P: An interactive graphical user interface for comprehensive analysis of human and swine cardiac monophasic action potential. Submitted to Computers in Biology and Medicine 2007.
                       </li>
                       <li>
                       Shrivastav M, Iaizzo P: A circuit and system for localized monophasic action potential recording. In press, 2007.
                       </li>
                       <li>
                       Shrivastav M, Shrivastav R, Iaizzo P: Following the beat of the cardiac action potential. IEEE Potentials. 26; 19-25, 2007.
                       </li>
                       <li>
                       Shrivastav M, Iaizzo P: In vivo cardiac monophasic action potential recording using electromyogram needles. Proceedings of the IEEE Biomedical Systems and Circuits Conference 2006. Imperial College London, United Kingdom.
                       </li>
                       <li>
                       Shrivastav M, Shrivastav R: Reduction of pacemaker-induced pectoral muscle stimulation using an insulating patch. Indian Heart Journal 54; 206-207, 2002.
                       </li>
                       <li>
                       Shrivastav M: Purchase and design preferences for cardiac pacemakers. Medical Device Technology 12; 40-44, 2001.
                       </li>
                   </ul>
                </div>
                </div>
            </div>
        );
    }
}

export default ActionPotentialMapping;