import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/user";
import { connect } from "react-redux";
import { DropdownToggle, DropdownItem, DropdownMenu, UncontrolledDropdown } from "reactstrap";
import { ViewSaldoTrainee } from "api/saldo";
import swal from "sweetalert";

var accounting = require("accounting");

export class MainNavbarTrainee extends React.Component {
  state = {
    Login: true,
    ngIDE: null,
  };

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

  componentDidMount = async () => {
    const response = await ViewSaldoTrainee(this.props.userActiveReducer.traineeId, this.props.tokenReducer.token)
    try {
      const data = await response.json();
      await this.setState({ saldo: data.totalBalance });
    } catch (error) {
      console.log(error)
      this.setState({ saldo: 0 });
    }
    if (this.props.status) {
      switch (this.props.status.name) {
        case "classPagination":
          this.setState({
            ngIDE: <Link to="/protected/main-trainee" class="navbar-brand js-scroll-trigger">
              <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/arrow-back-icon.png" style={{ width: "40px", height: "40px" }} /> <b style={{ color: "white" }}>Back</b></Link>
          })
          break;
        case "DetailClassTrainee":
          this.setState({
            ngIDE: <Link to="/protected/main/list-class" class="navbar-brand js-scroll-trigger">
              <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/arrow-back-icon.png" style={{ width: "40px", height: "40px" }} /> <b style={{ color: "white" }}>Back</b></Link>
          })
          break;
        case "Payment":
          this.setState({
            ngIDE:
              <Link to="/protected/main/detail-class" class="navbar-brand js-scroll-trigger">
                <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/arrow-back-icon.png" style={{ width: "40px", height: "40px" }} /> <b style={{ color: "white" }}>Back</b></Link>
          })
          break;
        case "TraineeLesson":
          this.setState({
            ngIDE:
              <Link to="/protected/main-trainee/list-class" class="navbar-brand js-scroll-trigger">
                <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/arrow-back-icon.png" style={{ width: "40px", height: "40px" }} /> <b style={{ color: "white" }}>Back</b></Link>
          })
          break;
        case "videoTrainee":
          this.setState({
            ngIDE:
              <Link to="/protected/main-trainee/lessons" class="navbar-brand js-scroll-trigger">
                <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/arrow-back-icon.png" style={{ width: "40px", height: "40px" }} /> <b style={{ color: "white" }}>Back</b></Link>
          })
          break;
        case "pdfTrainee":
          this.setState({
            ngIDE:
              <Link to="/protected/main-trainee/lessons" class="navbar-brand js-scroll-trigger">
                <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/arrow-back-icon.png" style={{ width: "40px", height: "40px" }} /> <b style={{ color: "white" }}>Back</b></Link>
          })
          break;
        case "tugasTrainee":
          this.setState({
            ngIDE:
              <Link to="/protected/main-trainee/lessons" class="navbar-brand js-scroll-trigger">
                <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/arrow-back-icon.png" style={{ width: "40px", height: "40px" }} /> <b style={{ color: "white" }}>Back</b></Link>
          })
          break;
        default:
          break;
      }
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
        id="mainNav">
        <div class="container">
          {this.state.ngIDE}
          <Link to="/protected/main-trainee" class="navbar-brand js-scroll-trigger">
            <img class="card-img-top" src={require("assets/img/idea-navbar.png")} alt="" style={{ height: "50px", width: "70px" }} />
          </Link>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ml-auto">
              <li>
                <Link to="/protected/about/trainee" class=" text-white font-weight-bold navbar-brand js-scroll-trigger" style={{ marginLeft: "20px" }}>About us</Link>
              </li>
              <li>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle aria-expanded={false} aria-haspopup={true} data-toggle="dropdown" id="dropdownMenuButton"
                    nav onClick={e => e.preventDefault()} role="button" className="text-white font-weight-bold navbar-brand js-scroll-trigger">
                    {sFull[0]}
                    <i class="fas fa-user-cog" style={{ marginLeft: "20px", marginTop: "10px" }}></i>
                  </DropdownToggle>
                  <DropdownMenu
                    aria-labelledby="dropdownMenuButton"
                    className="dropdown-info">
                    <Link to="/protected/main/profile-trainee">
                      <DropdownItem>
                        <i class="fas fa-user-alt "> Profile</i>
                      </DropdownItem>
                    </Link>
                    <Link to="/protected/main-trainee/list-class">
                      <DropdownItem>
                        <i class="fas fa-list-alt"> List Class</i>
                      </DropdownItem>
                    </Link>
                    <Link to="/protected/main/chat-trainee">
                      <DropdownItem>
                        <i class="fas fa-comments"> discuss</i>
                      </DropdownItem>
                    </Link>
                    <Link to="/protected/saldo/trainee/view-saldo" >
                      <DropdownItem>
                        <i class="fas fa-money-bill mr-1">{accounting.formatMoney(this.state.saldo, " Rp. ", 2, ".", ",")}</i>
                      </DropdownItem>
                    </Link>
                    <Link to="/protected/main/top-up" >
                      <DropdownItem>
                        <i class="fas fa-wallet"> Top-Up</i>
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
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userActiveReducer: state.userActive,
    tokenReducer: state.tokenReducer
  }
};

const mapDispatchToProps = {
  logout: logout
};
export default connect(mapStateToProps, mapDispatchToProps)(MainNavbarTrainee);
