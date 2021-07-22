import React, { Component } from 'react';
import {Jumbotron,Container} from 'react-bootstrap';
import NavigationBar from '../NavigationBar';
import bgimage from '../../images/desktop2.jpg';
import me from '../../images/soumik.jpg';

class Intro extends Component {
  render() {
    return (
      <Jumbotron style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', color: "#fff",
                          paddingTop: "0vw", backgroundPosition: "center"}}>
          <NavigationBar/>
          <Container style={{ paddingTop: "200px", paddingBottom: "15vw",
                              paddingLeft: "10vw", paddingRight: "10vw"}}>
            <center><img style={{width: "150px", height: "150px", overflow:"hidden", borderRadius: "75px",
                            border: "5px solid white"}} src={me}/></center>
            <center><h1 style={{fontSize: "50px", fontWeight: "400"}}> Hello, I'm Soumik Sen</h1></center>
            <center><h3 style={{fontWeight: "300"}}>Student</h3></center>
            <br/><br/><br/>
          </Container>
    </Jumbotron>
    );
  }
}

export default Intro;
