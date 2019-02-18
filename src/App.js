import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home.js';
import Footer from './components/Footer.js';


import Research from './components/Research.js';
import ResearchTopic from './components/ResearchTopic.js';
import ResearchTopicWriteup from './components/ResearchTopicWriteup.js';

import Outreach from './components/Outreach.js';
import Clinical from './components/Clinical';

import About from './components/About.js';
import Directions from './components/Directions.js';
import Collaborators from './components/Collaborators.js';
import Gift from './components/Gift.js';
import Affiliations from './components/Affiliations.js';
import News from './components/News.js';
import Media from './components/Media.js';
import Publications from './components/Publications.js';
import Contact from './components/Contact.js';



import ThreeDModeling from './components/ResearchTopics/3DModeling/3DModeling.js';
        import CarePrints from './components/ResearchTopics/3DModeling/CarePrints.js';
        import VirtualReality from './components/ResearchTopics/3DModeling/VirtualReality.js';
        import Devices from './components/ResearchTopics/3DModeling/Devices.js';
        import Education from './components/ResearchTopics/3DModeling/Education.js';

import Cardiac from './components/ResearchTopics/Cardiac/Cardiac.js';
      import CardiacPhysiology from './components/ResearchTopics/Cardiac/CardiacPhysiology.js';
      import LargeMammalianAnatomy from './components/ResearchTopics/Cardiac/LargeMammalianAnatomy.js';
      import IntracellularRecording from './components/ResearchTopics/Cardiac/IntracellularRecording.js';
      import SurfaceElectromyography from './components/ResearchTopics/Cardiac/SurfaceElectromyography.js';
      import ActionPotentialMapping from './components/ResearchTopics/Cardiac/ActionPotentialMapping.js';        

import PatientCare from './components/ResearchTopics/PatientCare/PatientCare.js';
      import ThermalManagement from './components/ResearchTopics/PatientCare/ThermalManagement.js';
      import CerebralProtection from './components/ResearchTopics/PatientCare/CerebralProtection.js';
      import LumbarRehab from './components/ResearchTopics/PatientCare/LumbarRehab.js';
      import CardiacFunctionHibernation from './components/ResearchTopics/PatientCare/CardiacFunctionHibernation.js';

import BlackBears from './components/ResearchTopics/BlackBears/BlackBears.js';
      import MuscleForceAssessments from './components/ResearchTopics/BlackBears/MuscleForceAssessment.js';
      import WoundHealing from './components/ResearchTopics/BlackBears/WoundHealing.js';
      import PharmacologicalCardioprotection from './components/ResearchTopics/BlackBears/PharmacologicalCardioprotection.js';
      import WoundFormation from './components/ResearchTopics/BlackBears/WoundFormation.js';
       
import MedicalDevices from './components/ResearchTopics/MedicalDevices/MedicalDevices.js';
      import CardiacDevices from './components/ResearchTopics/MedicalDevices/CardiacDevices.js';
      import VisibleHeart from './components/ResearchTopics/MedicalDevices/VisibleHeart.js';
      import Electrophysiology from './components/ResearchTopics/MedicalDevices/Electrophysiology.js';

import SkeletalMuscle from './components/ResearchTopics/SkeletalMuscle/SkeletalMuscle';
      import AnestheticComplications from './components/ResearchTopics/SkeletalMuscle/AnestheticComplications.js';
      import StimulatedMuscleForce from './components/ResearchTopics/SkeletalMuscle/StimulatedMuscleForce.js';
      import HypoxicDamage from './components/ResearchTopics/SkeletalMuscle/HypoxicDamage.js';
      import DoxorubicinChemomyectomy from './components/ResearchTopics/SkeletalMuscle/DoxorubicinChemomyectomy.js';
      
class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <NavBar />


          <Route exact path="/" component={Home} />

          <Route path="/research" component={Research} />
          <Route path="/research/:topic" component={ResearchTopic} />
          <Route path="/research/:topic/:writeup" component={ResearchTopicWriteup} />

          <Route path="/outreach" component={Outreach} />
          <Route path="/clinical" component={Clinical} />


          <Route path="/about" component={About} />
          <Route path="/contact" component={Directions} />
          <Route path="/collaborators" component={Collaborators} />
          <Route path="/gift" component={Gift} />
          <Route path="/affiliations" component={Affiliations} />
          <Route path="/news" component={News} />
          <Route path="/media" component={Media} />

          <Route path="/publications" component={Publications} />




          <Route path="/research-3d" component={ThreeDModeling} />
                  <Route path="/research-3d-1" component={CarePrints} />
                  <Route path="/research-3d-2" component={VirtualReality} />
                  <Route path="/research-3d-3" component={Devices} />
                  <Route path="/research-3d-4" component={Education} />

          <Route path="/research-ca" component={Cardiac} />
                  <Route path="/research-ca-1" component={CardiacPhysiology} />
                  <Route path="/research-ca-2" component={LargeMammalianAnatomy} />
                  <Route path="/research-ca-3" component={IntracellularRecording} />
                  <Route path="/research-ca-4" component={SurfaceElectromyography} />
                  <Route path="/research-ca-5" component={ActionPotentialMapping} />

          <Route path="/research-pc" component={PatientCare} />
                  <Route path="/research-pc-1" component={ThermalManagement} />
                  <Route path="/research-pc-2" component={CerebralProtection} />
                  <Route path="/research-pc-3" component={LumbarRehab} />
                  <Route path="/research-pc-4" component={CardiacFunctionHibernation} />

           <Route path="/research-bb" component={BlackBears} />
                  <Route path="/research-bb-1" component={MuscleForceAssessments} />
                  <Route path="/research-bb-2" component={WoundHealing} />
                  <Route path="/research-bb-3" component={PharmacologicalCardioprotection} />
                  <Route path="/research-bb-4" component={WoundFormation} />
          
          <Route path="/research-md" component={MedicalDevices} />
                  <Route path="/research-md-1" component={CardiacDevices} />
                  <Route path="/research-md-2" component={VisibleHeart} />
                  <Route path="/research-md-3" component={Electrophysiology} />

          <Route path="/research-sm" component={SkeletalMuscle} />
                  <Route path="/research-sm-1" component={AnestheticComplications} />
                  <Route path="/research-sm-2" component={StimulatedMuscleForce} />
                  <Route path="/research-sm-3" component={HypoxicDamage} />
                  <Route path="/research-sm-4" component={DoxorubicinChemomyectomy} />
          <Footer />
        </div>


      </Router>
    );
  }
}

export default App;
