import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';

class Information extends Component {

  render() {
    return (
      <Jumbotron style={{background: "transparent", color: "white",
                        paddingLeft: "10vw",paddingRight: "10vw"}}>
        <h1 style={{fontSize: "40px", fontWeight: "800"}}>Education</h1>
        <br/><br/>
        <h3 style={{ padding: "10px",fontSize: "20px", fontWeight: "500",
                      border: "1px solid #ffffff", display: "inline"}}>2018-now</h3>
        <br/><br/><br/>
        I am currently pursuing Bachelor of Technology Degree in Computer Science and Technology
        from Indian Institute of Engineering, Science and Technology, Shibpur. I am in my 3rd year.
        <br/><br/>
        <hr style={{color: "#ffffff",backgroundColor: "#ffffff", height: ".5",borderColor: "#ffffff"}}/>
        <br/><br/>
        <h3 style={{ padding: "10px",fontSize: "20px", fontWeight: "500",
                      border: "1px solid #ffffff", display: "inline"}}>2018-2018</h3>
        <br/><br/><br/>
        I completed my High School diploma from South Point High School. I had scored 91.2% in <abbr title="All India Senior School Certificate Examination"> AISSCE </abbr>
        <br/><br/>
        <hr style={{color: "#ffffff",backgroundColor: "#ffffff", height: ".5",borderColor: "#ffffff"}}/>
        <br/><br/>
        <h3 style={{ padding: "10px",fontSize: "20px", fontWeight: "500",
                      border: "1px solid #ffffff", display: "inline"}}>2006-2016</h3>
        <br/><br/><br/>
        I completed my Junior and Middle School from South Point School. I secured 89% marks in
        Madhyamik Examination.
        <br/><br/>
        <hr style={{color: "#ffffff",backgroundColor: "#ffffff", height: ".5",borderColor: "#ffffff"}}/>

      </Jumbotron>
    );
  }

}


export default Information;
