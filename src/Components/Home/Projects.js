import React, { Component } from 'react';
import {Jumbotron,Card,Button} from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Projects extends Component {

  render() {
    return (
      <Jumbotron className="bg-white text-black">
        <center><h1 style={{fontSize:"40px", fontWeight: "400"}}>Projects</h1></center>
        <div style={{paddingLeft: "20vw",paddingRight:"20vw"}}>
          <Carousel style={{backgroundColor: "none"}}>
            <Card style={{paddingBottom: "1vw"}}>
              <Card.Body>
                <Card.Title>Image Reading</Card.Title>
                <Card.Text>
                  This is a project made using Java 11 and Swing. This is a Graphics User Interface
                  Application that takes an image as input from the user and reads the text present in
                  the image.
                </Card.Text>
                <Button href="https://github.com/insane2899/Image-Reader" variant="primary">Project Link</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Book Store</Card.Title>
                <Card.Text>
                  This is a project made using Java 11, Spring Framework and ReactJS. This is a website
                  where an user can store book data.
                </Card.Text>
                <Button href="https://github.com/insane2899/Book-Store" variant="primary">Project Link</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Calculator</Card.Title>
                <Card.Text>
                  This is a project made using Java 8 and Android Studio. This is a Calculator Application
                  that can be used on android phones.
                </Card.Text>
                <Button href="https://github.com/insane2899/MyCalculatorv2.0" variant="primary">Project Link</Button>
              </Card.Body>
            </Card>
          </Carousel>
        </div>
      </Jumbotron>
    );
  }

}

export default Projects;
