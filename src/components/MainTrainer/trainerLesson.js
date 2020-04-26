import React from 'react';
import { Link, List, TextField } from '@material-ui/core';
import MainNavbarTrainer from 'components/Navbars/MainNavbarTrainer';
import { uploadFiles, doPostSubjectTask } from '../../api/trainer/index';
import { connect } from 'react-redux';
import { doPostSubjectMatter } from 'api/trainer';
import { doGetListPdf } from '../../api/trainee';
import { doGetListVideo } from 'api/trainee';
import { doGetListTask } from 'api/trainee';
import { doGetPdfDetailTrainer } from 'actions/trainer';
import { doGetVideoDetailTrainer } from 'actions/trainer'
import ListTraineeByTrainer from './ListTraineeByTrainer';
import { doGetTugasDetailTrainer } from 'actions/trainer';
import swal from 'sweetalert';

export class TrainerLesson extends React.Component {
    state = { listPdf: null, listVideo: null, listTugas: null, main: true, listTrainee: false, description: false, file: false, video: false, tugas: false, videoCall: false, addFile: false, addVideo: false, addTugas: false, materiFile: "", videoFile: [], tugasFile: [], dataMateri: "", dataVideo: "", dataTugas: "", Title: "", Description: "", idSubject: "", title: "𝐌𝐞𝐧𝐮" }


    componentWillMount = () => {
        try {
            this.doGetListPdf();
            this.doGetListVideo();
            this.doGetListTask();
        } catch (error) {
            console.log(error)
        }
    }

    doGetListPdf = async () => {
        try {
            const responsePdf = await doGetListPdf(this.props.classTrainerReducer, this.props.tokenReducer.token);
            const dataPdf = await responsePdf.json();
            if (responsePdf.status === 200) {
                this.setState({ listPdf: dataPdf })
            } else {
                console.log("error if-else")
            }
        } catch (error) {
            console.log(error)
        }
    }

    doGetListVideo = async () => {
        try {
            const responseVideo = await doGetListVideo(this.props.classTrainerReducer, this.props.tokenReducer.token);
            const dataVideo = await responseVideo.json();
            if (responseVideo.status === 200) {
                this.setState({ listVideo: dataVideo })
            } else {
                swal("there is an error")
            }
        } catch (error) {
            console.log(error)
        }
    }

    doGetListTask = async () => {
        try {
            const responseVideo = await doGetListTask(this.props.classTrainerReducer, this.props.tokenReducer.token);
            const dataTugas = await responseVideo.json();
            if (responseVideo.status === 200) {
                this.setState({ listTugas: dataTugas })
            } else {
                swal("there is an error")
            }
        } catch (error) {
            console.log(error)
        }
    }

    onInputMateriChange = async (event) => {
        try {
            if (event.target.files[0].type === "application/pdf") {
                await this.setState({
                    materiFile: event.target.files[0],
                    loaded: 0
                })
            } else {
                swal("Please Upload Only Pdf File")
                await this.setState({
                    materiFile: "",
                    loaded: 0
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    onInputVideoChange = async (event) => {
        try {
            if (event.target.files[0].type === "video/mp4") {
                await this.setState({
                    videoFile: event.target.files[0],
                    loaded: 0
                })
            } else {
                swal("Please Input Only Mp4 File")
                await this.setState({
                    materiFile: "",
                    loaded: 0
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    onInputTugasChange = async (event) => {
        try {
            if (event.target.files[0].type === "application/pdf") {
                await this.setState({
                    tugasFile: event.target.files[0],
                    loaded: 0
                })
            } else {
                swal("Please Input Only Pdf File")
            }
        } catch (error) {
            console.log(error)
        }
    }

    doNextStepsMateri = () => {
        try {
            this.setState({ dataMateri: "materi" })
        } catch (error) {
            console.log(error)
        }
    }

    doNextStepsMateri2 = async () => {
        try {
            this.setState({ dataMateri: "upload" })
        } catch (error) {
            console.log(error)
        }
    }

    doNextStepsMateriCancel = () => {
        try {
            this.setState({ dataMateri: "" })
        } catch (error) {
            console.log(error)
        }
    }

    doFirstStepsMateri = async () => {
        try {
            let uploadMateri = await new FormData();
            await uploadMateri.append('file', this.state.materiFile);
            const response = await uploadFiles(uploadMateri, this.props.tokenReducer.token);
            const data = await response.json();
            await this.setState({ idSubject: data.id })
            const responseMatter = await doPostSubjectMatter(this.props.classTrainerReducer, this.state.Title, this.state.Description, this.state.idSubject, this.props.tokenReducer.token);
            if (responseMatter.status === 200) {
                swal("success")
                this.setState({ dataMateri: "" })
                this.doGetListPdf();
            } else {
                swal("sorry there is an error")
            }
        } catch (error) {
            console.log(error)
        }
    }
    doNextStepsVideo = () => {
        try {
            this.setState({ dataVideo: "video" })
        } catch (error) {
            console.log(error)
        }
    }
    doNextStepsVideo2 = () => {
        try {
            this.setState({ dataVideo: "upload" })
        } catch (error) {
            console.log(error)
        }
    }

    doNextStepsVideoCancel = () => {
        try {
            this.setState({ dataVideo: "" })
        } catch (error) {
            console.log(error)
        }
    }

    doFirstStepsVideo = async () => {
        try {
            let uploadVideo = await new FormData();
            await uploadVideo.append('file', this.state.videoFile);
            const response = await uploadFiles(uploadVideo, this.props.tokenReducer.token);
            const data = await response.json();
            await this.setState({ idSubject: data.id })
            const responseVideo = await doPostSubjectMatter(this.props.classTrainerReducer, this.state.Title, this.state.Description, this.state.idSubject, this.props.tokenReducer.token);
            if (responseVideo.status === 200) {
                swal("success")
                this.setState({ dataVideo: "" })
                this.doGetListVideo();
            } else {
                swal("sorry there is an error")
            }
        } catch (error) {
            console.log(error)
        }
    }

    doNextStepsTugas = () => {
        try {
            this.setState({ dataTugas: "tugas" })
        } catch (error) {
            console.log(error)
        }
    }

    doNextStepsTugas2 = () => {
        try {
            this.setState({ dataTugas: "upload" })
        } catch (error) {
            console.log(error)
        }
    }

    doNextStepsTugasCancel = () => {
        try {
            this.setState({ dataTugas: "" })
        } catch (error) {
            console.log(error)
        }
    }

    doFirstStepsTugas = async () => {
        try {
            let uploadTugas = await new FormData();
            await uploadTugas.append('file', this.state.tugasFile);
            const response = await uploadFiles(uploadTugas, this.props.tokenReducer.token);
            const data = await response.json();
            await this.setState({ idSubject: data.id })
            const responseVideo = await doPostSubjectTask(this.props.classTrainerReducer, this.state.Title, this.state.Description, this.state.idSubject, this.props.tokenReducer.token);
            if (responseVideo.status === 200) {
                swal("success")
                this.setState({ dataTugas: "" })
                this.doGetListTask();
            } else {
                swal("sorry there is an error")
            }
        } catch (error) {
            console.log(error)
        }
    }
    doNextStepsVideoCallPreview = () => {
        try {
            this.setState({ videoCall: "preview" })
        } catch (error) {
            console.log(error)
        }
    }

    doChangeDescription = () => {
        try {
            this.setState({ main: false, description: true, file: false, video: false, tugas: false, videoCall: false, addFile: false, addVideo: false, addTugas: false, listTrainee: false, title: "𝐌𝐞𝐧𝐮" })
        } catch (error) {
            console.log(error)
        }
    }

    doChangeFile = () => {
        try {
            this.setState({ main: false, description: false, file: true, video: false, tugas: false, videoCall: false, addFile: true, addVideo: false, addTugas: false, listTrainee: false, title: "𝐋𝐞𝐬𝐬𝐨𝐧𝐬" })
        } catch (error) {
            console.log(error)
        }
    }

    doChangeVideo = () => {
        try {
            this.setState({ main: false, description: false, file: false, video: true, tugas: false, videoCall: false, addVideo: true, addFile: false, addTugas: false, listTrainee: false, title: "𝐕𝐢𝐝𝐞𝐨" })
        } catch (error) {
            console.log(error)
        }
    }

    doChangeTugas = () => {
        try {
            this.setState({ main: false, description: false, file: false, video: false, tugas: true, videoCall: false, addFile: false, addVideo: false, addTugas: true, listTrainee: false, title: "𝐓𝐚𝐬𝐤" })
        } catch (error) {
            console.log(error)
        }
    }

    doChangeVideoCall = () => {
        try {
            this.setState({ main: false, description: false, file: false, video: false, tugas: false, videoCall: true, addFile: false, addVideo: false, addTugas: false, listTrainee: false, title: "𝐓𝐫𝐚𝐢𝐧𝐞𝐞" })
        } catch (error) {
            console.log(error)
        }
    }

    doChangeListTrainee = () => {
        try {
            this.setState({ main: false, description: false, file: false, video: false, tugas: false, videoCall: false, addFile: false, addVideo: false, addTugas: false, listTrainee: true, title: "𝐓𝐫𝐚𝐢𝐧𝐞𝐞" })
        } catch (error) {
            console.log(error)
        }
    }

    onInputTitleLesson = (event) => {
        try {
            this.setState({ Title: event.target.value })
        } catch (error) {
            console.log(error)
        }
    }

    onInputDescriptionLesson = (event) => {
        try {
            this.setState({ Description: event.target.value })
        } catch (error) {
            console.log(error)
        }
    }




    renderVideo = (video) => {
        try {
            this.props.history.push({
                pathname: "/protected/file/main-trainer/video"
            })
            this.props.doGetListVideoTrainer(video)
        } catch (error) {
            console.log(error)
        }
    }

    renderFile = (pdf) => {
        try {
            this.props.history.push({
                pathname: "/protected/file/main-trainer/pdf"
            })
            this.props.doGetListPdfTrainer(pdf)
        } catch (error) {
            console.log(error)
        }
    }

    renderTugas = (tugas) => {
        try {
            this.props.history.push({
                pathname: "/protected/file/main-trainer/tugas"
            })
            this.props.doGetTugasDetailTrainer(tugas)
        } catch (error) {
            console.log(error)
        }
    }

    doRenderListTraineeByTrainer = () => {
        return (
            <div>
                <ListTraineeByTrainer />
            </div>
        )
    }

    doRenderMain = () => {
        return (
            <div class="card mb-3" style={{ border: "#45c5d9 solid 2px" }}>
                <img class="card-img-top" src="https://d2j1fqqektg7qq.cloudfront.net/wp-content/uploads/2018/05/iStock-pocitac.jpg" alt="Card image cap" style={{ height: "700px", width: "900px" }} />
                <div class="card-body">
                    <h3 class="card-title">𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐢𝐧 𝐭𝐡𝐢𝐬 𝐥𝐞𝐬𝐬𝐨𝐧</h3>
                    <p class="card-text">𝐄𝐧𝐣𝐨𝐲 𝐲𝐨𝐮𝐫 𝐣𝐨𝐮𝐫𝐧𝐞𝐲 𝐭𝐨 𝐬𝐡𝐚𝐫𝐞 𝐲𝐨𝐮𝐫 𝐤𝐧𝐨𝐰𝐥𝐞𝐝𝐠𝐞 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐭𝐫𝐚𝐢𝐧𝐞𝐞 !</p>
                </div>
            </div>
        )
    }
    doRenderDescription = () => {
        return (
            <div class="card card-outline-secondary " style={{ border: "#45c5d9 solid 2px" }}>
                <div >
                    <div class="container"><img src="https://www.melancholyman.co.uk/wp-content/uploads/2019/08/BlogHeader2.jpg" />
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
            </div>
        )
    }

    doAddFIles = () => {
        if (this.state.dataMateri === "") {
            return (
                <div >
                    <div class="card text-center" style={{ border: "solid 1px #251EE3" }}>
                        <div class="card-header" style={{ backgroundColor: "#251EE3" }}>
                            <b style={{ color: "white" }}>Files</b>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-upload fa-2x"></i></h5>
                            <p class="card-text mt-3"><b>To see the files , please add the Pdf file!</b></p>
                            <button type="button" className="btn" onClick={this.doNextStepsMateri} style={{ backgroundColor: "#251EE3", border: "1px solid #4287f5" }}>
                                <b style={{ color: "white" }}><i class="fas fa-cloud-upload-alt"> Upload Files</i></b>
                            </button>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.dataMateri === "materi") {
            return (
                <div>
                    <div class="card text-center" style={{ border: "solid 1px #251EE3" }}>
                        <div class="card-header" style={{ backgroundColor: "#251EE3" }}>
                            <b style={{ color: "white" }}>Add lessons</b>
                        </div>
                        <div class="card-body">
                            <TextField variant="outlined" required fullWidth id="Title" maxLength={50}
                                label="Tittle" name="Title" autoComplete="Title" onChange={this.onInputTitleLesson} />
                            <TextField variant="outlined" required fullWidth id="description" maxLength={50} style={{ marginTop: "7px" }}
                                label="Description" name="description" autoComplete="description" onChange={this.onInputDescriptionLesson} />
                            <button type="button" className="btn mr-5 mt-3" onClick={this.doNextStepsMateriCancel} style={{ backgroundColor: "#251EE3", border: "1px solid #4287f5" }}>
                                <b style={{ color: "white" }}>Back</b>
                            </button>
                            <button type="button" className="btn mt-3" onClick={this.doNextStepsMateri2} style={{ backgroundColor: "#251EE3", border: "1px solid #4287f5" }}>
                                <b style={{ color: "white" }}>Next</b>
                            </button>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.dataMateri === "upload") {
            return (
                <div>
                    <div class="card text-center" style={{ border: "solid 1px #251EE3" }}>
                        <div class="card-header" style={{ backgroundColor: "#251EE3" }}>
                            <b style={{ color: "white" }}>Add lessons</b>
                        </div>
                        <div class="card-body">
                            <TextField variant="outlined" required fullWidth id="Title" maxLength={50}
                                label="Tittle" name="Title" autoComplete="Title" value={this.state.Title} disabled />
                            <TextField variant="outlined" required fullWidth id="description" maxLength={50} style={{ marginTop: "7px" }}
                                label="Description" name="description" autoComplete="description" value={this.state.Description} disabled />
                            <input type="file" name="file" onChange={this.onInputMateriChange} style={{ marginTop: "10px" }} />
                            <button type="button" className="btn mr-3 mt-3" onClick={this.doNextStepsMateriCancel} style={{ backgroundColor: "#251EE3", border: "1px solid #4287f5" }}>
                                <b style={{ color: "white" }}>Cancel</b>
                            </button>
                            <button type="button" className="btn mt-3" onClick={this.doFirstStepsMateri} style={{ backgroundColor: "#251EE3", border: "1px solid #4287f5" }}>
                                <b style={{ color: "white" }}> <i class="fas fa-cloud-upload-alt"> Upload Files </i></b>
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    doAddVideo = () => {
        if (this.state.dataVideo === "") {
            return (
                <div>
                    <div class="card text-center" style={{ border: "solid 1px #251EE3" }}>
                        <div class="card-header" style={{ backgroundColor: "#251EE3" }}>
                            <b style={{ color: "white" }}>Videos</b>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-upload fa-2x"></i></h5>
                            <p class="card-text mt-3"><b>To see the videos , please add the videos file!</b></p>
                            <button type="button" className="btn" onClick={this.doNextStepsVideo} style={{ backgroundColor: "#251EE3", border: "1px solid #4287f5" }}>
                                <b style={{ color: "white" }}><i class="fas fa-cloud-upload-alt"> Upload Video</i></b>
                            </button>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.dataVideo === "video") {
            return (
                <div>
                    <div class="card text-center" style={{ border: "solid 1px #251EE3" }}>
                        <div class="card-header" style={{ backgroundColor: "#251EE3" }}>
                            <b style={{ color: "white" }}> Add Video </b>
                        </div>
                        <div class="card-body">
                            <TextField variant="outlined" required fullWidth id="Title" maxLength={50}
                                label="Tittle" name="Title" autoComplete="Title" onChange={this.onInputTitleLesson} />
                            <TextField variant="outlined" required fullWidth id="description" maxLength={50} style={{ marginTop: "7px" }}
                                label="Description" name="description" autoComplete="description" onChange={this.onInputDescriptionLesson} />
                            <button type="button" className="btn mr-5 mt-3" onClick={this.doNextStepsVideoCancel} style={{ backgroundColor: "#251EE3", border: "1px solid #4287f5" }}>
                                <b style={{ color: "white" }}>Back</b>
                            </button>
                            <button type="button" className="btn mt-3" onClick={this.doNextStepsVideo2} style={{ backgroundColor: "#251EE3", border: "1px solid #4287f5" }}>
                                <b style={{ color: "white" }}>Next</b>
                            </button>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.dataVideo === "upload") {
            return (
                <div>
                    <div class="card text-center" style={{ border: "solid 1px #251EE3" }}>
                        <div class="card-header" style={{ backgroundColor: "#251EE3" }}>
                            <b style={{ color: "white" }}>Add Video</b>
                        </div>
                        <div class="card-body">
                            <TextField variant="outlined" required fullWidth id="Title" maxLength={50}
                                label="Tittle" name="Title" autoComplete="Title" value={this.state.Title} disabled />
                            <TextField variant="outlined" required fullWidth id="description" maxLength={50} style={{ marginTop: "7px" }}
                                label="Description" name="description" autoComplete="description" value={this.state.Description} disabled />
                            <input type="file" name="file" onChange={this.onInputVideoChange} />
                            <button type="button" className="btn mr-3 mt-3" onClick={this.doNextStepsVideoCancel} style={{ backgroundColor: "#251EE3", border: "1px solid #4287f5" }}>
                                <b style={{ color: "white" }}>Cancel</b>
                            </button>
                            <button type="button" className="btn btn-warning mt-3" onClick={this.doFirstStepsVideo} style={{ backgroundColor: "#251EE3", border: "1px solid #4287f5" }}>
                                <b style={{ color: "white" }}><i class="fas fa-cloud-upload-alt"> Upload Video</i></b>
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    doAddTugas = () => {
        if (this.state.dataTugas === "") {
            return (
                <div>
                    <div class="card text-center" style={{ border: "solid 1px #251EE3" }}>
                        <div class="card-header" style={{ backgroundColor: "#251EE3" }}>
                            <b style={{ color: 'white' }}>Task</b>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-upload fa-2x"></i></h5>
                            <p class="card-text mt-3"><b >To see the Task , please add the task file!</b></p>
                            <button type="button" className="btn " onClick={this.doNextStepsTugas} style={{ backgroundColor: "#251EE3", border: "1px solid #4287f5" }}>
                                <b style={{ color: "white" }}><i class="fas fa-cloud-upload-alt"> Upload Tugas</i></b>
                            </button>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.dataTugas === "tugas") {
            return (
                <div>
                    <div class="card text-center" style={{ border: "solid 1px #251EE3" }} >
                        <div class="card-header" style={{ backgroundColor: "#251EE3" }}>
                            <b style={{ color: "white" }}>Add Task</b>
                        </div>
                        <div class="card-body">
                            <TextField variant="outlined" required fullWidth id="Title" maxLength={50}
                                label="Tittle" name="Title" autoComplete="Title" onChange={this.onInputTitleLesson} />
                            <TextField variant="outlined" required fullWidth id="description" maxLength={50} style={{ marginTop: "7px" }}
                                label="Description" name="description" autoComplete="description" onChange={this.onInputDescriptionLesson} />
                            <button type="button" className="btn mr-5 mt-3" onClick={this.doNextStepsTugasCancel} style={{ backgroundColor: "#251EE3", border: "1px solid #4287f5" }}>
                                <b style={{ color: "white" }}>Back</b>
                            </button>
                            <button type="button" className="btn mt-3" onClick={this.doNextStepsTugas2} style={{ backgroundColor: "#251EE3", border: "1px solid #4287f5" }}>
                                <b style={{ color: "white" }}>Next</b>
                            </button>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.dataTugas === "upload") {
            return (
                <div>
                    <div class="card text-center" style={{ border: "solid 1px #251EE3" }}>
                        <div class="card-header" style={{ backgroundColor: "#251EE3" }}>
                            <b style={{ color: "white" }}>Add Task</b>
                        </div>
                        <div class="card-body">
                            <TextField variant="outlined" required fullWidth id="Title" maxLength={50}
                                label="Tittle" name="Title" autoComplete="Title" value={this.state.Title} disabled />
                            <TextField variant="outlined" required fullWidth id="description" maxLength={50} style={{ marginTop: "7px" }}
                                label="Description" name="description" autoComplete="description" value={this.state.Description} disabled />
                            <input type="file" name="file" onChange={this.onInputTugasChange} />
                            <button type="button" className="btn mr-3 mt-3" onClick={this.doNextStepsTugasCancel} style={{ backgroundColor: "#251EE3", border: "1px solid #4287f5" }}>
                                <b style={{ color: "white" }}>Cancel</b>
                            </button>
                            <button type="button" className="btn mt-3" onClick={this.doFirstStepsTugas} style={{ backgroundColor: "#251EE3", border: "1px solid #4287f5" }}>
                                <b style={{ color: "white" }}><i class="fas fa-cloud-upload-alt"> Upload Files</i></b>
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    doRenderFile = () => {
        if (this.state.listPdf !== null) {
            return this.state.listPdf.map(pdf => {
                return (
                    <div class="col-lg-4 col-md-6 mb-4"  >
                        <div class="card" style={{ height: "auto", border: "solid 1px #45c5d9", height: "450px" }}>
                            <a onClick={() => this.renderFile(pdf.files.pathFile)}><img class="card-img-top" src="https://www.zamzar.com/images/filetypes/pdf.png" alt="" style={{ width: "180px", marginLeft: "30px", marginTop: "15px" }} /></a>
                            <div class="card-body" >
                                <br></br>
                                <h5 class="card-title text-center">
                                    <Link ><b><b>{pdf.title}</b></b></Link>
                                </h5>
                                <p class="card-text mt-3"><b>{pdf.description}</b></p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    doRenderVideo = () => {
        if (this.state.listVideo !== null) {
            return this.state.listVideo.map(videoData => {
                return (
                    <div class="col-lg-4 col-md-6 mb-4"  >
                        <div class="card" style={{ height: "auto", border: "solid 1px #45c5d9", height: "450px" }}>
                            <a onClick={() => this.renderVideo(videoData.files.pathFile)}><img class="card-img-top" src="https://brightplanet.com/wp-content/uploads/sites/8/2016/04/play-1073616_1280.png" alt="" style={{ width: "180px", marginLeft: "30px", marginTop: "15px" }} /></a>
                            <div class="card-body" >
                                <br></br>
                                <h5 class="card-title text-center">
                                    <Link  ><b><b>{videoData.title}</b></b></Link>
                                </h5>
                                <p class="card-text mt-3"><b>{videoData.description}</b></p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    doRenderTugas = () => {
        if (this.state.listTugas !== null) {
            return this.state.listTugas.map(tugas => {
                return (
                    <div class="col-lg-4 col-md-6 mb-4"  >
                        <div class="card" style={{ height: "auto", border: "solid 1px #45c5d9", height: "450px" }}>
                            <a onClick={() => this.renderTugas(tugas.files.pathFile)}><img class="card-img-top" src="https://static.vecteezy.com/system/resources/previews/000/355/835/non_2x/task-vector-icon.jpg" alt="" style={{ width: "180px", marginLeft: "30px", marginTop: "15px" }} /></a>
                            <div class="card-body"  >
                                <br></br>
                                <h5 class="card-title text-center">
                                    <Link  ><b><b>{tugas.title}</b></b></Link>
                                </h5>
                                <p class="card-text mt-3"><b>{tugas.description}</b></p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    render() {
        let main = this.state.main;
        let description = this.state.description;
        let file = this.state.file;
        let video = this.state.video;
        let tugas = this.state.tugas;
        let videoCall = this.state.videoCall;
        let addFiles = this.state.addFile;
        let addVideo = this.state.addVideo;
        let addTugas = this.state.addTugas;
        let listTrainee = this.state.listTrainee;
        return (
            <div>
                <MainNavbarTrainer status={{ name: "TrainerLesson" }} />
                <div class="container" style={{ marginTop: "70px" }}>
                    <div class="row">
                        <div class="col-lg-3">
                            <h1 class="my-4"><b>{this.state.title}</b></h1>
                            <div class="list-group">
                                <List onClick={this.doChangeDescription} class="btn text-left" style={{ backgroundColor: "#251EE3", border: "1px solid #4287f5" }}><h5> <b style={{ color: "white" }}><i class="fas fa-network-wired"> Description</i></b></h5></List>
                                <List onClick={this.doChangeFile} class="btn text-left" style={{ backgroundColor: "#251EE3", border: "1px solid #4287f5" }}><h5> <b style={{ color: "white" }}><i class="fas fa-file-pdf"> Lessons</i></b></h5></List>
                                <List onClick={this.doChangeVideo} class="btn text-left" style={{ backgroundColor: "#251EE3", border: "1px solid #4287f5" }}><h5>  <b style={{ color: "white" }}><i class="fas fa-file-video"> Video</i></b></h5></List>
                                <List onClick={this.doChangeTugas} class="btn text-left" style={{ backgroundColor: "#251EE3", border: "1px solid #4287f5" }}><h5>  <b style={{ color: "white" }}><i class="fas fa-tasks"> Task</i></b></h5></List>
                                <List onClick={this.doChangeListTrainee} class="btn text-left" style={{ backgroundColor: "#251EE3", border: "1px solid #4287f5" }}><h5> <b style={{ color: "white" }}><i class="fas fa-user-graduate"> Trainee</i></b></h5></List>
                            </div>
                        </div>
                        <div class="col-lg-9" style={{ marginTop: "100px", height: "850px" }}>
                            <div class="row" >
                                {main ? this.doRenderMain() : ""}
                                {description ? this.doRenderDescription() : ""}
                                {file ? this.doRenderFile() : ""}
                                {video ? this.doRenderVideo() : ""}
                                {tugas ? this.doRenderTugas() : ""}
                                {listTrainee ? this.doRenderListTraineeByTrainer() : ""}
                            </div>
                            {addFiles ? this.doAddFIles() : ""}
                            {addVideo ? this.doAddVideo() : ""}
                            {addTugas ? this.doAddTugas() : ""}
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        userActiveReducer: state.userActive,
        classTrainerReducer: state.classTrainerReducer,
        tokenReducer: state.tokenReducer
    };
};

const mapDispatchToProps = {
    doGetListPdfTrainer: doGetPdfDetailTrainer,
    doGetListVideoTrainer: doGetVideoDetailTrainer,
    doGetTugasDetailTrainer: doGetTugasDetailTrainer
};

export default connect(mapStateToProps, mapDispatchToProps)(TrainerLesson);