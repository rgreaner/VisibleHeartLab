import React, { Component } from 'react';
import '../../../styles/ResearchSubpages.css';

class SurfaceElectromyography extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-ca" className="researchSubPageBreadcrumb">Cardiac</a></h2>
                <div className="subpageContainer">
                    <h5 className="subpageTitle">Surface or Transmural Electromyography</h5>
                    <p>Surface or transmural electromyography in our lab entails the recording, detection, and analysis of cardiac activity recorded from the epicardial surface or within the heart wall. Recording can be accomplished with the use of needle electrodes (needle electromyography or EMG) or multielectrode arrays for the acquisition of the monophasic action potential (MAP). MAP recordings are important for reconstructing the time course of repolarization of myocardial cells [1]. For clinicians, MAPs are important tools for diagnosing arrhythmias or providing valuable information about local myocardial electrophysiology. It is also considered that new applications for monitoring regional differences in MAP morphologies may be to define areas in which to administer gene or cell therapies.</p>
                    <p>Studies that involve MAP recording can often amass a large volume of data with thousands of epochs from multiple sites. Subsequently, manual analysis of obtained data sets can be time consuming and labor intensive. Furthermore, manual evaluation can be susceptible to inter-observer variability that may significantly influence the interpretation of the analyses.</p>
                    <p>Some of the research in our lab involves designing specialized hardware and software that can ease this burden. Specifically, we have developed algorithms and user interfaces for the annotation of MAP signals at key fiducial points without the reliance on intense signal filtering or special hardware [2]. Our algorithms are subsequently tested within animal and human hearts that are functioning under venous conditions such as normal sinus rhythm and induced focal cardiac ischemia.</p>
                    <p>Our investigative approach incorporates several verification steps to minimize the need for labor intensive annotation corrections. Our current application also has a convenient graphical user interface (GUI) with many features that make viewing, saving, and annotation of recorded MAP signals efficient; it also incorporates features for manual correction. We believe that this research has clinical significance for required MAP analyses elicited by pathological conditions as well as for studying the effects of pharmacologic drugs.</p>
                    <ol>
                        <li>Xiao YF, TenBroek EM, Wilhelm JJ, Iaizzo PA, Sigg DC: Electrophysiological characterization of murine HL-5 atrial cardiomyocytes. AJP: Cell Physiology 291:C407-416, 2006.</li>
                        <li>M. Shrivastav and P.A. Iaizzo, An interactive graphical user interface for comprehensive analysis of human and swine cardiac monophasic action potential. In press.
                        </li>
                    </ol>
                    <div>
                        <h6><strong>Related publications from our lab:</strong></h6>
                        <ul>
                            <li>
                            Ahlberg SA, Yue AM, Skadsberg ND, Roberts PR, Iaizzo PA, Morgan JM: Investigation of pacing site-related changes in global restitution dynamics by noncontact mapping. Europace (in press) 2007.
                            </li>
                            <li>
                            Shrivastav M, Iaizzo P. “Discrimination of ischemia and normal sinus rhythm for cardiac signals using a modified k means clustering algorithm.” Proceedings of the IEEE Engineering in Medicine and Biology Conference, 2007. Lyon, France.
                            </li>
                            <li>
                            Shrivastav M, Iaizzo P. “An interactive graphical user interface for comprehensive analysis of human and swine cardiac monophasic action potential.” In press.
                            </li>
                            <li>
                            Shrivastav M, Iaizzo P. “A circuit and system for localized monophasic action potential recording.” In press.
                            </li>
                            <li>
                            Shrivastav M, Shrivastav R, Iaizzo P. “Following the beat of the cardiac action potential.” IEEE Potentials. 2007 May/June: 26(3), p. 19-25.
                            </li>
                            <li>
                            Shrivastav M, Iaizzo P. “In vivo cardiac monophasic action potential recording using electromyogram needles.” Proceedings of the IEEE Biomedical Systems and Circuits Conference 2006. Imperial College London, United Kingdom.
                            </li>
                            <li>
                            Shrivastav M, Shrivastav R. “Reduction of pacemaker-induced pectoral muscle stimulation using an insulating patch.” Indian Heart Journal. 2002 Mar-Apr;54(2):206-7.
                            </li>
                            <li>
                            Shrivastav M. “Purchase and design preferences for cardiac pacemakers.” Medical Device Technology. 2001 Nov;12(9):40-4.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SurfaceElectromyography;