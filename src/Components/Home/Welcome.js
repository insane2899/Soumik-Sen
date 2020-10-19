import React, { Component } from 'react';
import {Jumbotron,Container,ProgressBar,Row,Col} from 'react-bootstrap';

class Welcome extends Component {

  render() {
    return (
      <Jumbotron className="bg-white">
        <center><h1 style={{fontSize:"40px", fontWeight: "400"}}>Welcome To My Site</h1></center>
        <br/><br/>
        <Container>
          <center><p style={{justifyContent:"center"}}>I am a student currently studying B.Tech from Indian Institute of Engineering Science
          and Technology, Shibpur. I currently reside in Howrah, India and am looking for an Internship.
          My expertise lie in:</p></center>
        </Container>
        <br/><br/>
        <Container fluid style={{paddingLeft: "10vw", paddingRight: "10vw"}}>
          <Row>
            <Col>
              Java
              <ProgressBar variant="success" now={100}/>
            </Col>
            <Col>
              DataStructures
              <ProgressBar variant="success" now = {100}/>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              Spring Framework & Hibernate
              <ProgressBar variant="success" now={80}/>
            </Col>
            <Col>
              ReactJS
              <ProgressBar variant="success" now = {100}/>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              Java Swing & Graphics
              <ProgressBar variant="success" now={80}/>
            </Col>
            <Col>
              C++
              <ProgressBar variant="success" now = {80}/>
            </Col>
          </Row>
        </Container>
        <br/><br/>
      </Jumbotron>
    );
  }

}

export default Welcome;
