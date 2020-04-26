import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MainNavbarTrainer from 'components/Navbars/MainNavbarTrainer';

export class tugasTrainee extends React.Component {

    render() {
        return (
            <div>
                <MainNavbarTrainer status={{ name: "tugasTrainer" }} />
                <div style={{ marginTop: "100px" }}>
                    <div class="col-lg-8 card" style={{ margin: "auto", border: "solid 20px #0275d8", borderRadius: "2%", boxShadow: "1000px" }}>
                        <h1 class="mt-4 text-center"><b><img src="https://cdn3.iconfinder.com/data/icons/startup-management-flat/256/-_report_end_checklist_management_project-512.png" style={{ width: "100px", height: "100px" }} /> Task</b></h1>
                        <hr style={{ backgroundColor: "#0275d8", border: "#0275d8 solid 5px" }} />
                        <hr style={{ backgroundColor: "#0275d8", marginTop: "-1px" }} />
                        <PDFViewer
                            document={{
                                url: this.props.tugasFilesTrainerReducer,
                            }}
                        />
                        <hr />
                        <p class="lead"><b>By Giving task  it is hoped that users can understand them more clearly .</b></p>
                        <p><b>Task contain lessons that are provided by Trainers and can only be accessed by trainees who have purchased  .</b></p>
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
        tugasFilesTrainerReducer: state.tugasFilesTrainerReducer,

    }
};


export default connect(mapStateToProps, null)(tugasTrainee)