import React, { Component } from 'react';
import Name from './Name';
import Profile from './Profile';
import stairs from '../../images/stairs.jpeg';
import Academics from './Academics';
import Skills from './Skills';
import mountain from '../../images/lion.jpg';
import {Link} from 'react-router-dom';
import Projects from './Projects';
import Languages from './Languages';
import Contact from '../Contact';
import mystyle from './mystyle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

class About extends Component {

  render() {
    return (
      <div style={{background:"white"}}>
      <div className={mystyle.iconbar}>
        <Link to="/facebook" >
          <FontAwesomeIcon icon={faFacebook} size="2x"/><br/>
        </Link>
        <Link to="/linkedin">
          <FontAwesomeIcon icon={faLinkedin} size="2x"/><br/>
        </Link>
        <Link to="/github">
          <FontAwesomeIcon icon={faGithub} size="2x"/><br/>
        </Link>
        <Link to="/youtube">
          <FontAwesomeIcon icon={faYoutube} size="2x"/><br/>
        </Link>
      </div>
        <div style={{background: "black"}}>
          <div style={{ backgroundImage: `url(${stairs})`, backgroundAttachment: "fixed",
                        backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            <Name/>
            <Profile/>
            <Academics/>
          </div>
          <div style={{ backgroundImage: `url(${mountain})`, backgroundAttachment: "fixed",
                        backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            <Skills/>
            <Projects/>
            <Languages/>
          </div>
        </div>
        <Contact/>
      </div>
    );
  }

}

export default About;
