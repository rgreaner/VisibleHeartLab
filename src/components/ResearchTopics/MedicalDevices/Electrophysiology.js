import React, { Component } from 'react';
import '../../../styles/ResearchSubpages.css';

class Electrophysiology extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-md" className="researchSubPageBreadcrumb">Medical Devices</a></h2>
                <div className="subpageContainer">
                    <h5 className="subpageTitle">Electrophysiology, Surface, and Noncontact Mapping</h5>
                    <p>Heart rhythm disorders are a major cause of morbidity and mortality in the United States. Sudden cardiac death, usually caused by ventricular arrhythmias, is the leading cause of death in the US. Cardiac electrophysiology (EP) is the study of the electrical rhythms of the heart, and its goal is to understand and treat abnormalities associated with heart rhythm disorders.</p>

                    <p>Our lab uses a multi-level approach to understand cardiac electrophysiology. At a single-cell level, we can record action potentials and various ion channel currents using both intracellular microelectrode and patch-clamp techniques. We have recently characterized many ion channel currents in the HL-5 cardiomyocyte immortalized cell line [1]. On a multi-cellular level, cardiomyocytes are cultured on a micro-electrode array which allows us to visualize the two-dimensional propagation of electrical activity at the micron scale.</p>

                    <p>In large animal models, our lab employs both surface mapping and noncontact mapping of the swine heart in vivo. Surface mapping is performed in collaboration with Dr. Bin He in the Department of Biomedical Engineering at the University of Minnesota. During surface mapping, a matrix of surface electrodes is placed on the chest of the swine and EKG signals are recorded from the electrodes. Later, the animal undergoes an MRI to collect anatomical data. During post-processing, the electrical propagation in the heart is calculated within an anatomically correct model.</p>

                    <p>In our laboratory, we are using noncontact mapping to study endocardial activation in normal and diseased states (i.e., dilated cardiomyopathy, acute myocardial infarction) as well as during cardiac pacing. Currently, we are using the mapping system developed by Endocardial Solutions, Inc. to map the left ventricle. The system employs a multielectrode array catheter with 64 electrodes and a balloon internal to the cateheter which is inflated with a saline-contrast mixture (50%-50%) and placed into the left ventricle. Computer software calculates the position of a standard EP catheter in relation to the multielectrode catheter for the purposes of endocardial geometry definition. Once the geometry is known, the virtual endocardium is divided into more than 3,300 distinct elements. The system measures depolarization potentials from each of the 64 electrodes, solves the inverse Laplacian relationship, and projects the calculated potentials onto the left ventricular endocardium in the graphical user interface (Figure 1).</p>

                    <p>Recently, we have used noncontact mapping to assess the latest depolarization method of biventricular and multi-site pacing [2]. Using the mapping system, pacing sites were localized to the latest point of endocardial depolarization. This pacing method was shown to result in better hemodynamic function than right ventricular apical pacing in healthy swine hearts. Additionally, we have used noncontact mapping to study the effect of pacing site on evoked electrical activation using the Visible Heart® methodologies [3].</p>

                    <p className='tinyText'>Figure 1. Isopotential maps representative of global electrical activation sequences during pacing from the: (A) right atrial appendage, (B) right ventricular outflow tract, and the (C) right ventricular apex. Maps are shown in an anterior to posterior view (colors represent voltage: white-the most depolarized regions to purple-isoelectric regions).</p>
                    {/* <img></img> */}

                    <ol>
                        <li>Xiao YF, TenBroek EM, Wilhelm JJ, Iaizzo PA, Sigg DC: Electrophysiological characterization of murine HL-5 atrial cardiomyocytes. AJP: Cell Physiology, 291:C407-416, 2006.</li>
                        <li>Kimmel MW, Skadsberg ND, Byrd CL, Wright DJ, Laske TG, Iaizzo PA: Single-site ventricular and biventricular pacing: investigation of latest depolarization strategy. Europace (in press) 2007.</li>
                        <li>Laske TG, Skadsberg ND, Hill AJ, Klein GJ, Iaizzo PA: Excitation of the intrinsic conduction system through His and intraventricular septal pacing. Pacing and Clinical Electrophysiology 29:397-405, 2006.</li>

                        <h6>Another related publication from our lab:</h6>
                        <ul>
                            <li>Ahlberg SA, Yue AM, Skadsberg ND, Roberts PR, Iaizzo PA, Morgan JM: Investigation of pacing site-related changes in global restitution dynamics by noncontact mapping. Europace (in press) 2007.</li>
                        </ul>
                    </ol>
                </div>
            </div>
        );
    }
}

export default Electrophysiology;