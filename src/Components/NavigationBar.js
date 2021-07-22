import React, { Component } from 'react';

import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavigationBar extends Component {

  render() {
    return (
      <Navbar variant="dark" style={{marginLeft:"20vw",marginRight:"20vw"}}>
        <Link className="navbar-brand" to={"/"}>My Website</Link>
        <Nav className="mr-auto">
        </Nav>
        <Nav >
          <Link to={"/"} className="nav-link">Home</Link>
          <Link to={"/about"} className="nav-link">About</Link>
        </Nav>
      </Navbar>
    );
  }

}

export default NavigationBar;
