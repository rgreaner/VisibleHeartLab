import React, { Component } from 'react';
import { Link } from "react-router-dom";
import researchTopicsJson from "../json/researchTopics.json";

var data = researchTopicsJson["research"];

class ResearchTopic extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const {match} = this.props;
    //Hate this should fix this.
    let currData = data.filter(el => el.simple_name == match.params.topic)[0];
    console.log("research" + "/" + currData.simple_name + "/" + currData.topics[0].md_path);


    return (
        <div>
          <h1>Research > {currData.name}</h1>
          {currData.topics.map(topic => <a href={"research" + "/" + currData.simple_name + "/" + topic.md_path}>{topic.name}</a>)}

        </div>
      );
  }
}

export default ResearchTopic;