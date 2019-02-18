import React, { Component } from 'react';

class Education extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-3d" className="researchSubPageBreadcrumb">3D Modeling</a></h2>
                <div className="subpageContainer">
                    <h5 className="subpageTitle">Education</h5>
                    <p>Educational outreach is a cornerstone of the Visible Heart Laboratory’s mission statement. Our mission includes teaching people from all walks of life—from middle school age to clinical cardiologists—about cardiac anatomy and device therapy. We host tours of the laboratory facility multiple times per week, and stage “A Heart to Learn” outreach events to bring the lab experience to groups who cannot make it to our facilities. 3D modeling plays a pivotal role in our educational outreach. We isolate and label interesting anatomy and devices in our models to aid our teaching. Additionally, we bring a 3D printer and virtual reality headset to each outreach session, to get the public excited about science. In this way, we aim to engage the future scientists of the world.</p>
                </div>
            </div>
        );
    }
}

export default Education;