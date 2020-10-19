import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import NavigationBar from '../NavigationBar';
import image from '../../images/code.png';

class Name extends Component {

  render() {
    return (
      <Jumbotron style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', color: "#fff",
                          paddingTop: "0vw",paddingBottom: "10vw", backgroundPosition: "right"}}>
        <NavigationBar/>
        <br/><br/>
        <center><h1 style={{fontSize: "75px",color: "white", fontWeight: "800"}}>Soumik Sen</h1></center>
        <center><h1 style={{fontSize: "30px",color: "white", fontWeight: "400"}}>Student</h1></center>
      </Jumbotron>
    );
  }

}

export default Name;
