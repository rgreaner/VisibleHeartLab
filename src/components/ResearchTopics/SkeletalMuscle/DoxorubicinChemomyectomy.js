import React, { Component } from 'react';
import '../../../styles/ResearchSubpages.css';

class DoxorubicinChemomyectomy extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-sm" className="researchSubPageBreadcrumb">Skeletal Muscle</a></h2>
                <div className="subpageContainer">
                    <h5 className="subpageTitle">Doxorubicin Chemomyectomy</h5>
                    <p>Chronic spasms in facial and cervical skeletal muscle can often be painful and functionally disabling. Common treatments for these disorders include oral medications, surgical denervation of the affected muscle groups and, more commonly, injection of botulinum toxin into the affected muscle. The effects of botulinum toxin are temporary and require reinjection every 3-4 months for treatment of cervical dystonia. Furthermore, botulinum in higher doses can cause systemic problems distant from the injection site. Meanwhile, patients can also produce antibodies to the toxin, rendering it ineffective for future treatment.</p>
                    <p>In comparison, doxorubicin is a myotoxin that causes loss of myofibers, resulting in a permanent reduction of uncontrolled muscle spasms. Studies in our lab have focused on identifying the effectiveness of using doxorubicin for the treatment of cervical dystonia. These studies involved directly injecting doxorubicin into rabbit sternocleidomastoid, a large neck muscle, and identifying changes in that muscle group over 1 to 6 months. In vitro [1] and in situ [2] studies showed that doxorubicin-treated sternocleidomastoid muscle produced less force than untreated muscles; further, histological studies showed that doxorubicin reduced muscle cross-sectional area between 75-98% over control [3]. Additionally, the remaining fibers contained a higher proportion of slow and neonatal myosin heavy chain isoforms. From a translational research perspective, our lab has also developed a force assessment approach for measuring human sternocleidomastoid function in vivo [4]. Thus, we have means to assess the relative effectiveness of a given experimental approach in a human patient population.</p>

                    <ol>
                        <li>Falkenberg JH, Iaizzo PA, McLoon LK: Physiological assessment of muscle strength in vitro after direct injection of doxorubicin into rabbit sternocleidomastoid muscle. Movement Disorders 16: 683-692, 2001.</li>

                        <li>Falkenberg JH, Iaizzo PA, McLoon LK. Muscle strength following direct injection of doxorubicin into rabbit sternocleidomastoid muscle in situ. Muscle and Nerve 25: 735-741, 2002.</li>

                        <li>McLoon LK, Falkenberg JH, Dykstra D, Iaizzo PA. Doxorubicin chemomyectomy as a treatment for cervical dystonia: histological assessment after direct injection into the sternocleidomastoid muscle. Muscle and Nerve 21: 1457-1464, 1998.</li>

                        <li>Hong J, Falkenberg JH, Iaizzo PA: Stimulated muscle force assessment of the sternocleidomastoid muscle in humans. Journal of Medical Engineering & Technology 29: 82-89, 2005.</li>

                    </ol>
                </div>
            </div>
        );
    }
}

export default DoxorubicinChemomyectomy;