import React from "react";
import MainNavbarTrainee from "components/Navbars/MainNavbarTrainee";
import { getListClassTrainee } from "api/class";
import { connect } from "react-redux";
import { doDetailClassTrainee } from "actions/trainee";
import { Link } from "react-router-dom";

export class ListClassTrainee extends React.Component {
    state = {
        rating: 3, data: []
    };

    componentDidMount = async () => {
        try {
            const response = await getListClassTrainee(this.props.userActiveReducer.traineeId, this.props.tokenReducer.token)
            const data = await response.json()
            this.setState({ data: data })
        } catch (error) {
            this.setState({ data: "NoClass" })
            console.log(error)
        }
    }

    doDetail = (id) => {
        try {
            this.props.doDetailClassTrainee(id)
            this.props.history.push({
                pathname: "/protected/main-trainee/lessons"
            });
        } catch (error) {
            console.log(error)
        }
    };


    doRenderListClass = () => {
        if (this.state.data) {
            let i = 0;
            return this.state.data.map(list => {
                i++;
                console.log(list)
                let status = "";
                if (list.status === "ACTIVE") {
                    status = <><img src="http://icons.iconarchive.com/icons/double-j-design/origami-colored-pencil/256/blue-ok-icon.png" style={{ width: "50px", height: "50px", marginTop: "-20px" }} /></>
                } else {
                    status = <><img src="http://icons.iconarchive.com/icons/double-j-design/origami-colored-pencil/256/blue-cross-icon.png" style={{ width: "50px", height: "50px", marginTop: "-20px" }} />></>
                }
                return (
                    <tr className="text-center">
                        <td style={{ paddingTop: "20px" }}><b><b>{i}</b></b></td>
                        <td style={{ paddingTop: "20px" }}><b><b>{list.masterClassEntity.topic}</b></b></td>
                        <td style={{ paddingTop: "20px" }}><b><b>{list.startDate}</b></b></td>
                        <td style={{ paddingTop: "20px" }}><b><b>{list.endDate}</b></b></td>
                        <td style={{ paddingTop: "20px" }}><b><b>{status}</b></b></td >
                        <td style={{ paddingTop: "10px" }}>
                            <Link
                                type="button"
                                onClick={() => this.doDetail(list.masterClassEntity.id)}
                                className=""
                            >
                                <img src="https://cdn0.iconfinder.com/data/icons/construction-white-with-multicolor-circle-backgrou/2048/425_-_Door-512.png" style={{ width: "40px", height: "40px" }} />
                            </Link>
                        </td>
                    </tr >
                );
            })
        }
    };


    render() {
        if (this.state.data === "NoClass") {
            return (
                <>
                    <MainNavbarTrainee />
                    <div>
                        <div class="card-body text-center" style={{ height: "925px" }}>
                            <div class="card-body">
                                <img src="https://cdn.pixabay.com/photo/2018/12/31/17/06/sorry-3905517_960_720.png" style={{ width: "300px", height: "300px", marginTop: "230px" }}></img>
                                <h5 class="card-title"><b>You Have 0 Class</b></h5>
                                <p class="card-text"><b>Please buy class if you want to access this lessons.</b></p>
                                <img src="https://cdn.shopify.com/s/files/1/1061/1924/products/Right_Pointing_Backhand_Index_Emoji_Icon_ios10_large.png?v=1571606092" style={{ width: "50px", height: "40px" }}></img><Link to="/protected/main-trainee" class="btn btn-primary" style={{ marginLeft: "10px" }}><b>Buy Class</b></Link>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <MainNavbarTrainee />
                    <div className="card-body" style={{ height: "930px" }}>
                        <h5 className="card-title" style={{ marginTop: "100px" }}>
                            <div className="d-flex flex-row align-items-center">
                                <div className="flex-grow-1 text-center">
                                    <img src="https://www.pngkit.com/png/full/333-3331981_knowledge-icon-training-green-icon-png.png" style={{ width: "80px", height: "80px" }}></img>
                                    <h1><b>𝐌𝐲 𝐂𝐥𝐚𝐬𝐬</b></h1>
                                </div>
                                <div>
                                </div>
                            </div>
                        </h5>
                        <div className="container" >
                            <table className="table" style={{ border: "solid 3px #251EE3" }}>
                                <thead >
                                    <tr className="text-center">
                                        <th scope="col"><i class="fas fa-id-card-alt"></i> Id Class</th>
                                        <th scope="col"><i class="fas fa-users"></i> Class Name</th>
                                        <th scope="col"><i class="fas fa-calendar-alt"></i> Start Date</th>
                                        <th scope="col"><i class="fas fa-calendar-alt"></i> End Date</th>
                                        <th scope="col"><i class="fas fa-info"></i> Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {this.doRenderListClass()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            );
        }
    }
}


const mapStateToProps = (state) => {
    return {
        userActiveReducer: state.userActive,
        tokenReducer: state.tokenReducer
    }
};

const mapDispatchToProps = {
    doDetailClassTrainee: doDetailClassTrainee
};



export default connect(mapStateToProps, mapDispatchToProps)(ListClassTrainee)
