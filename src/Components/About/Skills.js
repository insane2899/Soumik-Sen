import React, { Component } from 'react';
import {Jumbotron,ProgressBar,Container,Row,Col} from 'react-bootstrap';

class Skills extends Component {

  render() {
    return (
      <Jumbotron style={{background:"white",paddingLeft: "15vw",paddingRight: "15vw"}}>
        <center><h1 style={{fontSize: "40px",fontWeight: "500"}}>Skills</h1></center>
        I am good in Java programming language and have several projects in Java. I know
        Spring Framework and Hibernate and am also good in Java Swing. I am familiar with other
        Java libraries like the Tesseract Optical Character Recognition library, Weka library, Aspect
        Oriented Programming using AspectJ, JFreeChart library and OpenCV library. In other Programming
        languages I am good in C and C++.<br/>
        I know HTML, CSS, JavaScript in frontend and can use Java and PHP in backend. I am familiar with
        Spring Framework in Java, Laravel and Symphony in PHP for backend. I know ReactJS and have used
        VueJS to some extent. I know Bootstrap and among databases I know MySQL and MariaDB.<br/><br/>

        <h1 style={{fontSize: "20px",fontWeight:"500"}}>Programming Languages:</h1>
        <Container fluid style={{paddingLeft: "10vw", paddingRight: "10vw"}}>
          <Row>
            <Col>
              Java
              <ProgressBar variant="success" now={100}/>
            </Col>
            <Col>
              C
              <ProgressBar variant="success" now = {100}/>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              C++
              <ProgressBar variant="success" now={80}/>
            </Col>
            <Col>
              PHP
              <ProgressBar variant="success" now = {70}/>
            </Col>
          </Row>
          <br/>
        </Container>
        <h1 style={{fontSize: "20px",fontWeight:"500"}}>Frontend:</h1>
        <Container fluid style={{paddingLeft: "10vw", paddingRight: "10vw"}}>
          <Row>
            <Col>
              HTML & CSS & Bootstrap
              <ProgressBar variant="success" now={100}/>
            </Col>
            <Col>
              JavaScript
              <ProgressBar variant="success" now = {100}/>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              ReactJS
              <ProgressBar variant="success" now={90}/>
            </Col>
            <Col>
              VueJS
              <ProgressBar variant="success" now = {60}/>
            </Col>
          </Row>
          <br/>
        </Container>
        <h1 style={{fontSize: "20px",fontWeight:"500"}}>Frameworks:</h1>
        <Container fluid style={{paddingLeft: "10vw", paddingRight: "10vw"}}>
          <Row>
            <Col>
              Spring & Hibernate
              <ProgressBar variant="success" now={100}/>
            </Col>
            <Col>
              Laravel
              <ProgressBar variant="success" now = {100}/>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              Symphony
              <ProgressBar variant="success" now={80}/>
            </Col>
            <Col>
              Java Swing
              <ProgressBar variant="success" now={100}/>
            </Col>
          </Row>
          <br/>
        </Container>
        <h1 style={{fontSize: "20px",fontWeight:"500"}}>Essential Skills:</h1>
        <Container fluid style={{paddingLeft: "10vw", paddingRight: "10vw"}}>
          <Row>
            <Col>
              DataStructures
              <ProgressBar variant="success" now={100}/>
            </Col>
            <Col>
              Object Oriented Programming
              <ProgressBar variant="success" now = {100}/>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              Database Management
              <ProgressBar variant="success" now={95}/>
            </Col>
            <Col>
              Android Development
              <ProgressBar variant="success" now = {60}/>
            </Col>
          </Row>
          <br/>
        </Container>
      </Jumbotron>
    );
  }

}

export default Skills;
