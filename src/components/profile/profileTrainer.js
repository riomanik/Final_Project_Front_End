import React from "react";
import "../profile/profile.css";
import Footer from "components/Footers/Footer";
import { Link } from "@material-ui/core";
import { connect } from "react-redux";
import MainNavbarTrainer from "components/Navbars/MainNavbarTrainer";
import { uploadFiles } from "api/trainer";

export class ProfileTrainer extends React.Component {
  state = { fotoFile: null, imageFile: null }

  onInputPhotoChange = async (event) => {
    try {
      await this.setState({
        fotoFile: event.target.files[0],
        loaded: 0
      })
      let UploadFoto = await new FormData();
      await UploadFoto.append('file', this.state.fotoFile);
      const response = await uploadFiles(UploadFoto, this.props.tokenReducer.token)
      const data = await response.json();
      await this.setState({ imageFile: data.id })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <>
        <MainNavbarTrainer />
        <div className="container" style={{ height: "855px", marginTop: "120px" }}>
          <div class="card container emp-profile " style={{ border: "1px solid blue" }}>
            <form method="post">
              <div class="row" >
                <div class="col-md-4">
                  <div class="profile-img">
                    <img
                      src="https://www.clipartwiki.com/clipimg/detail/136-1366019_personal-trainer-computer-icons-fitness-centre-physical-icon.png"
                      alt=""
                    />
                    <div class="file btn btn-lg btn-primary">
                      Change Photo
                    <input type="file" name="file" onChange={this.onInputPhotoChange} />
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mt-5 ">
                  <div class="profile-head ">
                    <h5 className="text-black font-weight-bold">{this.props.userActiveReducer.fullName}</h5>
                    <h6><b>Trainer</b></h6>
                    <ul class="nav nav-tabs mt-5" id="myTab" role="tablist">
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          About
                      </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-2 mt-5">
                  <Link type="submit" name="btnAddMore">
                    <i class="fas fa-user-edit"> Edit Profile</i>
                  </Link>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="profile-work">
                    <p><b style={{ color: "black" }}>Social Media</b></p>
                    <a href="">
                      <i class="fab fa-instagram" > <b style={{ color: "blue" }}>Instagram</b></i>
                    </a>
                    <br />
                    <a href="">
                      <i class="fab fa-facebook-f"> <b style={{ color: "blue" }}>Facebook</b></i>
                    </a>
                    <br />
                    <a href="">
                      <i class="fab fa-twitter"> <b style={{ color: "blue" }}>Twitter</b></i>
                    </a>
                    <p>Status</p>
                    <a href="">Online</a>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="tab-content profile-tab">
                    <div class="row">
                      <div class="col-md-6">
                        <label><i class="fas fa-id-card">  ID</i></label>
                      </div>
                      <div class="col-md-6">
                        <p>{this.props.userActiveReducer.trainerId}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label><i class="fas fa-id-card">  Name</i></label>
                      </div>
                      <div class="col-md-6">
                        <p>{this.props.userActiveReducer.fullName}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label><i class="fas fa-envelope">  Address</i></label>
                      </div>
                      <div class="col-md-6">
                        <p>{this.props.userActiveReducer.address}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label><i class="fas fa-phone-square">  Phone</i></label>
                      </div>
                      <div class="col-md-6">
                        <p>{this.props.userActiveReducer.phoneNumber}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label><i class="fas fa-layer-group">  Total Class</i></label>
                      </div>
                      <div class="col-md-6">
                        <p>10</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label><i class="fas fa-calendar-alt">  Member Since</i></label>
                      </div>
                      <div class="col-md-6">
                        <p>2019-12-10</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    userActiveReducer: state.userActive,
    tokenReducer: state.tokenReducer
  };
};

export default connect(mapStateToProps)(ProfileTrainer);
