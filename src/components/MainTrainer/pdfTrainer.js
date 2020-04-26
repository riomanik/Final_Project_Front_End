import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs'
import { connect } from 'react-redux';
import MainNavbarTrainer from 'components/Navbars/MainNavbarTrainer';
import { Link } from 'react-router-dom';

export class pdfTrainer extends React.Component {

    render() {
        return (
            <div>
                <MainNavbarTrainer status={{ name: "pdfTrainer" }} />
                <div style={{ marginTop: "100px" }}>
                    <div class="col-lg-8 card" style={{ margin: "auto", border: "solid 15px #0275d8", borderRadius: "2%", boxShadow: "1000px" }}>
                        <h1 class="mt-4 text-center"><b><img src="https://cdn2.iconfinder.com/data/icons/education-e-learning/64/ONLINE_BOOKS-512.png" style={{ width: "100px", height: "100px" }} /> 𝐋𝐞𝐬𝐬𝐨𝐧</b></h1>
                        <hr style={{ backgroundColor: "#0275d8", border: "#0275d8 solid 5px" }} />
                        <hr style={{ backgroundColor: "#0275d8", marginTop: "-1px" }} />
                        <PDFViewer
                            document={{
                                url: this.props.pdfFilesTrainerReducer
                            }}
                        />
                        <hr />
                        <p class="lead"><b style={{ color: "black" }}>By delivering lessons through pdf it is hoped that users can understand them more clearly.</b></p>
                        <p><b>The previews contain lessons that are provided by Trainers and can only be accessed by trainees who have purchased .</b></p>
                        <p><b>For those of you who have read the Lesson until the End, there will be an
                            additional Task for trainees and if the task does not exist , please wait patiently
                             and be able to repeat the material again </b></p>
                        <blockquote class="blockquote">
                            <p class="mb-0"><b style={{ color: "black" }}>We don't know when we fail and whenever we succeed but we know the current situation and what actions to take, so don't give up</b></p>
                            <footer class="blockquote-footer"><b style={{ color: "blue" }}>ngIDE
                        <cite title="Source Title"> Team</cite></b>
                            </footer>
                        </blockquote>
                        <p><b style={{ color: "black" }}>Thank you for reading our lesson, we hope you will cleary understanding the lesson .</b></p>
                        <p><b style={{ color: "black" }}>To view other material, you can go back or click the link </b><Link to="/protected/main-trainer/lessons"><b style={{ color: "red" }}>Here</b></Link></p>
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
        pdfFilesTrainerReducer: state.pdfFilesTrainerReducer,
    }
};


export default connect(mapStateToProps, null)(pdfTrainer)