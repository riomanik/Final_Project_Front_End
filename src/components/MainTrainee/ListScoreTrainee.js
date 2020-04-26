import React from "react";
import { connect } from "react-redux";
import { doGetScoreTask } from "api/trainee";
import { doReportScore } from "../../api/trainee";

export class ListScoreTrainee extends React.Component {

    state = { class: [] };


    componentDidMount = async () => {
        try {
            let a = this.props.userActiveReducer.traineeId
            const response = await doGetScoreTask(a, this.props.tokenReducer.token)
            const data = await response.json()
            this.setState({ class: data })
        } catch (error) {
            console.log(error)
        }
    }

    doRenderListClass = () => {
        if (this.state.class) {
            let i = 0
            return this.state.class.map(list => {
                i++
                return (
                    <tr className="text-center">
                        <td style={{ paddingTop: "20px" }}><b><b style={{ color: "black" }}>{i}</b></b></td>
                        <td style={{ paddingTop: "20px" }}><b><b style={{ color: "black" }}>{list.masterClass.topic}</b></b></td>
                        <td style={{ paddingTop: "20px" }}><b><b style={{ color: "black" }}>{list.subjectTask.title}</b></b></td>
                        <td style={{ paddingTop: "20px" }}><b><b style={{ color: "black" }}>{list.score}</b></b></td>
                    </tr >
                );
            })
        }
    };

    onDownload = async () => {
        try {
            const response = await doReportScore(this.props.userActiveReducer.traineeId, this.props.classTraineeReducer, this.props.tokenReducer.token);
            const blob = await response.blob();
            var a = window.URL.createObjectURL(
                new Blob([blob], { type: "application/pdf" })
            );
            window.open(a);
        } catch (error) {
            console.log(error)
        }
    };


    render() {
        return (
            <div>
                <div className="card-body" style={{ height: "820px" }}>
                    <h5 className="card-title" style={{ marginTop: "-65px" }}>
                        <div className="d-flex flex-row align-items-center">
                            <div className="flex-grow-1 text-center"  >
                                <h3 className="text-center"><b> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Google_Opinion_Rewards_app_logo.png/220px-Google_Opinion_Rewards_app_logo.png" style={{ width: "40px", height: "40px" }} />Score</b></h3>
                            </div>
                            <div>
                            </div>
                        </div>
                    </h5>
                    <div>
                        <div className="container" style={{ marginLeft: "0px" }}>
                            <table className="table" style={{ border: "solid 3px #251EE3", width: "1000px", }}>
                                <thead >
                                    <tr className="text-center">
                                        <th scope="col">ID</th>
                                        <th scope="col">Class Name</th>
                                        <th scope="col">Task Name</th>
                                        <th scope="col">Score</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {this.doRenderListClass()}
                                </tbody>
                            </table>
                            <button className="btn" onClick={this.onDownload} style={{ backgroundColor: "#251EE3", border: "solid 3px #251EE3" }}><b style={{ color: "white" }}><i class="fas fa-download" style={{ borderRadius: "90%" }}> Download </i></b>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        getTraineeId: state.getTraineeId,
        userActiveReducer: state.userActive,
        classTraineeReducer: state.classTraineeReducer,
        tokenReducer: state.tokenReducer
    };
};



export default connect(mapStateToProps, null)(ListScoreTrainee);
