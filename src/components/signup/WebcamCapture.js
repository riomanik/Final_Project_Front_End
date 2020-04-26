
import React from 'react';
import Webcam from 'react-webcam';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { uploadPhoto } from 'api/trainee';
import { imageProfile } from 'actions/image';
var base64Img = require('base64-img');

export class Webcam2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenshot: null,
      imageUpload: null,
      tab: 0,
      first: false
    };
  }

  handleClick = (event) => {
    try {
      event.preventDefault();
      const screenshot = this.webcam.getScreenshot();
      this.setState({ screenshot });
      var img = screenshot;
      var data = img.replace(/^data:image\/\w+;base64,/, "");
      this.setState({ imageUpload: data });
      console.log(img)
    } catch (error) {
      console.log(error)
    }
  }

  doSubmitPhoto = async (event) => {
    event.preventDefault();
    try {
      swal("Succesfully saved")
      this.props.imageProfile(this.state.imageUpload)
      this.props.doChangeCamera()
      this.props.doChangeSaveImage()
      this.props.doChangePhotoRollBack()
    } catch (error) {
      console.log(error)
    }
  }

  doChangeUpload = () => {
    this.props.doChangeCamera()
  }

  render() {
    return (
      <div>
        {this.state.first}
        <h2 style={{ marginLeft: "140px" }}><b>Smile <i class="far fa-smile-beam"></i></b></h2>
        <Webcam
          audio={false}
          height={269}
          width={350}
          style={{ marginLeft: "32px", border: "solid 10px orange" }}
          ref={node => this.webcam = node}
        />
        <div>
          <div className='screenshots'>
            <div className='controls'>
              <button className="btn btn-warning ml-5 mt-2" onClick={this.handleClick}><b><i class="fas fa-camera"></i> Capture</b></button>
              <button className="btn btn-warning ml-3 mt-2" onClick={this.doChangeUpload}><b><i class="fas fa-images"></i> Upload Images</b></button>
            </div>
            {this.state.screenshot ? <img src={this.state.screenshot} style={{ marginTop: "20px", marginLeft: "32px", border: "solid 10px orange" }} /> : null}
            {this.state.screenshot ? <button className="btn btn-warning mt-2" onClick={this.doSubmitPhoto} style={{ marginLeft: "120px" }}><b><i class="fas fa-save"></i>  Save Picture</b></button> : null}
          </div>
        </div>
      </div>
    );
  }
}



const mapDispatchToProps = {
  imageProfile: imageProfile
};


export default connect(null, mapDispatchToProps)(Webcam2);