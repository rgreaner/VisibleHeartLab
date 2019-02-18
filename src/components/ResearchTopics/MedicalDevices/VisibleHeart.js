import React, { Component } from 'react';
import '../../../styles/ResearchSubpages.css';

class VisibleHeart extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-md" className="researchSubPageBreadcrumb">Medical Devices</a></h2>
                <div className="subpageContainer">
                    <h5 className="subpageTitle">Visible Heart®: Functional Cardiac Anatomy using a 4-chamber Isolated Heart Preparation of Various Large Mammalians including Human Hearts</h5>
                    <p>The Visible Heart® isolated heart project evolved from a joint collaboration established in 1997 between the University of Minnesota and Medtronic, Inc. This ongoing research collaboration has resulted in a working four-chamber isolated cardiac model that can simulate in situ physiological cardiac function. This beating heart model has provided an opportunity to simultaneously capture internal images of a working heart on video while recording various physiological parameters, such as electrical potentials, pressure volume changes, ejection fractions, flows, etc. The Visible Heart® methodology is considered an invaluable tool in understanding the relationship between cardiac anatomy and function, as well as the interaction between cardiac anatomy and device therapies.</p>

                    <div>
                        <h6>The functional anatomy provided by the Visible Heart® approach is a useful tool for:</h6>
                        <ul>
                            <li>identifying general pathophysiology (congenital defect, atherosclerosis, valvular defect, etc.);</li>
                            <li>performing comparative anatomical studies of functioning human and animal hearts;</li>
                            <li>observing device interactions (leads, catheter, valves, stents, septal occluders, etc.);</li>
                            <li>obtaining simultaneous external and internal images and conducting comparative image analysis (fluoroscope, endoscope, echo, high-speed, fiberscope); and</li>
                            <li>educating physicians and/or students (via lab visits, live-web cast capabilities, or educational materials).</li>
                        </ul>
                    </div>
                    <p>After a standard cardioplegia procedure, the heart is reanimated by first reperfusing the myocardium in a Langendorff perfusion mode via a constant hydrostatic pressure [1,2]. Langendorff perfusion is necessary since the initially static heart cannot generate any pressure to supply the coronary arteries. All hearts are perfused with a modified, transparent Krebs-Henseleit buffer solution as described in reference [3]. The transparency of the perfusate is one of the main features that enables the visualization of functional cardiac anatomy. After defibrillation, the heart can be placed in a four-chamber working mode in which physiologic preloads and afterloads can be adjusted to best simulate in situ cardiac function. With all chambers functioning in a simulated physiological environment, specialized endoscopes and fiberscopes are utilized to view intracardiac functional anatomy. These methodologies also allow for simultaneous intracardiac and external visualization of a beating heart as well as visualization of valve action, contraction of atria and ventricles, and the architecture of the heart as it beats. These methodologies are an invaluable tool for visualizing the intimate relationship between form and function.</p>
                    <p>To date, human, pig, mini-pig, dog, and sheep hearts have been reanimated using these methodologies. Physiologic assessment of the model is summarized for animal and human hearts in references [3] and [4] respectively. For more details and images, refer to www.visibleheart.com or www.vhlab.umn.edu/atlas/.</p>

                    <ol>
                        <li>Langendorff, O. Untersuchungen am überlebenden Säugethierherzen. Pflügers Arch. ges. Physiol. 61: 291, 1895.</li>
                        <li>Dehnert H. The Isolated Perfused Warm-Blooded Heart according to Langendorff. Methods in Experimental Physiology and Pharmacology: Biological Measurement Techniques V. Biomesstechnik-Verlag March GmbH, West Germany. 1988.</li>
                        <li>Chinchoy E, Soule CL, Houlton AJ, Gallagher WJ, Hjelle MA, Laske TG, Morissett J, Iaizzo PA: Isolated four-chamber working swine heart model. Annals of Thoracic Surgery 70: 1607-1614, 2000.</li>
                        <li>Hill AJ, Laske TG, Coles JA Jr, Sigg DC, Skadsberg ND, Vincent SA, Soule CL, Gallagher WJ, Iaizzo PA: In vitro studies of human hearts. Annals of Thoracic Surgery 79: 168-177, 2005.</li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default VisibleHeart;