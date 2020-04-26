import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/user";
import { connect } from "react-redux";
import {
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  UncontrolledDropdown
} from "reactstrap";
import swal from "sweetalert";

export class MainNavbarTrainer extends React.Component {
  state = { Login: true, ngIDE: null };

  doLogout = event => {
    event.preventDefault();
    try {
      swal("Are you sure?", {
        buttons: true,
        dangerMode: true
      })
        .then(async willDelete => {
          if (willDelete) {
            await swal("Successfully Logout");
            this.props.logout();
          }
        });
    } catch (error) {
      console.log(error)
    }
  };

  doChangeNavbar = () => {
    try {
      this.setState({ Login: false });
    } catch (error) {
      console.log(error)
    }
  };

  componentWillMount = () => {
    try {
      if (this.props.status) {
        switch (this.props.status.name) {
          case "TrainerLesson":
            this.setState({
              ngIDE: <Link to="/protected/main-trainer/list-class" class="navbar-brand js-scroll-trigger">
                <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/arrow-back-icon.png" style={{ width: "40px", height: "40px" }} /> <b style={{ color: "white" }}>Back</b></Link>
            })
            break;
          case "pdfTrainer":
            this.setState({
              ngIDE: <Link to="/protected/main-trainer/lessons" class="navbar-brand js-scroll-trigger">
                <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/arrow-back-icon.png" style={{ width: "40px", height: "40px" }} /> <b style={{ color: "white" }}>Back</b></Link>
            })
            break;
          case "videoTrainer":
            this.setState({
              ngIDE: <Link to="/protected/main-trainer/lessons" class="navbar-brand js-scroll-trigger">
                <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/arrow-back-icon.png" style={{ width: "40px", height: "40px" }} /> <b style={{ color: "white" }}>Back</b></Link>
            })
            break;
          case "assignmentListTrainee":
            this.setState({
              ngIDE:
                <Link to="/protected/main-trainer/assignment/list-class" class="navbar-brand js-scroll-trigger">
                  <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/arrow-back-icon.png" style={{ width: "40px", height: "40px" }} /> <b style={{ color: "white" }}>Back</b></Link>
            })
            break;
          case "penilaian":
            this.setState({
              ngIDE:
                <Link to="/protected/main-trainer/task" class="navbar-brand js-scroll-trigger">
                  <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/arrow-back-icon.png" style={{ width: "40px", height: "40px" }} /> <b style={{ color: "white" }}>Back</b></Link>
            })
            break;
          case "tugasTrainer":
            this.setState({
              ngIDE:
                <Link to="/protected/main-trainer/lessons" class="navbar-brand js-scroll-trigger">
                  <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/arrow-back-icon.png" style={{ width: "40px", height: "40px" }} /> <b style={{ color: "white" }}>Back</b></Link>
            })
            break;
          case "completed":
            this.setState({
              ngIDE:
                <Link to="/protected/main-trainer/assignment/list-trainee" class="navbar-brand js-scroll-trigger">
                  <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/arrow-back-icon.png" style={{ width: "40px", height: "40px" }} /> <b style={{ color: "white" }}>Back</b></Link>
            })
            break;
          case "score":
            this.setState({
              ngIDE:
                <Link to="/protected/main-trainer/trainee-task" class="navbar-brand js-scroll-trigger">
                  <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/arrow-back-icon.png" style={{ width: "40px", height: "40px" }} /> <b style={{ color: "white" }}>Back</b></Link>
            })
            break;
          case "trainee":
            this.setState({
              ngIDE:
                <Link to="/protected/main-trainer/class-trainee" class="navbar-brand js-scroll-trigger">
                  <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/arrow-back-icon.png" style={{ width: "40px", height: "40px" }} /> <b style={{ color: "white" }}>Back</b></Link>
            })
            break;
          case "scoring":
            this.setState({
              ngIDE:
                <Link to="/protected/main-trainer/trainee-task" class="navbar-brand js-scroll-trigger">
                  <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/arrow-back-icon.png" style={{ width: "40px", height: "40px" }} /> <b style={{ color: "white" }}>Back</b></Link>
            })
            break;
          default:
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    let sFull;
    if (this.props.userActiveReducer.fullName !== undefined) {
      sFull = this.props.userActiveReducer.fullName.split(" ");
    } else {
      sFull = 'Guest'
    }
    return (
      <nav
        class="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{ backgroundColor: "#251EE3", height: "80px" }}
        id="mainNav"
      >
        <div class="container">
          {this.state.ngIDE}
          <Link to="/protected/main-trainer" class="navbar-brand js-scroll-trigger">
            <img class="card-img-top" src={require("assets/img/idea-navbar.png")} alt="" style={{ height: "50px", width: "70px", borderRadius: "60%" }} />
          </Link>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ml-auto">
              <li>
                <Link to="/protected/about/trainer" class=" text-white font-weight-bold navbar-brand js-scroll-trigger" style={{ marginLeft: "20px" }}>About us</Link>
              </li>
              <li>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle
                    aria-expanded={false}
                    aria-haspopup={true}
                    data-toggle="dropdown"
                    id="dropdownMenuButton"
                    nav
                    onClick={e => e.preventDefault()}
                    role="button"
                    className="text-white font-weight-bold"
                  >
                    {sFull[0]}
                    <i class="fas fa-user-cog" style={{ marginLeft: "20px", marginTop: "10px" }}></i>
                  </DropdownToggle>
                  <DropdownMenu
                    aria-labelledby="dropdownMenuButton"
                    className="dropdown-info"
                  >
                    <Link to="/protected/main/profile-trainer">
                      <DropdownItem>
                        <i class="fas fa-user-alt"> Profile</i>
                      </DropdownItem>
                    </Link>
                    <Link to="/protected/main/chat-trainer">
                      <DropdownItem>
                        <i class="fas fa-comments"> discuss</i>
                      </DropdownItem>
                    </Link>
                    <DropdownItem onClick={this.doLogout}>
                      <i class="fas fa-sign-in-alt"> Logout</i>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
            </ul>
          </div>
        </div>
      </nav >
    );
  }
}

const mapStateToProps = state => {
  return {
    userActiveReducer: state.userActive,
  };
};

const mapDispatchToProps = {
  logout: logout
};
export default connect(mapStateToProps, mapDispatchToProps)(MainNavbarTrainer);
