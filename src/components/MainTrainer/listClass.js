import React from "react";
import MainNavbarTrainer from "components/Navbars/MainNavbarTrainer";
import { getClassTrainer } from "../../api/trainer/index";
import { connect } from "react-redux";
import { doDetailClassTrainer } from "actions/trainer";
var accounting = require("accounting");

export class ListClass extends React.Component {

    state = { rating: 3, class: [] };

    changeRating(newRating, name) {
        try {
            this.setState({
                rating: newRating
            });
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount = async () => {
        try {
            const response = await getClassTrainer(this.props.userActiveReducer.trainerId, this.props.tokenReducer.token)
            const data = await response.json()
            this.setState({ class: data })
        } catch (error) {
            console.log(error)
        }
    }

    doDetailClass = (id) => {
        try {
            this.props.doDetailClassTrainer(id)
            this.props.history.push({
                pathname: "/protected/main-trainer/lessons"
            })
        } catch (error) {
            console.log(error)
        }
    }


    doRenderListClass = () => {
        if (this.state.class) {
            let i = 0
            return this.state.class.map(list => {
                let status = ""
                if (list.status === "AVAILABLE") {
                    status = <>𝐀𝐜𝐭𝐢𝐯𝐞</>
                } else if (list.status === "NOT AVAILABLE") {
                    status = <>𝐍𝐨𝐭 𝐀𝐜𝐭𝐢𝐯𝐞</>
                }
                i++;
                return (
                    <tr className="text-center">
                        <td className="text-center" style={{ paddingTop: "20px" }}><b><b>{i}</b></b></td>
                        <td className="text-center" style={{ paddingTop: "20px" }}><b><b>{list.subject.programmingLanguage}</b></b></td>
                        <td className="text-center" style={{ paddingTop: "20px" }}><b><b>{list.topic}</b></b></td>
                        <td className="text-center" style={{ paddingTop: "20px" }}><b><b>{accounting.formatMoney(list.price, " Rp. ", 2, ".", ",")}</b></b></td>
                        <td className="text-center" style={{ paddingTop: "20px" }}><b><b>{status}</b></b></td>
                        <td>
                            <button
                                type="button"
                                className="btn "
                                style={{ backgroundColor: "#4287f5", marginTop: "-3px", border: "1px solid #4287f5" }}
                                onClick={() => this.doDetailClass(list.id)}
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
            <div className="container" style={{ height: "920px" }}>
                <MainNavbarTrainer />
                <div className="card-body" >
                    <h5 className="card-title text-center" style={{ marginTop: "80px" }}>
                        <div className="text-center">
                            <h2> <b><img src="https://cdn0.iconfinder.com/data/icons/business-dual-color-glyph-set-7/128/video_totorials-512.png" style={{ width: "100px", height: "100px" }} /> 𝐌𝐲 𝐂𝐥𝐚𝐬𝐬</b></h2>
                        </div>
                    </h5>
                    <div>
                        <div className="container" style={{ margin: "auto" }}>
                            <table className="table mt-4" style={{ border: "solid 3px #251EE3", }}>
                                <thead >
                                    <tr className="text-center">
                                        <th scope="col"><b>Id</b></th>
                                        <th scope="col" style={{ width: "300px" }}><b>Programming Language</b></th>
                                        <th scope="col"><b>Topic</b></th>
                                        <th scope="col" style={{ width: "200px" }}><b>Price</b></th>
                                        <th scope="col" ><b>Status</b></th>
                                        <th scope="col"><b>Action</b></th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {this.doRenderListClass()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </ div>
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
    doDetailClassTrainer: doDetailClassTrainer
};

export default connect(mapStateToProps, mapDispatchToProps)(ListClass);
