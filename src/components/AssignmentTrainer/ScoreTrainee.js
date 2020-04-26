import React from "react";
import MainNavbarTrainer from "components/Navbars/MainNavbarTrainer";
import { connect } from "react-redux";
import { doGetScoreTask } from "api/trainee";

export class ScoreTrainee extends React.Component {

    state = { class: [] };


    componentDidMount = async () => {
        try {
            const response = await doGetScoreTask(this.props.nameTraineeReducer, this.props.tokenReducer.token)
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
                        <td style={{ paddingTop: "20px" }}><b>{i}</b></td>
                        <td style={{ paddingTop: "20px" }}><b>{list.traineeDetail.fullName}</b></td>
                        <td style={{ paddingTop: "20px" }}><b>{list.masterClass.topic}</b></td>
                        <td style={{ paddingTop: "20px" }}><b>{list.subjectTask.title}</b></td>
                        <td style={{ paddingTop: "20px" }}><b>{list.score}</b></td>
                    </tr>
                );
            })
        }
    };


    render() {
        return (
            <div style={{ height: "920px" }}>
                <MainNavbarTrainer status={{ name: "score" }} />
                <div className="card-body">
                    <h5 className="card-title" style={{ margin: "auto", marginTop: "105px" }}>
                        <div className="d-flex flex-row align-items-center">
                            <div className="flex-grow-1 text-center">
                                <h3><img src="https://cdn2.iconfinder.com/data/icons/media-player-blue-round/512/star-01-512.png" style={{ width: "50px", height: "50px" }} /><b> Score</b></h3>
                            </div>
                            <div>
                            </div>
                        </div>
                    </h5>
                    <div>
                        <div className="container mt-3" style={{ margin: "auto" }}>
                            <table className="table" style={{ border: "solid 3px #251EE3", width: "1100px" }}>
                                <thead >
                                    <tr className="text-center">
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Class Name</th>
                                        <th scope="col">Task Name</th>
                                        <th scope="col">Score</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {this.doRenderListClass()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        nameTraineeReducer: state.nameTraineeReducer,
        tokenReducer: state.tokenReducer
    };
};

const mapDispatchToProps = {
};


export default connect(mapStateToProps, mapDispatchToProps)(ScoreTrainee);
