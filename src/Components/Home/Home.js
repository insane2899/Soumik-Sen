import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Intro from './Intro';
import Welcome from './Welcome';
import Contact from '../Contact';
import img from '../../images/forest2.png';
import Information from './Information';
import Projects from './Projects';
import mystyle from './mystyle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';


class Home extends Component {

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
        <Intro/>
        <div style={{ backgroundImage: `url(${img})`, backgroundAttachment: "fixed",
                      backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
          <Welcome/>
          <Information/>
          <Projects/>
        </div>
        <Contact/>
      </div>
    );
  }

}

export default Home;
