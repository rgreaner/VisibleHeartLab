import React, { Component } from 'react';
import '../../../styles/ResearchSubpages.css';

class CardiacDevices extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-md" className="researchSubPageBreadcrumb">Medical Devices</a></h2>
                <div className="subpageContainer">
                    <h5 className="subpageTitle">Cardiac Devices, Testing, and Design</h5>
                    <p>Since the invention of the implantable pacemaker in the late 1950s, cardiac device development has exploded. Devices now, in part, include catheters, pacing systems, implantable valves, sensors, stents, defibrillation systems, and delivery systems for drug or cell therapies. Importantly, prior to production and market release, these devices must undergo rigorous testing. Often, device designs begin as a rudimentary prototype and must be revised numerous times to be effective and easy to use.</p>

                    <p>We typically perform comparative or complementary studies, both in situ and in vitro [1]. Frequently, cardiac devices are placed both in situ and in vitro within the same animal heart; the ability to conduct experiments in both environments gives us valuable insights as to how such devices may perform in patients. More specifically, our in vitro methods involve isolating the heart and connecting it to the Visible Heart® apparatus, where the heart will beat on its own [2,3]. The heart is supplied with a clear perfusate that provides nutrients and oxygen to enable the heart to sustain its intrinsic rhythm (Figure 1). See visibleheart.com for more details.</p>

                    <p>With the Visible Heart® methodologies, we can directly visualize cardiac devices within the beating heart. For example, different shaped catheters can provide easy access to certain targeted regions of the heart for implanting pacing leads. The Visible Heart® allows direct visualization of these catheters and provides information on what target sites within the heart clinicians can most easily reach.</p>

                    <p>Additionally, the Visible Heart® approach allows for observation of the device-tissue interface. For instance, in a recent study, we implanted active fixation pacing leads a specified number of helix rotations, then observed how the rotating helix affected the myocardial tissue with each rotation [4,5]. We found that too many rotations could result either in the myocardial tissue “wrapping” around the tip of the pacing lead (Figure 2) or “coring” the tissue such that the pacing lead was not attached to any myocardial tissue.</p>

                    <p>The Visible Heart® methodologies not only enable direct visualization of cardiac devices within the heart, but also allow direct visualization of relative cardiac anatomy. Recently, our lab published the first directly visualized pictures and videos of Thebesian valves and other venous valves [6,7,8]. The majority of previous studies observing these valves utilized cadavers; with clear perfusate employed in the Visible Heart® approach, we visualized movements of these valves throughout the cardiac cycle. We also observed a large amount of variability among hearts and have been among the first researchers to report such findings [6,7,8]. An example is pictured below in Figure 3 of a valve of Vieussens, which delineates the coronary sinus and the great cardiac vein [8].</p>

                    <p>We believe that future studies of cardiac devices using the Visible Heart® methodologies will continue to provide important insights relative to cardiac device design. As cardiac devices become more sophisticated, the design and testing of these devices will be even more critical to ensure that the devices improve quality of life for patients that may present with a variety of cardiomyopathies.</p>

                    <p className='tinyText'>Figure 1. Isolated human heart connected to the Visible Heart® apparatus</p>
                    {/* <img></img> */}
                    <p className='tinyText'>Figure 2. A pacing lead (Select Secure™ Lead System Model 3830, Medtronic, Inc.) implanted in the right atrial appendage with tissue wrapped around the pacing lead tip.</p>
                    {/* <img></img> */}
                    <p className='tinyText'>Figure 3. The valve of Vieussens in this heart was a unicuspid leaflet covering the ostium to the great cardiac vein (GCV). Left ventricular venous ostia and the ostium of the posterior vein of the left ventricle (PVLV) are also visible.</p>
                    {/* <img></img> */}

                    <ol>
                        <li>Laske TG, Skadsberg ND, Iaizzo PA: A novel ex vivo heart model for the assessment of cardiac pacing systems. Journal of Biomechanical Engineering 127: 894-898, 2005.</li>

                        <li>Chinchoy E, Soule CL, Houlton AJ, Gallagher WJ, Hjelle MA, Laske TG, Morissett J, Iaizzo PA: Isolated four-chamber working swine heart model. Annals of Thoracic Surgery 70: 1607-1614, 2000.</li>

                        <li>Hill AJ, Laske TG, Coles JA Jr, Sigg DC, Skadsberg ND, Vincent SA, Soule CL, Gallagher WJ, Iaizzo PA: In vitro studies of human hearts. The Annals of Thoracic Surgery 79: 168-177, 2005.</li>

                        <li>Laske TG, Vincent SA, Skadsberg ND, Iaizzo PA: High pacing impedances: Are you overtorquing your leads? Pacing and Clinical Electrophysiology 28: 883-891, 2005.</li>

                        <li>Anderson SE, Skadsberg ND, Laske TG, Benditt DG, Iaizzo PA: Variation in pacing impedance: impact of implant site and measurement method. PACE, 30: 1076-82, 2007.</li>

                        <li>Hill A, Coles JA Jr, Sigg DC, Laske, TG, Iaizzo PA: Images of the human coronary sinus ostium obtained from isolated working hearts. The Annals of Thoracic Surgery 76: 2108, 2003.</li>

                        <li>Hill AJ, Ahlberg SE, Wilkoff BL, Iaizzo PA: Dynamic obstruction to coronary sinus access: the Thebesian valve. Heart Rhythm 3: 1240-1, 2006.</li>

                        <li>Anderson SE, Hill AJ, Iaizzo PA: Venous valves: unseen obstruction to coronary sinus. Journal of Interventional Cardiac Electrophysiology (in press) 2007.</li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default CardiacDevices;