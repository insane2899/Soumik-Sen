import React, { Component } from 'react';
import {Jumbotron,ProgressBar} from 'react-bootstrap';

class Languages extends Component {

  render() {
    return (
      <Jumbotron className="bg-white text-black" style={{paddingLeft: "15vw",paddingRight: "15vw"}}>
        <center><h1 style={{fontSize: "40px", fontWeight: "500"}}>Languages</h1></center>
        Bengali - Native Language<br/>
        <ProgressBar variant="success" now = {100}/><br/>
        English<br/>
        <ProgressBar variant="success" now={100}/><br/>
        Hindi<br/>
        <ProgressBar variant="success" now={95}/><br/>
        <br/><br/>
        <center><h1 style={{fontSize: "40px", fontWeight: "500"}}>Hobbies</h1></center>
        Competitive Coding, Gaming and Badminton are my main hobbies. Besides I love
        to read about history and geography. I am an avid reader and love to add new
        technical skills.<br/>
        My Codechef handle is <a href="https://www.codechef.com/users/insane_28">insane_28</a><br/>
        My Hackerrank handle is <a href="https://www.hackerrank.com/rimosoumik">rimosoumik</a><br/>
      </Jumbotron>
    );
  }

}

export default Languages;
