import React, { Component } from 'react';
import '../../../styles/ResearchSubpages.css';

class WoundFormation extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-bb" className="researchSubPageBreadcrumb">Black Bears</a></h2>
                <div className="subpageContainer">
                    <h5 className="subpageTitle">Wound Formation, Treatment, and Healing</h5>
                    <p>The occurrence of pressure ulcers among the elderly and in hospitalized patients has an extensive impact on patients and health care providers in terms of decreased quality of life, loss of productivity, and high cost of treatment. Various studies indicate that 50-60% of all pressure ulcers in acute hospital populations develop after admission and thus are deemed preventable (i.e., more frequent risk assessment, treatment plans, specialty devices, etc.). Although extensive literature exists concerning pressure ulcers, there remains no clear consensus regarding the etiology of such wounds. Rather, several factors are known to contribute to the formation and persistence of pressure-related wounds (i.e., elevated pressure over extended time, shear, elevated pressure augmented by elevated temperature, age, poor nutrition, incontinence, fractures, paralysis or lack of sensation, arterial insufficiency, venous stasis, diabetes). Specifically, there are few detailed reports about the thresholds of wound formation with respect to pressure, temperature, and duration of application, and lack of clear consensus about the proper form of treatment. Clinicians use a variety of visual methods to evaluate the status of skin tissue, however these methods lack precision, and quantification of slow or subtle changes may be difficult. Accurate determination of the extent and depth of subsurface injuries would allow for appropriate and timely therapeutic intervention.</p>
                    
                    <div>
                        <h6>Related studies in our lab include the following:</h6>
                        <ul>
                            <li>Development of a porcine model to facilitate investigation of pressure ulcer formation, healing, and prevention (Figures 1 and 2). This model allows for easy, independent modulation of pressure, temperature, and duration parameters to create specific classes of wounds [1].</li>
                            <li>Investigation of the effects of duration of applied pressure and applied temperature on wound formation, as well as the threshold temperature below which focalized cooling will minimize the potential for wound formation using a porcine model. The benefits of focal cooling were evident at an extended duration and at deep tissue layers, and suggest future clinical applications for pressure ulcer prevention and therapy [2].</li>
                            <li>Examination of the use of cutaneous reactive hyperemia as a means for noninvasive assessment of wound severity of newly formed temperature-modulated pressure injuries in a porcine model. This study employed color image analysis to determine the severity of wounds and infrared imaging/computer image processing to detect differences in skin temperature. Both techniques correlated with the severity of injuries as determined by a histologic assessment of biopsied tissue, however infrared imaging provided the better means to assess wound depth [3].</li>
                            <li>Critical assessment of potential methodologies for noninvasive wound evaluation using a color imaging system, development of a method for quantifying histological readings, and testing these techniques on a porcine model of wound formation. Color analyses enabled statistically significant differentiation of mild, moderate, and severe injuries within 30 minutes after application of the injury, and again when the wounds were 5-7 days old; this technique could be adapted for assessing and tracking wound severity in humans in a clinical setting [4].</li>
                            <li>Explicit definition of critical thresholds of applied pressure, duration, and temperature in the formation of pressure ulcers or cutaneous burns in a porcine model. Pathological changes in pressure ulcers were found to begin at the deep muscle and progress upward into the cutaneous layers with increasing pressure and/or duration of contact; muscle degeneration was also observed after 5 hours of ischemia (Figure 3). Thresholds for all four cutaneous layers increased with a decrease in applied temperature, suggesting that these deep tissue changes could be lessened or prevented with appropriate focal cooling. Such predictions of thresholds for injury causation could provide a predictive basis for the design and development of support surfaces and patient turning schedules for the prevention of tissue injury [5].</li>
                            <li>Noninvasive assessment of the severity and depth of pressure injuries in dermal and subdermal tissue using infrared thermography in a porcine model. Two techniques were investigated: 1) thermographic evaluation of wounds at thermal equilibrium with normal room temperature surroundings, and 2) observation of temperature changes that occurred to the wound area after application of focal cooling. Deep tissue injuries were easily distinguished from shallow wounds by their thermal response to focal cooling, suggesting clinical utility for detecting abscessed areas of skeletal muscle that are concealed by a healthy epidermal or dermal bridge [6].</li>
                        </ul>
                    </div>
                    <p className='tinyText'>Figure 1. Cluster of 4 discs was designed to apply pressure to preselected wound sites. Temperature modulation was facilitated with a micro-processor-controlled unit; cooling was provided by a water bath and heating by electrical resistance wire. Temperatures were maintained within ±0.5°C.</p>
                    {/* <img></img> */}
                    <p className='tinyText'>Figure 2. Disc application and subsequent assessment sites</p>
                    {/* <img></img> */}
                    <p className='tinyText'>Figure 3. Illustrative representation of tissue damage at combinations of pressure, temperature, and duration that resulted in tissue alterations</p>
                    {/* <img></img> */}
                    <div>
                        <h6>Patents Related to this Research:</h6>
                        <ul>
                            <li>US5837002: Support apparatus with localized cooling of high-contact-pressure body surface areas. Augustine SD, Iaizzo PA, Sparrow EM, Johnson PS, Arnold RC, Stapf DE: Issued November 17, 1998.</li>
                            <li>US6010528: Support apparatus which cradles a body portion for application of localized cooling to high-contact-pressure body surface areas: Augustine SD, Iaizzo PA, Sparrow EM, Johnson PS, Arnold RC; Issued January 4, 2000.</li>
                            <li>US6123716: Support apparatus which cradles a body portion for application of localized cooling to high contact-pressure body surface areas. Augustine SD, Iaizzo PA, Sparrow EM, Johnson PS, Arnold RC: Issued September 26, 2000.</li>
                            <li>US6224623: Support apparatus which cradles a body portion for application of localized cooling to high contact-pressure body surface areas.. Augustine SD, Iaizzo PA, Sparrow EM, Johnson PS, Arnold RC: Issued May 1, 2001.</li>
                            <li>US6497720: Support apparatus with a plurality of thermal zones providing localized cooling. Augustine SD, Iaizzo PA, Sparrow EM, Johnson PS, Arnold RC: Issued December 24, 2002.</li>
                        </ul>
                    </div>
                    <ol>
                        <li>Kokate JY, Leland KJ, Held AM, Hansen GL, Kveen GL, Johnson BA, Wilke MS, Sparrow EM, Iaizzo PA: Temperature-modulated pressure ulcers: a porcine model. Archives of Physical Medicine and Rehabilitation 76: 666-673, 1995.</li>
                        <li>Iaizzo PA, Kveen GL, Kokate JY, Leland KJ, Hansen GL, Sparrow EM: Prevention of pressure ulcers by focal cooling: histological assessment in a porcine model. Wounds: A Compendium of Clinical Research and Practice 7: 161-169, 1995.</li>
                        <li>Hansen GL, Sparrow EM, Kammamuri R, Iaizzo PA: Assessing wound severity using color and infrared imaging of reactive hyperemia. Wound Repair and Regeneration 4: 386-392, 1996.</li>
                        <li>Hansen GL, Sparrow EM, Kokate JY, Leland KJ, Iaizzo PA: Wound status evaluation using color image processing. IEEE Transactions on Medical Imaging 16: 78-86, 1997.</li>
                        <li>Kokate JY, Leland KJ, Sparrow EM, Iaizzo PA: Critical thresholds for pressure ulcer formation in a porcine model. Wounds: A Compendium of Clinical Research and Practice 9: 111-121, 1997.</li>
                        <li>Hansen GL, Sparrow EM, Kalieta AL, Iaizzo PA: Using infrared imaging to assess the severity of pressure ulcers. Wounds: A Compendium of Clinical Research and Practice 10: 43-53, 1998.</li>
                    </ol> 
                </div>
            </div>
        );
    }
}

export default WoundFormation;