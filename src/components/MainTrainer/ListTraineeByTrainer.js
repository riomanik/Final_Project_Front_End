import React from "react";
import { doGetListTraineeByClass } from "../../api/trainer/index";
import { connect } from "react-redux";

export class ListTraineeByTrainer extends React.Component {

    state = { class: [] };


    componentDidMount = async () => {
        try {
            const response = await doGetListTraineeByClass(this.props.classTrainerReducer, this.props.tokenReducer.token)
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
                        <td style={{ paddingTop: "20px" }}><b><b>{i}</b></b></td>
                        <td style={{ paddingTop: "20px" }}><b><b>{list.fullName}</b></b></td>
                        <td style={{ paddingTop: "20px" }}><b><b>{list.phoneNumber}</b></b></td>
                        <td style={{ paddingTop: "20px" }}><b><b>{list.address}</b></b></td>
                    </tr>
                );
            })
        }
    };


    render() {
        return (
            <div>
                <div className="card-body">
                    <h5 className="card-title" style={{ marginTop: "-90px" }}>
                        <div className="d-flex flex-row align-items-center">
                            <div className="flex-grow-1 text-center">
                                <h4><b><img src="https://cdn4.iconfinder.com/data/icons/silky-icon-user-filled-in/60/users2-2-512.png" style={{ width: "50px", height: "50px" }}></img>  My Trainee</b></h4>
                            </div>
                            <div>
                            </div>
                        </div>
                    </h5>
                    <div>
                        <div className="container" style={{ height: "10px" }}>
                            <table className="table" style={{ border: "solid 3px #251EE3", width: "1150px" }}>
                                <thead >
                                    <tr className="text-center">
                                        <th scope="col">ID <i class="fas fa-id-card-alt"></i></th>
                                        <th scope="col">Name <i class="fas fa-user"></i></th>
                                        <th scope="col">Phone Number <i class="fas fa-phone"></i></th>
                                        <th scope="col">Address <i class="far fa-map"></i></th>
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
        classTrainerReducer: state.classTrainerReducer,
        tokenReducer: state.tokenReducer
    };
};

export default connect(mapStateToProps, null)(ListTraineeByTrainer);
