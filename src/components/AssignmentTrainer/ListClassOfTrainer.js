import React from "react";
import MainNavbarTrainer from "components/Navbars/MainNavbarTrainer";
import { getClassTrainer } from "../../api/trainer/index";
import { connect } from "react-redux";
import { doDetailClassTrainer } from "../../actions/trainer";
import { taskClassIdTrainer } from "actions/trainer";
import { doDetailNameClassTrainer } from "actions/trainer";

export class ListClassOfTrainer extends React.Component {

    state = { rating: 3, class: [] };

    componentDidMount = async () => {
        try {
            const response = await getClassTrainer(this.props.userActiveReducer.trainerId, this.props.tokenReducer.token)
            const data = await response.json()
            this.setState({ class: data })
        } catch (error) {
            console.log(error)
        }
    }

    doDetailClass = (id, list) => {
        try {
            this.props.doDetailClassTrainer(id)
            this.props.doDetailNameClassTrainer(list)
            this.props.history.push({
                pathname: "/protected/main-trainer/trainee-task"
            })
        } catch (error) {
            console.log(error)
        }
    }


    doRenderListClass = () => {
        if (this.state.class) {
            let i = 0
            return this.state.class.map(list => {
                i++;
                let status = ""
                if (list.status === "AVAILABLE") {
                    status = <>𝐀𝐜𝐭𝐢𝐯𝐞</>
                } else if (list.status === "NOT AVAILABLE") {
                    status = <>𝐍𝐨𝐭 𝐀𝐜𝐭𝐢𝐯𝐞</>
                }
                return (
                    <tr className="text-center" >
                        <td className="text-center" style={{ paddingTop: "20px" }}><b><b>{i}</b></b></td>
                        <td className="text-center" style={{ paddingTop: "20px" }}><b><b>{list.subject.programmingLanguage}</b></b></td>
                        <td className="text-center" style={{ paddingTop: "20px" }}><b><b>{list.topic}</b></b></td>
                        <td className="text-center" style={{ paddingTop: "20px" }}><b><b>{status}</b></b></td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-primary "
                                onClick={() => this.doDetailClass(list.id, list)}
                            >
                                <img src="https://cdn0.iconfinder.com/data/icons/construction-white-with-multicolor-circle-backgrou/2048/425_-_Door-512.png" style={{ width: "30px", height: "30px" }} />
                            </button>
                        </td>
                    </tr>
                );
            })
        }
    };


    render() {
        return (
            <div>
                <MainNavbarTrainer />
                <div className="card-body" style={{ height: "925px" }}>
                    <h5 className="card-title" style={{ marginTop: "100px" }}>
                        <div className="d-flex flex-row align-items-center">
                            <div className="flex-grow-1 text-center">
                                <h3><img src="https://www.schoolconnectonline.com/images/feattest.svg" style={{ width: "100px", height: "100px" }} /> <b style={{ color: "black" }}> 𝐂𝐡𝐨𝐨𝐬𝐞 𝐂𝐥𝐚𝐬𝐬</b></h3>
                            </div>
                            <div>
                            </div>
                        </div>
                    </h5>
                    <div>
                        <div className="container" style={{ height: "10px" }}>
                            <table className="table" style={{ border: "solid 3px #251EE3", }}>
                                <thead >
                                    <tr className="text-center">
                                        <th scope="col">ID</th>
                                        <th scope="col">Programming Language</th>
                                        <th scope="col">Topic</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
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
        userActiveReducer: state.userActive,
        tokenReducer: state.tokenReducer
    };
};
const mapDispatchToProps = {
    doDetailClassTrainer: doDetailClassTrainer,
    taskClassIdTrainer: taskClassIdTrainer,
    doDetailNameClassTrainer: doDetailNameClassTrainer
};
export default connect(mapStateToProps, mapDispatchToProps)(ListClassOfTrainer);

