import React, { Component } from 'react';
import {Jumbotron,Container,Row,Col} from 'react-bootstrap';
import me from '../../images/Soumik.jpeg';

class Profile extends Component {

  render() {
    let age = new Date().getFullYear() - 2000;
    return (
      <Jumbotron className="text-white" style={{paddingTop: "2vw", background: "black"}}>
        <center><h1 style={{fontSize: "40px", fontWeight: "400",color: "white"}}>Profile</h1></center>
        <Container>
          <Row>
            <Col>
              <h1 style = {{fontSize: "25px", fontWight: "300", color: "white"}}>About me</h1>
              <p style={{align: "left"}}>I am a motivated and responsible college student.
                                        I possess a good problem solving skill and a strong drive
                                        to see things through to completion.
              </p>
            </Col>
            <Col>
            <center><img style={{width: "160px", height: "160px", overflow:"hidden", borderRadius: "80px",
                            }} src={me}/></center>
            </Col>
            <Col>
              <h1 style = {{fontSize: "25px", fontWight: "300", color: "white"}}>Details</h1>
              <b>Name:</b><br/>
              Soumik Sen<br/>
              <b>Age:</b><br/>
              {age}<br/>
              <b>Location:</b><br/>
              Howrah, India
            </Col>
          </Row>
        </Container>
        <p style={{textAlign: "right"}}><a href="./Documents/Resume.pdf"><b>Download Resume</b></a></p>
      </Jumbotron>
    );
  }

}

export default Profile;
