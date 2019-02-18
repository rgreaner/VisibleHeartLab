import React, { Component } from 'react';
import '../../../styles/ResearchSubpages.css';

class AnestheticComplications extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-sm" className="researchSubPageBreadcrumb">Skeletal Muscle</a></h2>
                <div className="subpageContainer">
                    <h5 className="subpageTitle">Anesthetic complications in muscular disorders</h5>
                    <p>The past several years have brought an explosion in knowledge concerning the molecular basis of muscular disorders (1). Not only has information on specific genetic defects been bountiful, but new insights into the pathomechanisms have also been gained. Skeletal muscle makes up over 50% of the human body mass, yet little is known about the effects of volatile anesthetic agents (i.e., halothane, isoflurane, enflurane, desflurane and sevoflurane) on the function of skeletal muscle. Perhaps the reason for this is that only very rarely does the response of skeletal muscle to these agents become a consideration during a surgical procedure. Nevertheless, such effects can be life threatening in those exceptional instances, such as during an episode of malignant hyperthermia (MH) or during an anesthetic complication in a patient with an inherited dystrophic myopathy or myotonia (2). One dramatic sign of an acute MH episode is generalized and sustained activation of skeletal muscles (3). These force responses can be initiated in vitro and are well correlated with increases in intracellular [Ca2+] (4,5). Prolonged increases in intracellular [Ca2+] result in contractures, substrate (ATP) depletion, grossly elevated oxygen consumption, increased production of carbon dioxide and the build-up of vast quantities of metabolic acids. Eventually, membrane function is disrupted and metabolites, potassium and myoglobin are released into the circulation. It is hypothesized that although an abnormal regulation of intracellular Ca2+may be the common underlying cause of anesthetic complications in each of the aforementioned disorders, the primary site of an abnormal response to a volatile anesthetic which initiates this cascade is distinct for each agent (2). Hence, the aim of laboratory's work in this area is to identify the exact mechanism by which volatile anesthetics ultimately cause undesired contractures or contractions (exacerbated myotonia) in such patients. We are determining the effects of various volatile anesthetic agents on gating properties of sarcolemmal ion channels and/or the mobilization of intracellular calcium within skeletal muscle. The investigations are being performed on muscles from: 1) normal humans and patients with an inherited form of myotonia, muscular dystrophy or malignant hyperthermia; 2) normal mice, adr/adr myotonic mice (those with a mutated sarcolemmal Cl- channel) or mdx mice; and 3) normal swine and those susceptible to MH (i.e., animals with a substitution of cysteine for arginine 614 in the RYR1 calcium release channel). Our laboratory is also in the midst of developing a transgenic mouse model for hyperkalemic periodic paralysis. Isolated muscles will be studied intact or as resealed fiber segments. The following electrophysiological techniques are being used to study the effects of these agents on sarcolemmal ion channels: 1) the measurement of extracellularly and intracellularly recorded action potentials; 2) the three-electrode voltage clamp; and 3) the on-cell patch clamp recording of single channel activity. It is expected that the results of these studies will not only clearly define the pathomechanisms induced by such agents which underlie anesthetic complications in myotonic, dystrophic and MH disorders, but will also be of biophysical importance (i.e., considering each volatile anesthetic agent will distinctly modify the lipid matrix of various membranes).</p>

                    <ol>
                        <li>Neuromuscular Disorders: gene location. Neuromusc Disord 5/6: 529-531, 1994.</li>

                        <li>Lehmann-Horn F, Iaizzo PA: Are myotonias and periodic paralyses associated with susceptibility to malignant hyperthermia? Brit J Anaesth 65: 692-697, 1990.</li>

                        <li>Iaizzo PA, Palahniuk RJ. Malignant hyperthermia: diagnosis, treatment, genetics and pathophysiology. Invest Radiol 26: 1013-1018, 1991.</li>

                        <li>Iaizzo PA, Klein W, Lehmann-Horn F. Fura-2 detected myoplasmic calcium and its correlation with contracture force in skeletal muscle from normal and malignant hyperthermia susceptible pigs. Pflügers Arch 1988; 411:648-653.</li>

                        <li>Iaizzo PA, Seewald MJ, Oakes S, Lehmann-Horn F. The use of Fura-2 to estimate myoplasmic [Ca2+] in human skeletal muscle. Cell Calcium 1989;10:151-158.</li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default AnestheticComplications;