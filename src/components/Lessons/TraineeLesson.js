import React from 'react';
import MainNavbarTrainee from 'components/Navbars/MainNavbarTrainee';
import { Link, List } from '@material-ui/core';
import { doGetListPdf, doGetListVideo, doGetListTask } from '../../api/trainee/index';
import { connect } from 'react-redux';
import { doGetPdfDetail } from 'actions/trainee';
import { doGetVideoDetail } from 'actions/trainee';
import { doGetTugasDetail } from 'actions/trainee';
import ListScoreTrainee from '../../components/MainTrainee/ListScoreTrainee';
import VideoCall from 'components/MainTrainer/VideoCall';
import VideoCall2 from 'components/MainTrainer/VideoCall2';

export class TraineeLesson extends React.Component {
    state = { description: true, file: false, video: false, tugas: false, nilai: false, videoCall: false, pdf: null, videoData: null, listTugas: null, status: <>𝐌𝐞𝐧𝐮 </> }


    doChangeDescription = () => {
        this.setState({ description: true, file: false, video: false, tugas: false, nilai: false, videoCall: false, status: <>𝐌𝐞𝐧𝐮</> })
    }

    doChangeFile = () => {
        this.setState({ description: false, file: true, video: false, tugas: false, nilai: false, videoCall: false, status: <>𝐋𝐞𝐬𝐬𝐨𝐧𝐬</> })
    }

    doChangeVideo = () => {
        this.setState({ description: false, file: false, video: true, tugas: false, nilai: false, videoCall: false, status: <>𝐕𝐢𝐝𝐞𝐨</> })
    }

    doChangeTugas = () => {
        this.setState({ description: false, file: false, video: false, tugas: true, nilai: false, videoCall: false, status: <>𝐓𝐚𝐬𝐤</> })
    }

    doChangeNilai = () => {
        this.setState({ description: false, file: false, video: false, tugas: false, nilai: true, videoCall: false, status: <>𝐒𝐜𝐨𝐫𝐞</> })
    }

    doChangeVideoCall = () => {
        this.setState({ description: false, file: false, video: false, tugas: false, nilai: false, videoCall: true })
    }

    renderVideo = (video) => {
        try {
            this.props.history.push({
                pathname: "/protected/file/main-trainee/video"
            })
            this.props.doGetListVideo(video)
        } catch (error) {
            console.log(error)
        }
    }

    renderFile = (pdf) => {
        try {
            this.props.history.push({
                pathname: "/protected/file/main-trainee/pdf"
            })
            this.props.doGetListPdf(pdf)
        } catch (error) {
            console.log(error)
        }
    }

    renderTugas = (tugas) => {
        try {
            this.props.history.push({
                pathname: "/protected/file/main-trainee/tugas"
            })
            this.props.doGetTugasDetail(tugas)
        } catch (error) {
            console.log(error)
        }

    }

    componentDidMount = () => {
        try {
            this.doGetListPdf();
            this.doGetListVideo();
            this.doGetListTask();
            if (this.props.status) {
                switch (this.props.status.name) {
                    case "classPagination":
                        this.setState({
                            ngIDE: <Link to="/protected/main-trainee" class="navbar-brand js-scroll-trigger">
                                <i class="fas fa-long-arrow-alt-left"><b> Back </b></i></Link>
                        })
                        break;
                    default:
                        break;
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    doGetListPdf = async () => {
        try {
            const responsePdf = await doGetListPdf(this.props.classTraineeReducer, this.props.tokenReducer.token);
            const dataPdf = await responsePdf.json();
            if (responsePdf.status === 200) {
                this.setState({ pdf: dataPdf })
                console.log(this.state.pdf)
            } else {
                console.log("Wrong")
            }
        } catch (error) {
            console.log(error)
        }
    }

    doGetListVideo = async () => {
        try {
            const responseVideo = await doGetListVideo(this.props.classTraineeReducer, this.props.tokenReducer.token);
            const dataVideo = await responseVideo.json();
            if (responseVideo.status === 200) {
                this.setState({ videoData: dataVideo })
            } else {
                console.log("error if-else")
            }
        } catch (error) {
            console.log(error)
        }
    }

    doGetListTask = async () => {
        try {
            const responseTugas = await doGetListTask(this.props.classTraineeReducer, this.props.tokenReducer.token);
            const dataTugas = await responseTugas.json();
            if (responseTugas.status === 200) {
                this.setState({ listTugas: dataTugas })
            } else {
                console.log("error if-else")
            }
        } catch (error) {
            console.log(error)
        }
    }

    doRenderDescription = () => {
        return (
            <div class="card card-outline-secondary " style={{ border: "solid 2px #4287f5", borderRadius: "1%" }}>
                <div >
                    <div class="container">
                        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" style={{ width: "845px", height: "500px", marginLeft: "-13px", marginTop: "-10px" }}>
                            <source src="https://thumbs.dreamstime.com/videothumb_large14712/147122281.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div class="card-header" style={{ backgroundColor: "#251EE3" }}><b style={{ color: "white", fontSize: "24px" }}>What we learn from this course <i class="fas fa-question"></i></b></div>
                <div class="card-body">
                    <small class="text-muted">
                        <b style={{ color: "black", fontSize: "20px" }}><i class="fas fa-info-circle"></i> About </b>
                    </small>
                    <p style={{ fontSize: "16px" }}>
                        <b>
                            Learning Regarding selected programming languages ​​from basic to expert, learning comes from selected and certified trainees.
                        </b>
                    </p>
                    <hr></hr>
                    <small class="text-muted">
                        <b style={{ color: "black", fontSize: "20px" }}><i class="fas fa-book"></i> Lessons </b>
                    </small>
                    <p style={{ fontSize: "16px" }}>
                        <b>
                            One of the learning systems that we use to deliver material is to use pdf, trainees can view pdf files that have been provided by the trainer, the file cannot be downloaded but can only be read directly from the place.
                        </b>
                    </p>
                    <hr></hr>
                    <small class="text-muted">
                        <b style={{ color: "black", fontSize: "20px" }}><i class="far fa-file-video"></i> Video </b>
                    </small>
                    <p style={{ fontSize: "16px" }}>
                        <b>
                            One of the learning systems that we use to deliver material is to use offline videos, trainees can view offline videos that have been provided by trainers, videos cannot be downloaded but can only be viewed from a place.
                        </b>
                    </p>
                    <hr></hr>
                    <small class="text-muted">
                        <i class="fas fa-tasks"></i> <b style={{ color: "black", fontSize: "20px" }}> Task </b>
                    </small>
                    <p style={{ fontSize: "16px" }}>
                        <b>
                            One of the learning systems that we use to deliver material is to use offline videos, trainees can view offline videos that have been provided by trainers, videos cannot be downloaded but can only be viewed from a place.
                        </b>
                    </p>
                    <hr></hr>
                    <small class="text-muted">
                        <b style={{ color: "black", fontSize: "20px" }}><i class="fas fa-clipboard-list"></i> Assignment </b>
                    </small>
                    <p style={{ fontSize: "16px" }}>
                        <b>
                            To measure as competent trainees we provide a container feature for the results of the tests that we have done, into the assessment form that has been done by the trainer concerned.
                        </b>
                    </p>
                    <hr></hr>
                    <small class="text-muted">
                        <b style={{ color: "black", fontSize: "20px" }}><i class="fas fa-video"></i> Video Call (Next - Feature) </b>
                    </small>
                    <p style={{ fontSize: "16px" }}>
                        <b>
                            To increase interaction between Trainers and Trainees we plan to use the video call feature as communication between trainees and trainers so that communication between the two becomes closer and is expected to help trainees understand every explanation given by trainers.
                        </b>
                    </p>
                </div>
            </div >
        )
    }

    doRenderFile = () => {
        if (this.state.pdf !== null) {
            return this.state.pdf.map(pdf => {
                return (
                    <div class="col-lg-4 col-md-6 mb-4" style={{ height: "auto" }}>
                        <div class="card" style={{ border: "solid 1px #251EE3", borderRadius: "2%", height: "450px" }}>
                            <a onClick={() => this.renderFile(pdf.files.pathFile)}><img class="card-img-top" src="https://www.zamzar.com/images/filetypes/pdf.png" alt="" style={{ width: "180px", marginLeft: "30px", marginTop: "15px" }} /></a>
                            <div class="card-body"  >
                                <br></br>
                                <h5 class="card-title text-center" >
                                    <Link ><b><b style={{ color: "black" }}>{pdf.title}</b></b></Link>
                                </h5>
                                <p class="card-text mt-3"><b style={{ color: "black" }}>{pdf.description}</b></p>
                            </div>
                        </div>
                    </div>
                )
            })
        } else if (this.state.pdf === null) {
            return (
                <div class="col-lg-4 col-md-6 mb-4" style={{ height: "800px" }}>
                    <div class="card" style={{ border: "solid 1px #251EE3", borderRadius: "2%" }}>
                        <a href="#"><img class="card-img-top" src="https://help.healthycities.org/hc/en-us/article_attachments/209781727/not-met-red-500px.png" alt="" style={{ width: "180px", marginLeft: "30px", marginTop: "15px" }} /></a>
                        <div class="card-body" >
                            <br></br>
                            <h3 class="card-title text-center">
                                <Link  ><b><b>Sorry , there are no file in here </b></b></Link>
                            </h3>
                        </div>
                    </div>
                </div>
            )
        }
    }

    doRenderVideo = () => {
        if (this.state.videoData !== null) {
            return this.state.videoData.map(videoData => {
                return (
                    <div class="col-lg-4 col-md-6 mb-4" style={{ height: "auto" }} >
                        <div class="card" style={{ border: "solid 1px #251EE3", borderRadius: "2%", height: "450px" }}>
                            <a onClick={() => this.renderVideo(videoData.files.pathFile)}><img class="card-img-top" src="https://brightplanet.com/wp-content/uploads/sites/8/2016/04/play-1073616_1280.png" alt="" style={{ width: "180px", marginLeft: "30px", marginTop: "15px" }} /></a>
                            <div class="card-body"  >
                                <br></br>
                                <h5 class="card-title text-center" >
                                    <Link  ><b><b style={{ color: "black" }}>{videoData.title}</b></b></Link>
                                </h5>
                                <p class="card-text mt-3"><b>{videoData.description}</b></p>
                            </div>
                        </div>
                    </div>
                )
            })
        } else if (this.state.videoData === null) {
            return (
                <div class="col-lg-4 col-md-6 mb-4" style={{ height: "800px" }}>
                    <div class="card" style={{ border: "solid 1px #251EE3", borderRadius: "2%" }}>
                        <a href="#"><img class="card-img-top" src="https://help.healthycities.org/hc/en-us/article_attachments/209781727/not-met-red-500px.png" alt="" style={{ width: "180px", marginLeft: "30px", marginTop: "15px" }} /></a>
                        <div class="card-body" >
                            <br></br>
                            <h3 class="card-title text-center">
                                <Link  ><b><b>Sorry , there are no file in here </b></b></Link>
                            </h3>
                        </div>
                    </div>
                </div>
            )
        }
    }

    doRenderTugas = () => {
        if (this.state.listTugas !== null) {
            return this.state.listTugas.map(tugas => {
                return (
                    <div class="col-lg-4 col-md-6 mb-4" style={{ height: "auto" }}>
                        <div class="card" style={{ border: "solid 1px #251EE3", borderRadius: "2%", height: "450px" }} >
                            <a onClick={() => this.renderTugas(tugas)}><img class="card-img-top" src="https://static.vecteezy.com/system/resources/previews/000/355/835/non_2x/task-vector-icon.jpg" alt="" style={{ width: "180px", marginLeft: "30px", marginTop: "15px" }} /></a>
                            <div class="card-body" >
                                <br></br>
                                <h5 class="card-title text-center" >
                                    <Link ><b><b style={{ color: "black" }}>{tugas.title}</b></b></Link>
                                </h5>
                                <p class="card-text mt-3"><b>{tugas.description}</b></p>
                            </div>
                        </div>
                    </div>
                )
            })
        } else {
            return (
                <div class="col-lg-4 col-md-6 mb-4" style={{ height: "800px" }}>
                    <div class="card" style={{ border: "solid 1px #251EE3", borderRadius: "2%" }}>
                        <a href="#"><img class="card-img-top" src="https://help.healthycities.org/hc/en-us/article_attachments/209781727/not-met-red-500px.png" alt="" style={{ width: "180px", marginLeft: "30px", marginTop: "15px" }} /></a>
                        <div class="card-body" >
                            <br></br>
                            <h3 class="card-title text-center">
                                <Link  ><b><b>Sorry , there are no file in here </b></b></Link>
                            </h3>
                        </div>
                    </div>
                </div>
            )
        }
    }

    doRenderNilai = () => {
        return (
            <div>
                <ListScoreTrainee />
            </div>
        )
    }


    doRenderVideoCall = () => {
        return (
            <div>
                <VideoCall /><VideoCall2 />
            </div>
        )
    }


    render() {
        let description = this.state.description;
        let file = this.state.file;
        let video = this.state.video;
        let tugas = this.state.tugas;
        let nilai = this.state.nilai;
        let videoCall = this.state.videoCall;
        return (
            <div style={{ height: "1250px" }}>
                <MainNavbarTrainee status={{ name: "TraineeLesson" }} />
                <div class="container" style={{ marginTop: "70px" }}>
                    <div class="row">
                        <div class="col-lg-3">
                            <h1 class="my-4"><b style={{ color: "black" }}>{this.state.status}</b></h1>
                            <div class="list-group">
                                <List onClick={this.doChangeDescription} class="btn  text-left" style={{ backgroundColor: "#4287f5", border: "1px solid #4287f5" }}><h5><b style={{ color: "white" }} ><i class="fas fa-network-wired"> Description </i></b></h5></List>
                                <List onClick={this.doChangeFile} class="btn  text-left" style={{ backgroundColor: "#4287f5", border: "1px solid #4287f5" }}><h5><b style={{ color: "white" }}><i class="fas fa-file-pdf"> File</i></b></h5></List>
                                <List onClick={this.doChangeVideo} class="btn  text-left" style={{ backgroundColor: "#4287f5", border: "1px solid #4287f5" }}><h5><b style={{ color: "white" }}><i class="fas fa-file-video"> Video</i></b></h5></List>
                                <List onClick={this.doChangeTugas} class="btn  text-left" style={{ backgroundColor: "#4287f5", border: "1px solid #4287f5" }}><h5><b style={{ color: "white" }}><i class="fas fa-tasks"> Task</i></b></h5></List>
                                <List onClick={this.doChangeNilai} class="btn  text-left" style={{ backgroundColor: "#4287f5", border: "1px solid #4287f5" }}><h5><b style={{ color: "white" }}><i class="fas fa-pen-nib"> Score</i></b></h5></List>
                            </div>
                        </div>
                        <div class="col-lg-9" style={{ marginTop: "110px" }}>
                            <div class="row" >
                                {description ? this.doRenderDescription() : ""}
                                {file ? this.doRenderFile() : ""}
                                {video ? this.doRenderVideo() : ""}
                                {tugas ? this.doRenderTugas() : ""}
                                {nilai ? this.doRenderNilai() : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        classTraineeReducer: state.classTraineeReducer,
        tokenReducer: state.tokenReducer
    }
};

const mapDispatchToProps = {
    doGetListPdf: doGetPdfDetail,
    doGetListVideo: doGetVideoDetail,
    doGetTugasDetail: doGetTugasDetail
};




export default connect(mapStateToProps, mapDispatchToProps)(TraineeLesson)