import React from "react";
import {
  Button,
} from "reactstrap";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import { getListClassById } from "api/class";
import { connect } from "react-redux";
import { totalPages, previousPaging, nextPaging, paginationNgide, paging } from "./pagination";
import { selectedClass } from "actions/class";
import MainNavbarTrainee from "components/Navbars/MainNavbarTrainee";


export class ViewClass extends React.Component {

  state = {
    rating: 3, data: [], listRole: [], totalPages: [], currentPage: null, disable: true, showModal: false,
    alertInput: 'd-none', alertAdd: 'd-none', alertEdit: 'd-none',
    id: null, roleCode: null, name: null, sub: []
  };

  changeRating(newRating, name) {
    try {
      this.setState({
        rating: newRating
      });
    } catch (error) {
      console.log(error)
    }
  }


  getDataJson = async (page = 0, pageSize = 3) => {
    try {
      const response = await getListClassById(this.props.idClass, page, pageSize, this.props.tokenReducer.token)
      const data = await response.json()
      this.setState({ listRole: data.content })
      return data;
    } catch (error) {
      console.log(error)
    }
  }

  getRoleData = async () => {
    try {
      const data = await this.getDataJson()
      const pages = totalPages(data.totalPages)
      this.setState({ totalPages: pages, currentPage: 1 })
    } catch (error) {
      console.log(error)
    }
  }

  async componentDidMount() {
    try {
      this.getRoleData()
    } catch (error) {
      console.log(error)
    }
  }

  setCurrentPage = (currentPage) => {
    try {
      this.setState({ currentPage: currentPage })
    } catch (error) {
      console.log(error)
    }
  }

  changePage = async (page) => {
    try {
      await this.getDataJson(page, 3)
      let currentPage = page + 1
      this.setCurrentPage(currentPage)
    } catch (error) {
      console.log(error)
    }
  }

  previous = () => {
    try {
      previousPaging(this.state.currentPage, this.getDataJson, this.setCurrentPage)
    } catch (error) {
      console.log(error)
    }
  }

  next = () => {
    try {
      nextPaging(this.state.currentPage, this.state.totalPages, this.getDataJson, this.setCurrentPage)
    } catch (error) {
      console.log(error)
    }
  }


  doDetail = (sub) => {
    try {
      this.props.selectedClass(sub);
      this.props.history.push({
        pathname: "/protected/main/detail-class"
      });
    } catch (error) {
      console.log(error)
    }
  };

  doRenderListClass = () => {
    if (this.state.data) {
      return this.state.listRole.map(sub => {
        return (
          <div class="col-lg-4 col-md-6 mb-4" style={{ marginTop: "20px" }}>
            <div class="card h-100" style={{ border: "1px solid blue", borderRadius: "5%" }}>
              <Link onClick={() => this.doDetail(sub)}>
                <img
                  class="card-img-top "
                  src={this.props.imageLessonTraineeReducer}
                  alt=""
                  style={{ height: "300px", width: "270px", borderRadius: "80px", marginLeft: "35px", marginTop: "20px" }}
                />
              </Link>
              <div class="card-body">
                <h3 class="card-title">
                  <Link onClick={() => { this.doDetail(sub) }}><b style={{ color: "black" }}><b>{sub.topic}</b></b></Link>
                </h3>
                <h5>{sub.harga}</h5>
                <Button
                  style={{ marginTop: "10px" }}
                  className="btn-round mr-1"
                  color="danger"
                  id={toString(sub.status)}
                  outline
                  onClick={e => e.target.focus()}
                ><b>
                    {sub.status}
                  </b>
                </Button>
              </div>
              <div class="card-footer">
                <h6 style={{ marginLeft: "1px", marginTop: "10px" }}>
                  <b style={{ color: "black" }}>Rating</b>
                </h6>
                <small class="text-muted">
                  <StarRatings
                    rating={this.state.rating}
                    starDimension="20px"
                    starSpacing="15px"
                  />
                </small>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  render() {
    return (
      <div>
        <MainNavbarTrainee status={{ name: "classPagination" }} />
        <div class="container" style={{ height: "883px" }} >
          <div class="row" >
            <h2 className="text-left" style={{ marginTop: "100px", marginLeft: "35px", width: "1200px", color: "black" }}><img src="https://cdn2.iconfinder.com/data/icons/mandatory-safety-signs/574/ISO_7010_M002-512.png" style={{ width: "70px", height: "70px" }} /><b> List Class </b></h2>
            {this.doRenderListClass()}
          </div>
        </div>
        {paginationNgide(paging(this.state.totalPages, this.state.currentPage, this.state.disable, this.changePage), this.previous, this.next)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    idClass: state.idClass,
    imageLessonTraineeReducer: state.imageLessonTraineeReducer,
    tokenReducer: state.tokenReducer
  }
};

const mapDispatchToProps = {
  selectedClass: selectedClass
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewClass)
