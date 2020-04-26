import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import SectionCarousel from "./SectionCarousel";
import { authUser } from "actions/user";
import { changeUserSession } from "actions/user";
import { connect } from "react-redux";
import { Link, List } from "@material-ui/core";
import { MDBContainer, MDBFooter } from "mdbreact";

export class LandingPage extends React.Component {
  state = {
    login: true,
  }

  toSignIn = () => {
    try {
      this.props.history.push({
        pathname: '/login/trainee'
      })
    } catch (error) {
      console.log(error)
    }
  }


  render() {
    return (
      <div id="main">
        <ExamplesNavbar status={{ name: "home" }} toLogin={this.toSignIn} toSignUp={this.toSignUp} doChange={this.state.login} />
        <LandingPageHeader />
        <div>
        </div>,
        <div className="main" >
          <div className="section text-center" style={{
            backgroundColor: "#f5f5f5"
          }}>
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" id="project" md="8">
                  <h1 className="title"><img src="http://www.i2symbol.com/pictures/emojis/8/b/3/3/8b3369b795d23d9fb0929137b6eae779_384.png" style={{ width: "150px", height: "150px" }} /><b>What it is ?</b></h1>
                  <h5 className="description"><b style={{ color: "black" }}>
                    This is an application that consists of a mobile and also a website about programming classes. In this project, we make a place for every person who likes programming and wants to learn programming, or those who are already proficient and want to go deeper into programming and this project contains a collection of learning videos. Every user should log in and pay for every classes they took.
                       </b>
                  </h5>
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col md="3">
                  <div className="info mt-4">
                    <div className="description">
                      <img src="https://image.flaticon.com/icons/png/512/668/premium/668292.png" style={{ width: "45px", height: "50px", marginTop: "-10px" }} />
                      <h4 className="info-title mt-2"><b style={{ color: "black" }}>Swift</b></h4>
                      <p className="description" >
                        <b style={{ color: "black" }}>
                          Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, tvOS and beyond , Swift code is safe by design.
                        </b>
                      </p>
                      <Button className="btn" onClick={this.toSignIn} style={{ color: "white", backgroundColor: "#ff6f3b", border: "solid 1px #ff6f3b" }}>
                        <b>
                          See more
                        </b>
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <div className="description">
                      <img src="https://www.britefish.net/wp-content/uploads/2019/06/logo-javascript-2.png" style={{ width: "75px", height: "70x" }} />
                      <h4 className="info-title"><b style={{ color: "black" }}>Javascript</b></h4>
                      <p>
                        <b style={{ color: "black" }}>
                          JavaScript is a programming language commonly used in web development. It was originally developed by Netscape as a means to add dynamic.
                        </b>
                      </p>
                      <Button className="btn" color="warning" onClick={this.toSignIn} style={{ color: "white" }}>
                        <b>
                          See more
                        </b>
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <div className="description">
                      <img src="https://clipart4biz.com/images/android-vector-flat.png" style={{ width: "75px", height: "70x" }} />
                      <h4 className="info-title"><b style={{ color: "black" }}>Android</b></h4>
                      <p>
                        <b style={{ color: "black" }}>
                          software development is the process by which new applications are created for devices running the Android operating system, and it popular.
                        </b>
                      </p>
                      <Button className="btn" color="success" onClick={this.toSignIn} style={{ color: "white" }}>
                        <b>
                          See more
                        </b>
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <div className="description">
                      <img src="https://plumbr.io/app/uploads/2019/06/java.png" style={{ width: "85px", height: "70px" }} />
                      <h4 className="info-title"><b style={{ color: "black" }}>JAVA</b></h4>
                      <p>
                        <b style={{ color: "black" }}>
                          Java is a high-level programming language developed by Sun Microsystems. It was originally designed for developing programs for set-top boxes.
                        </b>
                      </p>
                      <Button className="btn" color="danger" onClick={this.toSignIn} style={{ color: "white" }}><b>
                        See more</b>
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <SectionCarousel />
          <div className="section section-dark text-center" style={{ height: "607px" }}>
            <Container >
              <h2 className="title" id="teacher"> Tanker Squad</h2>
              <Row>
                <Col md="3">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <Link onClick={this.toSignIn}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/Saptari-W.jpg")}
                        />
                      </Link>
                    </div>
                    <CardBody>
                      <Link onClick={this.toSignIn}>
                        <div className="author">
                          <CardTitle tag="h4">Saptari</CardTitle>
                          <h6 className="card-category">Mobile Developer</h6>
                        </div>
                      </Link>
                      <p className="card-description text-center">
                        <b>
                          Work in Enigma before for 3 months and now dedicate to share his education to others who need that.
                        </b>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <Link onClick={this.toSignIn}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/Rahadi-chan.jpg")}
                        />
                      </Link>
                    </div>
                    <CardBody>
                      <Link onClick={this.toSignIn}>
                        <div className="author">
                          <CardTitle tag="h4">Rahadi</CardTitle>
                          <h6 className="card-category">Back-End Developer</h6>
                        </div>
                      </Link>
                      <p className="card-description text-center">
                        <b>
                          Work in Enigma before for 3 months and now dedicate to share his education to others who need that.
                        </b>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <Link onClick={this.toSignIn}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/Aziz-M.jpg")}
                        />
                      </Link>
                    </div>
                    <CardBody>
                      <Link onClick={this.toSignIn}>
                        <div className="author">
                          <CardTitle tag="h4">Aziz Mulyanto</CardTitle>
                          <h6 className="card-category">Front-End Developer</h6>
                        </div>
                      </Link>
                      <p className="card-description text-center">
                        <b>
                          Work in Enigma before for 3 months and now dedicate to share his education to others who need that.
                        </b>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <Link onClick={this.toSignIn}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/Rio.jpg")}
                        />
                      </Link>
                    </div>
                    <CardBody>
                      <Link onClick={this.toSignIn}>
                        <div className="author">
                          <CardTitle tag="h4">Rio Manik</CardTitle>
                          <h6 className="card-category">Front-End Developer</h6>
                        </div>
                      </Link>
                      <p className="card-description text-center">
                        <b>
                          Work in Enigma before for 3 months and now dedicate to share his education to others who need that.
                        </b>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section section-dark text-center"></div>
          <MDBFooter className="font-small pt-4" style={{ backgroundColor: "#251EE3" }}>
            <div className="footer-copyright text-center py-3 text-white">
              <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a> <b>ngIDE </b></a>
                <ul style={{ marginRight: "40px" }}>
                  <a href="https://www.gmail.com/" style={{ color: "white" }}><b>Contact Us  / </b></a>
                  <a style={{ color: "white" }}><b>Follow Us (  </b></a>
                  <a href="https://www.instagram.com/" style={{ color: "white" }}>     <i class="fab fa-instagram"></i>        </a>
                  <a href="https://www.facebook.com/" style={{ color: "white" }}>   <i class="fab fa-facebook"></i>        </a>
                  <a href="https://www.twitter.com/" style={{ color: "white" }}><i class="fab fa-twitter">  </i>       )     /   </a>
                  <a href="#project" style={{ color: "white" }}><b>About Us  / </b></a>
                  <a href="#teacher" style={{ color: "white" }}><b>Teacher  / </b></a>
                  <a href="#main" style={{ color: "white" }}><b>ngIDE </b></a>
                </ul>
              </MDBContainer>
            </div>
          </MDBFooter>
        </div>
        {/* <Footer /> */}
      </div >
    );
  }

}


const mapDispatchToProps = {
  authUser: authUser,
  changeUserSession: changeUserSession
};

export default connect(null, mapDispatchToProps)(LandingPage)
