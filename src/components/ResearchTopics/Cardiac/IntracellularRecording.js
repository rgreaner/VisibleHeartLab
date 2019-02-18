import React, { Component } from 'react';
import '../../../styles/ResearchSubpages.css';

class IntracellularRecording extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-ca" className="researchSubPageBreadcrumb">Cardiac</a></h2>
                <div className="subpageContainer">
                    <h5 className="subpageTitle">Intracellular Recording and Patch Clamp Techniques</h5>
                    <p>Recording the electrical activity of single cells allows us to study the basic physiology of ion channels and observe how drugs or other agents (i.e., omega-3 fatty acids) may affect these ion channels. In addition, we can use gene therapy techniques to express new channels within cells and detect them using electrophysiology techniques. We use two electrophysiology techniques in our lab to study ion channels: conventional intracellular recording and whole-cell patch clamp.</p>
                    <p>In conventional intracellular recording, a glass microelectrode with a tip of approximately 0.1 micron in diameter is filled with 3M KCl and mounted on a headstage amplifier. A silver wire within the glass capillary tube connected to the headstage amplifier allows the voltage at the tip of the electrode to be precisely measured. The microelectrode/ headstage amplifier apparatus is mounted on a micromanipulator, and a cable connects the headstage amplifier to a larger amplifier. The microelectrode is advanced into the tissue of interest until the tip penetrates a single cell. The membrane potential of that cell can then be recorded in real time. The tissue may be stimulated to elicit an action potential which, in turn, is recorded by the system. Agents may be added to and/or washed out from the buffer to observe how they affect action potential morphology.</p>
                    <p>In whole-cell patch clamp, a similar microelectrode recording apparatus is used. The primary difference is that the microelectrode tip is approximately 1 micron in diameter, and is slowly positioned so that it just contacts the membrane of a cell. Instead of penetrating the membrane, the electrode is sealed or “patched” onto the membrane; using suction, if desired, the patched section of the membrane can be made to burst so that the cytoplasm becomes continuous with the solution inside the electrode. The larger orifice of a patch electrode allows the investigator to control either the current or the voltage across the cell membrane. By modulating either current or voltage, ion channel kinetics may be studied [1].</p>
                    <ol>
                        <li>
                        Xiao YF, TenBroek EM, Wilhelm JJ, Iaizzo PA, Sigg DC: Electrophysiological characterization of murine HL-5 atrial cardiomyocytes. AJP: Cell Physiology 291:C407-416, 2006.
                        </li>
                    </ol>
                </div>
             </div>
        );
    }
}

export default IntracellularRecording;