import React, { Component } from 'react';
import {Jumbotron,Card,Button} from 'react-bootstrap';
import {Carousel} from 'react-responsive-carousel';
import mystyle from './mystyle.module.css';


class Projects extends Component {

  render() {
    return (
      <Jumbotron style={{background: "transparent",paddingBottom: "10vw",paddingLeft: "20vw", paddingRight: "20vw"}}>
        <center><h1 style={{fontSize:"40px",fontWeight:"500",color:"white"}}>Projects</h1></center>
        <Carousel showArrows={true} style={{zIndex: "5"}}>
              <Card className={mystyle.cardstyle}>
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
              <Card className={mystyle.cardstyle}>
                <Card.Body>
                  <Card.Title>Book Store</Card.Title>
                  <Card.Text>
                    This is a web application made using Java 11 and Spring Framework. It can store book name,cost,
                    price and isbn number in a table and display them to an user anytime.
                  </Card.Text>
                  <Button href="https://github.com/insane2899/Book-Store" variant="primary">Project Link</Button>
                </Card.Body>
              </Card>
              <Card className={mystyle.cardstyle}>
                <Card.Body>
                  <Card.Title>Address Book</Card.Title>
                  <Card.Text>
                    This is a project made using Java 11 and Swing. This is a Graphics User Interface
                    Application that can be used as an address book. The user can input data and the data will
                    be stored in the application and displayed whenever nessecary.
                  </Card.Text>
                  <Button href="https://github.com/insane2899/Address-Book-Applet" variant="primary">Project Link</Button>
                </Card.Body>
              </Card>
              <Card className={mystyle.cardstyle}>
                <Card.Body>
                  <Card.Title>Article Localization</Card.Title>
                  <Card.Text>
                    This is a project made using Java 11. This application takes the image of a newspaper from user
                    and localizes all the articles of the newspaper and stores them in image format. If the user wants
                    the articles can be converted into text and can be segregated according to their categories
                  </Card.Text>
                  <Button href="https://github.com/insane2899/Newspaper-Article-Localization" variant="primary">Project Link</Button>
                </Card.Body>
              </Card>
              <Card className={mystyle.cardstyle}>
                <Card.Body>
                  <Card.Title>Calculator</Card.Title>
                  <Card.Text>
                    This is a project made using Java 8 and Android Studio. This is a calculator which is an android application
                    and can be opened on any android smartphone.
                  </Card.Text>
                  <Button href="https://github.com/insane2899/MyCalculatorv2.0" variant="primary">Project Link</Button>
                </Card.Body>
              </Card>
          </Carousel>
      </Jumbotron>
    );
  }

}

export default Projects;
