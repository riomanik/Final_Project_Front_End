import React from "react";
import { Row, Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer footer-black" style={{ backgroundColor: "#251EE3" }}>
      <Container>
        <Row>
          <nav className="footer-nav" >
          </nav>
          <div className="credits ml-auto">
            <span className="copyright" style={{ color: "white" }}>
              © {new Date().getFullYear()}, made with
              <i className="fa fa-heart heart" /> by ngIDE
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
