import React, { Component } from 'react';
import {Jumbotron,Container,Row,Col} from 'react-bootstrap';

class Contact extends Component {

  render() {
    return (
      <Jumbotron className="bg-dark text-white">
        <Container>
          <Row>
            <Col>
              <h1 style={{fontSize: "30px",fontWeight:"500"}}>Contact Me:</h1>
            </Col>
            <Col>
              <b>Email:</b><br/>
                <a href="rimotimosen@gmail.com">rimotimosen@gmail.com</a><br/><br/>
              <b>Phone:</b><br/>
                9748345124<br/><br/>
              <b>Address:</b><br/>
                100/15, Sastri Narendranath Ganguly Road, Howrah-711104<br/>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }

}

export default Contact;
