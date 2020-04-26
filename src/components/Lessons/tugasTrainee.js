import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs'
import MainNavbarTrainee from 'components/Navbars/MainNavbarTrainee';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { uploadFiles } from '../../api/trainer';
import { doSubmitTask } from '../../api/trainee';
import swal from 'sweetalert';

export class tugasTrainee extends React.Component {
    state = { dataTugas: "", tugasFile: [], tugas: true, idSubject: null, Title: "", Description: "" }

    onInputTugasChange = async (event) => {
        try {
            await this.setState({
                tugasFile: event.target.files[0],
                loaded: 0
            })
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

    doNextStepsTugas = () => {
        try {
            this.setState({ dataTugas: "tugas" })
        } catch (error) {
            console.log(error)
        }
    }

    doNextStepsTugas2 = async () => {
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
            swal({
                title: "Are you sure?",
                text: "We will create your acount with this information!",
                buttons: true,
                dangerMode: true,
            })
                .then(async (willDelete) => {
                    await this.setState({ loading: true });
                    if (willDelete) {
                        let uploadTugas = await new FormData();
                        await uploadTugas.append('file', this.state.tugasFile);
                        const response = await uploadFiles(uploadTugas, this.props.tokenReducer.token);
                        const data = await response.json();
                        await this.setState({ idSubject: data.id })
                        const responseTugas = await doSubmitTask(this.props.tugasFilesTraineeReducer.id, this.props.userActiveReducer.traineeId, this.state.idSubject, this.props.tokenReducer.token);
                        if (responseTugas.status === 200) {
                            this.setState({ dataTugas: "" })
                            this.setState({ tugas: false })
                            swal("Your Task has been submitted")
                        } else {
                            swal("please input your file")
                            console.log("error if-else")
                        }
                    } else {
                        swal("that's okay , we will wait you :D");
                    }
                });
        } catch (error) {
            console.log(error)
        }
    }

    doAddTugas = () => {
        if (this.state.dataTugas === "") {
            return (
                <div>
                    <div class="card text-center">
                        <div class="card-header" style={{ backgroundColor: "#251EE3" }}>
                            <b style={{ color: "white" }}>Task</b>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><b>Submit Task</b></h5>
                            <p class="card-text"><b>If you have finished working, please upload your answers </b></p>
                            <button type="button" className="btn" onClick={this.doNextStepsTugas} style={{ backgroundColor: "#251EE3" }}>
                                <b style={{ color: "white", border: "solid 1px #251EE3 " }}><i class="fas fa-upload" >  Upload Task</i></b>
                            </button>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.dataTugas === "tugas") {
            return (
                <div>
                    <div class="card text-center">
                        <div class="card-header" style={{ backgroundColor: "#251EE3" }}>
                            <b style={{ color: "white" }}>Task</b>
                        </div>
                        <div class="card-body">
                            <TextField variant="outlined" required fullWidth id="Title" maxLength={50}
                                label="Tittle" name="Title" autoComplete="Title" onChange={this.onInputTitleLesson} />
                            <TextField variant="outlined" required fullWidth id="description" maxLength={50} style={{ marginTop: "7px" }}
                                label="Description" name="description" autoComplete="description" onChange={this.onInputDescriptionLesson} />
                            <button type="button" className="btn mr-5 mt-3" onClick={this.doNextStepsTugasCancel} style={{ backgroundColor: "#251EE3" }}>
                                <b style={{ color: "white", border: "solid 1px #251EE3 " }}>Back Steps</b>
                            </button>
                            <button type="button" className="btn mt-3" onClick={this.doNextStepsTugas2} style={{ backgroundColor: "#251EE3" }}>
                                <b style={{ color: "white", border: "solid 1px #251EE3 " }}>Next Steps</b>
                            </button>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.dataTugas === "upload") {
            return (
                <div>
                    <div class="card text-center">
                        <div class="card-header" style={{ backgroundColor: "#251EE3" }}>
                            <b style={{ color: "white" }}>Task</b>
                        </div>
                        <div class="card-body">
                            <TextField variant="outlined" required fullWidth id="Title" maxLength={50}
                                label="Tittle" name="Title" autoComplete="Title" value={this.state.Title} disabled />
                            <TextField variant="outlined" required fullWidth id="description" maxLength={50} style={{ marginTop: "7px" }}
                                label="Description" name="description" autoComplete="description" value={this.state.Description} disabled />
                            <input type="file" name="file" onChange={this.onInputTugasChange} />
                            <button type="button" className="btn mr-3 mt-3" onClick={this.doNextStepsTugasCancel} style={{ backgroundColor: "#251EE3", border: "solid 1px #251EE" }}>
                                <b style={{ color: "white" }}>Cancel</b>
                            </button>
                            <button type="button" className="btn mt-3" onClick={this.doFirstStepsTugas} style={{ backgroundColor: "#251EE3", border: "solid 1px #251EE" }}>
                                <b style={{ color: "white" }}>Upload</b>
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    }


    render() {
        let tugas = this.state.tugas;
        return (
            <div>
                <MainNavbarTrainee status={{ name: "tugasTrainee" }} />
                <div style={{ marginTop: "100px" }}>
                    <div class="col-lg-8 card" style={{ margin: "auto", border: "solid 20px #0275d8", borderRadius: "2%", boxShadow: "1000px" }}>
                        <h1 class="mt-4 text-center"><b><img src="https://cdn3.iconfinder.com/data/icons/startup-management-flat/256/-_report_end_checklist_management_project-512.png" style={{ width: "100px", height: "100px" }} /> Task</b></h1>
                        <hr style={{ backgroundColor: "#0275d8", border: "#0275d8 solid 5px" }} />
                        <hr style={{ backgroundColor: "#0275d8", marginTop: "-1px" }} />
                        <PDFViewer
                            document={{
                                url: this.props.tugasFilesTraineeReducer.files.pathFile,
                            }}
                        />
                        <hr />
                        <p class="lead"><b>By Giving task  it is hoped that users can understand them more clearly .</b></p>
                        <p><b>Task contain lessons that are provided by Trainers and can only be accessed by trainees who have purchased  .</b></p>
                        <p><b>For those of you who have finished the task you can upload it here </b></p>
                        {tugas ? this.doAddTugas() : ""}
                        <blockquote class="blockquote">
                            <p class="mb-0"><b>We don't know when we fail and whenever we succeed but we know the current situation and what actions to take, so don't give up!</b></p>
                            <footer class="blockquote-footer"><b style={{ color: "blue" }}>ngIDE</b>
                                <cite title="Source Title"><b style={{ color: "blue" }}> Team</b></cite>
                            </footer>
                        </blockquote>
                        <p><b>Thank you for watching our lesson, we hope you will cleary understanding the lesson .</b></p>
                        <p><b>To view other material, you can go back or click the link</b><Link to="/protected/main-trainer/lessons"><b style={{ color: "red" }}>disini</b></Link></p>
                        <hr>
                        </hr>
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        userActiveReducer: state.userActive,
        pdfFilesTraineeReducer: state.pdfFilesTraineeReducer,
        tugasFilesTraineeReducer: state.tugasFilesTraineeReducer,
        tokenReducer: state.tokenReducer
    }
};


export default connect(mapStateToProps, null)(tugasTrainee)