import React from "react";
import { connect } from "react-redux";
import { getListSubject } from "../../../api/subject";
import { selectSubjectAction } from "actions/subject";

export class Subject extends React.Component {
  state = { subject: [] }

  componentDidMount() {
    try {
      this.doGetListSubject();
    } catch (error) {
      console.log(error)
    }
  }

  doGetListSubject = async () => {
    try {
      const response = await getListSubject(this.props.tokenReducer.token);
      const data = await response.json();
      this.setState({ subject: data })
    } catch (error) {
      console.log(error)
    }
  };

  doRenderSubject = () => {
    if (this.state.subject) {
      return this.state.subject.map(subject => {
        return (
          <option key={subject.id} value={subject.id}>
            {subject.programmingLanguage}
          </option>
        );
      });
    } else {
      return (
        <tr>
          <option></option>
        </tr>
      );
    }
  };

  onSelectSubject = async event => {
    try {
      await this.props.selectSubjectAction(event.target.value);
    } catch (error) {
      console.log(error)
    }
  };

  render() {
    return (
      <select
        className="custom-select"
        onChange={this.onSelectSubject}
      >
        <option>Open this select menu</option>
        {this.doRenderSubject()}
      </select>
    );
  }
}



const mapDispatchToProps = {
  selectSubjectAction: selectSubjectAction
};

const mapStateToProps = state => {
  return {
    tokenReducer: state.tokenReducer
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Subject);
