import React from "react";
import StarRatings from "react-star-ratings";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { getListClassDetail } from "api/class";
import MainNavbarTrainee from "components/Navbars/MainNavbarTrainee";
import { selectedClassDetail } from "actions/payment";
var accounting = require("accounting");

export class DetailClass extends React.Component {
  state = { rating: 3, data: [] };

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
      const response = await getListClassDetail(this.props.selectedClass.id, this.props.tokenReducer.token);
      console.log(this.props.selectedClass.id)
      const data = await response.json();
      this.setState({ data: data });
      this.props.selectedClassDetail(this.state.data)
    } catch (error) {
      console.log(error)
    }
  }

  doPayment = () => {
    try {
      this.props.history.push({
        pathname: '/protected/main/payment'
      })
    } catch (error) {
      console.log(error)
    }
  }


  render() {
    return (
      <div>
        <MainNavbarTrainee status={{ name: "DetailClassTrainee" }} />
        <div class="container" >
          <div class="text-center" style={{ marginTop: "70px" }}>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <h1 className="card-header text-center mt-5" style={{ backgroundColor: "#add8e6", borderRadius: "1%" }}><img src="https://cdn4.iconfinder.com/data/icons/popicon-bluetone-education/256/19-512.png" style={{ width: "100px", height: "100px" }} /><b> Class</b></h1>
              <div class="card " style={{ border: "1px solid #251EE3" }}>
                <img
                  style={{ width: "400px", height: "400px", marginLeft: "350px", marginTop: "60px" }}
                  class="card-img-top"
                  src={this.props.imageLessonTraineeReducer}
                  alt=""
                />
                <div class="card-body">
                  <h1 class="card-title"><b style={{ color: "black" }}><b>{this.props.selectedClass.topic}</b></b></h1>
                  <h4 class="card-text mt-4">
                    <b>
                      {this.state.data.description}
                    </b>
                  </h4>
                  <h6 style={{ marginLeft: "3px" }}>
                    <b>Rating</b>
                  </h6>
                  <StarRatings
                    rating={this.state.rating}
                    starDimension="20px"
                    starSpacing="15px"
                  />
                </div>
              </div>
              <div class="card card-outline-secondary my-4" style={{ border: "solid 1px #251EE3" }}>
                <h4 class="card-header" style={{ backgroundColor: "#251EE3" }}><b style={{ color: "white" }}><img src="https://img.icons8.com/office/40/000000/class.png"></img>   Class Information</b></h4>
                <div class="card-body">
                  <p><b>
                    Most programming languages consist of instructions for computers. There are programmable machines that use a set of specific instructions, rather than general programming languages. Early ones preceded the invention of the digital computer, the first probably being the automatic flute player described in the 9th century by the brothers Musa in Baghdad, during the Islamic Golden Age.[1] Since the early 1800s, programs have been used to direct the behavior of machines such as Jacquard looms, music boxes and player pianos.[2] The programs for these machines (such as a player piano's scrolls) did not produce different behavior in response to different inputs or conditions.
                  </b></p>
                  <hr></hr>
                  <p><b>
                    Thousands of different programming languages have been created, and more are being created every year. Many programming languages are written in an imperative form (i.e., as a sequence of operations to perform) while other languages use the declarative form (i.e. the desired result is specified, not how to achieve it).
                  </b></p>
                  <hr></hr>
                  <p><b>
                    The description of a programming language is usually split into the two components of syntax (form) and semantics (meaning). Some languages are defined by a specification document (for example, the C programming language is specified by an ISO Standard) while other languages (such as Perl) have a dominant implementation that is treated as a reference. Some languages have both, with the basic language defined by a standard and extensions taken from the dominant implementation being common.
                  </b></p>
                  <hr></hr><b>
                    <img src="https://www.searchpng.com/wp-content/uploads/2018/12/mgpl.png" style={{ width: "25px", height: "25px", marginTop: "-3px" }} />
                    Requirements
                      English language
                  </b>
                  <p><b>
                    <hr></hr>
                    <h5><b>Who this course is for: Beginner</b></h5>
                    <hr></hr>
                    <h6><b>
                      person who wants to understand programming</b></h6>
                  </b></p>
                  <hr></hr>
                  <h5 className="mt-2"> <b>Price for this classes is </b> <h2 style={{ marginTop: "10px" }}><b style={{ color: "black" }}>{accounting.formatMoney(this.props.selectedClass.price, " Rp. ", 2, ".", ",")}</b></h2><b style={{ color: "red" }}> you can get more lower price with adding a coupon! </b></h5>
                  <hr></hr>
                  <Button class=" btn-lg" onClick={this.doPayment} size="lg" style={{ backgroundColor: "#4287f5", border: "1px solid #4287f5" }}><b style={{ color: "white" }}>BUY NOW  <i class="fas fa-shopping-cart"></i></b></Button>
                  <Button class="btn btn-lg" style={{ marginLeft: "20px" }} onClick={this.doPayment} size="lg" ><b>ADD CUPPON  <i class="fas fa-ticket-alt"></i></b></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

const mapDispatchToProps = {
  selectedClassDetail: selectedClassDetail
};

const mapStateToProps = state => {
  return {
    selectedClass: state.selectedClass,
    imageLessonTraineeReducer: state.imageLessonTraineeReducer,
    tokenReducer: state.tokenReducer
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailClass);
