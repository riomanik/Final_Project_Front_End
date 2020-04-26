import React from "react";
import { Link } from "react-router-dom";
import { DropdownToggle, DropdownItem, DropdownMenu, UncontrolledDropdown, Navbar } from "reactstrap";
import swal from "sweetalert";
import { Button } from "@material-ui/core";

class ExamplesNavbar extends React.Component {
  state = { Login: true }

  doChangeNavbar = () => {
    try {
      this.setState({ Login: false })
    } catch (error) {
      console.log(error)
    }
  }



  render() {
    let Login = this.props.doChange;
    if (this.props.status) {
      switch (this.props.status.name) {
        case "home":
          return (
            <Navbar className="navbar navbar-expand-lg fixed-top " style={{ backgroundColor: "#251EE3", opacity: "80%" }} id="mainNav">
              <div className="container">
                <Link to="/">
                  <img class="card-img-top" src={require("assets/img/idea-navbar.png")} alt="" style={{ height: "50px", width: "70px" }} />
                </Link>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  {Login ?
                    <ul className="navbar-nav text-uppercase ml-auto">
                      <li className="nav-item">
                        <div className="header-button-wrap">
                          <Link to="/register" className="nav-link js-scroll-trigger">
                            <i className="fas fa-user-plus text-white"> <b>SIGN UP</b></i>
                          </Link>
                        </div>
                      </li>
                      <li className="nav-item">
                        <UncontrolledDropdown nav inNavbar>
                          <DropdownToggle aria-expanded={false} aria-haspopup={true} data-toggle="dropdown" id="dropdownMenuButton"
                            nav onClick={e => e.preventDefault()} role="button" className="text-white font-weight-bold">
                            <i className="fas fa-user-shield" style={{ marginLeft: "1px" }}> LOGIN</i>
                          </DropdownToggle>
                          <DropdownMenu
                            aria-labelledby="dropdownMenuButton"
                            className="dropdown-info">
                            <Link to="/login/trainee" >
                              <DropdownItem >
                                <img src="https://cdn3.iconfinder.com/data/icons/education-2-2/256/Student_Reading-512.png" style={{ width: "30px", height: "30px" }} />
                                Trainee
                              </DropdownItem>
                            </Link>
                            <Link to="/login/trainer">
                              <DropdownItem>
                                <img src="https://cdn1.iconfinder.com/data/icons/occupations-3/100/21-512.png" style={{ width: "30px", height: "30px" }} />
                                Trainer
                              </DropdownItem>
                            </Link>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </li>
                    </ul> : <div></div>}
                </div>
              </div>
            </Navbar>
          );
      }
    } else {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "#251EE3", height: "60px" }} id="mainNav">
          <div className="container">
            <Link to="/" className="navbar-brand js-scroll-trigger">
              <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/arrow-back-icon.png" style={{ width: "40px", height: "40px" }} /> <b style={{ color: "white" }}>Back</b>
            </Link>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              {Login ?
                <ul className="navbar-nav text-uppercase ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link js-scroll-trigger" onClick={this.props.toSignUp}>
                      <i className="fas fa-user-plus"> <b style={{ color: "white" }}>SIGN UP</b></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link js-scroll-trigger" onClick={this.props.toLogin} >
                      <i className="fas fa-sign-in-alt"><b style={{ color: "white" }}> SIGN IN</b></i>
                    </Link>
                  </li>
                </ul> : <div></div>}
            </div>
          </div>
        </nav>
      );
    }

  }
}


export default ExamplesNavbar;
