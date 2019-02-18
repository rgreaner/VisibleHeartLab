import React, { Component } from 'react';
import '../../../styles/ResearchSubpages.css';

class LumbarRehab extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-pc" className="researchSubPageBreadcrumb">Patient Care</a></h2>
                <div className="subpageContainer">
                    <h5 className="subpageTitle">LTX3000TM Lumbar Rehabilitation System</h5>
                    <p className='tinyText'>The LTX3000TM is a lumbar rehabilitation system designed to treat low back pain and stiffness. Appropriate candidates have disk-related back pain or have ungone spine surgery, but continue to have low back or leg pain.</p>
                    <p className='tinyText'>Use of the LTX3000TM is recommended by physicians, physical therapists, rehabilitation specialists and QRCs.</p>
                    <p className='tinyText'>The unique benefits of using the LTX3000TM are that it stabilizes the low back, encourages a neutral spine position, provides lumbar traction, and allows for therapeutic exercise while the user is in a functional seated position.</p>
                    <p className='tinyText'>Additional advantages of prescribing the LTX3000TM are the ease of use and the ability to utilize the unit both at home or work, thus contributing to high patient compliance.</p>
                <div>
                <h6>Recommended Protocol:</h6>
                <ul>
                    <li>3-4 sessions daily, 10-15 minutes per session</li>
                    <li>Recommended usage is 2-3 months. Continued usage determined by physician and/or physical therapist evaluation of patient's progress.</li>
                </ul>
                </div>
                </div>
            </div>
        );
    }
}

export default LumbarRehab;