import React from 'react';
import { connect } from 'react-redux';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import MainNavbarTrainee from 'components/Navbars/MainNavbarTrainee';
import { Link } from 'react-router-dom';


export class videoTrainee extends React.Component {
    render() {
        return (
            <div>
                <MainNavbarTrainee status={{ name: "videoTrainee" }} />
                <div style={{ marginTop: "100px" }}>
                    <div class="col-lg-8 card" style={{ margin: "auto", border: "solid 15px #251EE3", borderRadius: "2%", boxShadow: "1000px" }}>
                        <h1 class="mt-4 text-center"><b><img src="https://cdn4.iconfinder.com/data/icons/online-course-1/512/video-learning-training-clip-512.png" style={{ height: "100px", width: "100px" }} /> Video</b></h1>
                        <hr style={{ backgroundColor: "#251EE3", border: "#251EE3 solid 5px" }} />
                        <hr style={{ backgroundColor: "#251EE3", marginTop: "-1px" }} />
                        <Video autoPlay
                            style={{ width: "auto", height: "auto" }}
                            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                            onCanPlayThrough={() => { }}>
                            <source src={this.props.videoFilesTraineeReducer} type="video/webm" />
                            <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
                        </Video>
                        <hr />
                        <p class="lead"><b style={{ color: "black" }}>By delivering lessons through Videos it is hoped that users can understand them more clearly.</b></p>
                        <p><b style={{ color: "black" }}>Video contain lessons that are provided by Trainers and can only be accessed by trainees who have purchased.</b></p>
                        <p><b style={{ color: "black" }}>For those of you who have read the Lesson until the End, there will be an
                            additional Task for trainees and if the task does not exist , please wait patiently
                             and be able to repeat the material again </b></p>
                        <blockquote class="blockquote">
                            <p class="mb-0"><b style={{ color: "black" }}>We don't know when we fail and whenever we succeed but we know the current situation and what actions to take, so don't give up!</b></p>
                            <footer class="blockquote-footer"><b style={{ color: "blue" }}>ngIDE
                        <cite title="Source Title"> Team</cite></b>
                            </footer>
                        </blockquote>
                        <p><b style={{ color: "black" }}>Thank you for watching our lesson, we hope you will cleary understanding the lesson</b></p>
                        <p><b style={{ color: "black" }}>To view other material, you can go back or click the link</b><Link to="/protected/main-trainer/lessons"><b style={{ color: "red" }}>Here</b></Link></p>
                        <hr>
                        </hr>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        videoFilesTraineeReducer: state.videoFilesTraineeReducer,
    }
};


export default connect(mapStateToProps, null)(videoTrainee)