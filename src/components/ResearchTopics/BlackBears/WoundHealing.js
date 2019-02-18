import React, { Component } from 'react';
import '../../../styles/ResearchSubpages.css';

class WoundHealing extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-bb" className="researchSubPageBreadcrumb">Black Bears</a></h2>
                <div className="subpageContainer">
                    <h5 className="subpageTitle">Wound Healing during Hibernation</h5>
                    <p>Hibernating black bears (Ursus americanus) elicit profound abilities to resolve injuries while mildly hypothermic (30-35ºC) and not eating, drinking, urinating, or defecating. We continue to perform investigative studies on free-ranging black bears during denning in early winter and again in late winter. To date, three methods have been employed to induce small cutaneous wounds during three consecutive winters on 10 different bears, two of which were studied for more than one winter. Tissue samples were processed by routine histological methods and evaluated by light microscopy. All sites healed with remodeling of the dermal layers, reduced expression of scarring, and limited regrowth of hair. Even significant injuries that were incurred prior to hibernation, but which had not begun to heal at the time of hibernation, were completely resolved in 1-2 months. This unique healing ability is a clear survival advantage for bears, as those unable to heal while hibernating could suffer loss of body fluids, greatly increased metabolic demands, and/or toxicity from infection. Other hibernating mammals, however, appear to lack this ability. These observations may provide new insights, and further investigation may uncover new biological materials for treating wounds with little or no scarring in humans, especially in patients who are malnourished, hypothermic, diabetic, or elderly.</p>
                </div>
            </div>
        );
    }
}

export default WoundHealing;