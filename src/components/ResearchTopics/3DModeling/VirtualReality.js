import React, { Component } from 'react';

class VirtualReality extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-3d" className="researchSubPageBreadcrumb">3D Modeling</a></h2>
                <div className="subpageContainer">
                    <h5 className="subpageTitle">Virtual Reality</h5>
                    <p>The Visible Heart Laboratory prides itself for being at the forefront of cardiac visualization. Our most recent venture gives a Magic School bus flavor to anatomic learning. With our high resolution Virtual Reality models of human anatomy, the user can explore cardiac anatomy from inside the heart, go spelunking through vasculature, and gain a greater appreciation for medical device applications.</p>
                </div>
            </div>
        );
    }
}

export default VirtualReality;