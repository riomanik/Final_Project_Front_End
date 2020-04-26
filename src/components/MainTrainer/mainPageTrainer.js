import React from "react";
import { connect } from "react-redux";
import Footer from "components/Footers/Footer";
import { idClass } from "actions/class";
import { Link } from "react-router-dom";
import MainNavbarTrainer from "components/Navbars/MainNavbarTrainer";
import './mainPageTrainer.css'
import { ThemeProvider } from "styled-components";
import ChatBot from 'react-simple-chatbot';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#251EE3',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#251EE3',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: '1',
    message: 'Welcome back , you want some more info?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 1, label: 'How To Create Class', trigger: '4' },
      { value: 2, label: 'How To Upload File,Video,Task', trigger: '3' },
      { value: 3, label: 'How To assignment the Student', trigger: '5' },
    ],
  },
  {
    id: '3',
    message: 'To Upload files,video,and task you must go to View Class first and then select class you have and you can see tab files and other , in that you can upload files',
    trigger: '2',
  },
  {
    id: '4',
    message: 'You can create the class by select create class first , and then you can read the inscruction of detail value you must submit ',
    trigger: '2',
  },
  {
    id: '5',
    message: 'Before you assignment student you must have at least 1 class and 1 task in the class you have, and if you has create a class and task you can click assignment and just follow the steps',
    trigger: '2',
  },
]

export class MainPageTrainer extends React.Component {
  render() {
    let sFull = this.props.userActiveReducer.fullName
    return (
      <div>
        <MainNavbarTrainer />
        <header>
          <div class="overlay"></div>
          <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src="https://images.all-free-download.com/footage_preview/mp4/talk_discussion_meeting_team_group_1104.mp4" type="video/mp4" />
          </video>
          <div class="container h-100">
            <div class="d-flex text-center h-100">
              <div class="my-auto w-100 text-white">
                <h1 class="display-3">Welcome {sFull}</h1>
                <h2>Start your teaching now!</h2>
                <hr></hr>
                <p>Welcome to our company</p>
                <p>let's begin with creating your class now !</p>
                <Link to="/protected/main-trainer/check-out" class="btn btn-lg" style={{ backgroundColor: "#0275d8", border: "1px solid #4287f5" }}><b style={{ color: "white" }}>𝐂𝐫𝐞𝐚𝐭𝐞 𝐂𝐥𝐚𝐬𝐬 &raquo;</b></Link>
              </div>
            </div>
          </div>
        </header>
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-4 mb-5">
              <div class="card h-100" style={{ border: "2px solid #45c5d9", borderRadius: "3%" }}>
                <img class="card-img-top" src="https://www.dsi-nj.com/newsite/wp-content/uploads/2015/09/Computer-class.jpg" alt="" style={{ height: "300", width: "200" }} />
                <div class="card-body">
                  <h4 class="card-title text-center"><b>Creating Classes</b></h4>
                  <p class="card-text mt-3 text-center"><b>𝘠𝘰𝘶 𝘤𝘢𝘯 𝘴𝘵𝘢𝘳𝘵 𝘺𝘰𝘶𝘳 𝘵𝘦𝘢𝘤𝘩𝘪𝘯𝘨 𝘣𝘺 𝘤𝘭𝘪𝘤𝘬 𝘵𝘩𝘦 𝘉𝘶𝘵𝘵𝘰𝘯 𝘧𝘰𝘳 𝘤𝘳𝘦𝘢𝘵𝘪𝘯𝘨 𝘺𝘰𝘶𝘳 𝘤𝘭𝘢𝘴𝘴, 𝘺𝘰𝘶 𝘤𝘢𝘯 𝘯𝘢𝘮𝘦 𝘺𝘰𝘶𝘳 𝘤𝘭𝘢𝘴𝘴𝘦𝘴,𝘵𝘰𝘱𝘪𝘤, 𝘢𝘯𝘥 𝘥𝘦𝘴𝘤𝘳𝘪𝘱𝘵𝘪𝘰𝘯 𝘰𝘧 𝘺𝘰𝘶𝘳 𝘤𝘭𝘢𝘴𝘴, 𝘺𝘰𝘶 𝘢𝘭𝘴𝘰 𝘤𝘢𝘯 𝘢𝘥𝘥𝘪𝘯𝘨 𝘢 𝘱𝘥𝘧, 𝘷𝘪𝘥𝘦𝘰, 𝘴𝘰 𝘴𝘵𝘢𝘳𝘵 𝘤𝘭𝘪𝘤𝘬 𝘪𝘵!</b></p>
                </div>
                <div class="card-footer">
                  <Link to="/protected/main-trainer/check-out" class="btn btn-block" style={{ backgroundColor: "#4287f5", border: "1px solid #4287f5" }}><b style={{ color: "white" }}>Create Now</b></Link>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-5">
              <div class="card h-100" style={{ border: "2px solid #45c5d9", borderRadius: "3%" }}>
                <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScqCdIXOA5qksEFWEn-2SceNPDHxF1bPDa0k2TljaW8m6ZV9sg&s" alt="" />
                <div class="card-body">
                  <h4 class="card-title text-center"><b>View your classes</b></h4>
                  <p class="card-text mt-3 text-center"><b>𝘉𝘺 𝘤𝘭𝘪𝘤𝘬𝘪𝘯𝘨 𝘵𝘩𝘦 𝘣𝘶𝘵𝘵𝘰𝘯, 𝘺𝘰𝘶 𝘤𝘢𝘯 𝘮𝘢𝘯𝘢𝘨𝘦 𝘺𝘰𝘶𝘳 𝘴𝘵𝘶𝘥𝘦𝘯𝘵, 𝘤𝘭𝘢𝘴𝘴𝘦𝘴,𝘭𝘦𝘢𝘳𝘯𝘪𝘯𝘨, 𝘢𝘭𝘴𝘰 𝘺𝘰𝘶 𝘤𝘢𝘯 𝘦𝘥𝘪𝘵 𝘺𝘰𝘶𝘳 𝘤𝘭𝘢𝘴𝘴𝘦𝘴 𝘪𝘯 𝘩𝘦𝘳𝘦!</b></p>
                </div>
                <div class="card-footer">
                  <Link to="/protected/main-trainer/list-class" class="btn btn-block" style={{ backgroundColor: "#0275d8", border: "1px solid #4287f5" }}><b style={{ color: "white" }}>View now</b></Link>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-5">
              <div class="card h-100" style={{ border: "2px solid #45c5d9", borderRadius: "3%" }}>
                <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjEuSZyk6MIs8P_ELtPPlaUvNFsgZXKPAxJ8Q-Rf2nq3HNzcQW&s" alt="" />
                <div class="card-body">
                  <h4 class="card-title text-center"><b>Assignment</b></h4>
                  <p class="card-text mt-3 text-center"><b>𝘈𝘧𝘵𝘦𝘳 𝘤𝘳𝘦𝘢𝘵𝘪𝘯𝘨 𝘵𝘩𝘦 𝘤𝘭𝘢𝘴𝘴𝘦𝘴, 𝘮𝘢𝘯𝘢𝘨𝘪𝘯𝘨 𝘵𝘩𝘦 𝘤𝘭𝘢𝘴𝘴𝘦𝘴, 𝘪𝘴 𝘯𝘰𝘵 𝘪𝘵 𝘭𝘦𝘴𝘴 𝘤𝘰𝘮𝘱𝘭𝘦𝘵𝘦 𝘪𝘧 𝘸𝘦 𝘥𝘰𝘯'𝘵 𝘨𝘢𝘷𝘦 𝘢𝘯 𝘈𝘴𝘴𝘪𝘨𝘯𝘮𝘦𝘯𝘵 𝘧𝘰𝘳 𝘵𝘩𝘦𝘪𝘳 𝘩𝘰𝘮𝘦𝘸𝘰𝘳𝘬? 𝘴𝘰 𝘴𝘵𝘢𝘳𝘵 𝘤𝘭𝘪𝘤𝘬 𝘪𝘵 𝘢𝘯𝘥 𝘨𝘪𝘷𝘦 𝘵𝘩𝘦𝘪𝘳 𝘢𝘴𝘴𝘪𝘨𝘯𝘵𝘮𝘦𝘯𝘵!</b></p>
                </div>
                <div class="card-footer">
                  <Link to="/protected/main-trainer/class-trainee" class="btn btn-block" style={{ backgroundColor: "#0275d8", border: "1px solid #4287f5" }}><b style={{ color: "white" }}>Assignment</b></Link>
                </div>
              </div>
              <ThemeProvider theme={theme}>
                <ChatBot
                  headerTitle="Welcome"
                  recognitionEnable={true}
                  floating={true}
                  steps={steps} style={{ marginLeft: "1550px" }}
                  className="fixed-bottom"
                />
              </ThemeProvider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userActiveReducer: state.userActive
  };
};

const mapDispatchToProps = {
  idClass: idClass
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageTrainer);
