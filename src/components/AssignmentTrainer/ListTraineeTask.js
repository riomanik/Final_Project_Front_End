import React from "react";
import { doGetListTraineeByClass, doGetListTaskTrainer } from "../../api/trainer/index";
import { connect } from "react-redux";
import MainNavbarTrainer from "components/Navbars/MainNavbarTrainer";
import { selectPdfAction } from "../../actions/trainee";
import Modal from "components/modal/Modal";
import WindMillLoading from "react-loadingg/lib/WindMillLoading";
import { taskNameTraineeTrainer } from "actions/trainer";
import { fileTaskSubmitTrainee } from "actions/trainer";

export class ListTraineeTask extends React.Component {

    state = { class: [], task: [], action: true, loading: false, title: <h4><b><img src="https://learninghub.mrooms.net/pluginfile.php/36990/course/summary/5th_icon.png" style={{ width: "50px", height: "50px" }}></img>  My Trainee</b></h4> };


    componentWillMount = async () => {
        try {
            const response = await doGetListTraineeByClass(this.props.classTrainerReducer, this.props.tokenReducer.token)
            const data = await response.json()
            this.setState({ class: data })
        } catch (error) {
            console.log(error)
        }
    }

    doDetailTugas = async (id) => {
        try {
            const response = await doGetListTaskTrainer(this.props.classTrainerReducer, id, this.props.tokenReducer.token);
            this.props.taskNameTraineeTrainer(id)
            const data = await response.json()
            await this.setState({ task: data, action: false, title: <h4><b><img src="https://cdn4.iconfinder.com/data/icons/business-and-banking-2-1/128/List-512.png" style={{ width: "50px", height: "50px" }}></img> Task</b></h4> })
        } catch (error) {
            console.log(error)
        }
    }

    doDetailScore = async (id) => {
        try {
            this.props.taskNameTraineeTrainer(id)
            this.props.history.push({
                pathname: "/protected/main-trainer/trainee-score"
            })
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
                    <tr key={list.id} className="text-center">
                        <td style={{ paddingTop: "20px" }}><b><b>{i}</b></b></td>
                        <td style={{ paddingTop: "20px" }}><b><b>{list.fullName}</b></b></td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-primary mr-3"
                                onClick={() => this.doDetailTugas(list.traineeId)}
                            >
                                <i class="fas fa-tasks"></i>
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-primary mr-3"
                                onClick={() => this.doDetailScore(list.traineeId)}
                            >
                                <i class="fas fa-clipboard-list"></i>
                            </button>
                        </td>
                    </tr >
                );
            })
        }
    };

    doRenderScore = async (list, id) => {
        try {
            await this.setState({ loading: true })
            await this.props.fileTaskSubmitTrainee(id)
            await this.props.selectPdfAction(list)
            await this.props.history.push({
                pathname: "/protected/main-trainer/score-assignment"
            });
            await this.setState({ loading: false })
        } catch (error) {
            console.log(error)
        }
    }


    doRenderTaskTrainee = () => {
        if (this.state.task) {
            let i = 0
            let status = true
            return this.state.task.map(list => {
                i++
                if (list.status === "COMPLETED") {
                    status = true; list.status = <b>  Uploaded</b>
                } else if (list.status === "NULL") {
                    status = false; list.status = <b>  Not Uploaded</b>
                }
                return (
                    <tr key={list.traineeId} className="text-center">
                        <td style={{ paddingTop: "20px" }}><b><b>{i}</b></b></td>
                        <td style={{ paddingTop: "20px" }}><b>{list.title}</b></td>
                        <td style={{ paddingTop: "20px" }}><b>{list.status}</b></td>
                        {status ?
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-primary mr-3"
                                    onClick={() => this.doRenderScore(list.submittedTaskFile, list.id)}
                                >
                                    <i class="fas fa-eye"></i>
                                </button>
                            </td>
                            : <td>
                                <button
                                    type="button"
                                    className="btn btn-danger mr-3"
                                >
                                    <i class="fas fa-times fa-lg"></i>
                                </button>
                            </td>}
                    </tr>
                );
            })
        } else {
            return (<div>NO DATA</div>)
        }
    };
    render() {
        return (
            <div style={{ height: "850px" }}>
                <MainNavbarTrainer status={{ name: "trainee" }} />
                <div className="card-body" style={{ marginTop: "100px" }}>
                    <h5 className="card-title" style={{ marginTop: "-90px" }}>
                        <div className="d-flex flex-row align-items-center">
                            <div className="flex-grow-1 text-center">
                                <Modal visible={this.state.loading}>
                                    <div><WindMillLoading /></div>
                                </Modal>
                            </div>
                            <div>
                            </div>
                        </div>
                    </h5>
                    <div>
                        <div className="container" style={{ height: "10px" }}>
                            <h1 className="text-center" style={{ marginTop: "80px" }}>{this.state.title}</h1>
                            <table className="table" style={{ border: "solid 3px #251EE3", width: "1150px" }}>
                                <thead >
                                    {this.state.action ?
                                        <tr className="text-center">
                                            <th scope="col">ID <i class="fas fa-id-card-alt"></i></th>
                                            <th scope="col">Name <i class="fas fa-user"></i></th>
                                            <th scope="col">Task </th>
                                            <th scope="col">Score </th>
                                        </tr>
                                        : <tr className="text-center">
                                            <th scope="col">ID <i class="fas fa-id-card-alt"></i></th>
                                            <th scope="col">Name <i class="fas fa-user"></i></th>
                                            <th scope="col">Status <i class="fas fa-user"></i></th>
                                            <th scope="col">Action <i class="fas fa-user"></i></th>
                                        </tr>}
                                </thead>
                                <tbody >
                                    {this.state.action ? this.doRenderListClass() : this.doRenderTaskTrainee()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



const mapDispatchToProps = {
    selectPdfAction: selectPdfAction,
    taskNameTraineeTrainer: taskNameTraineeTrainer,
    fileTaskSubmitTrainee: fileTaskSubmitTrainee
};

const mapStateToProps = state => {
    return {
        classTrainerReducer: state.classTrainerReducer,
        tokenReducer: state.tokenReducer
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTraineeTask);
