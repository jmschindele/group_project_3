import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";

class TaskCard extends Component {
  // Setting the component's initial state
  state = {
    title: "",
    rate: "",
    hours: "",
    total: 0
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    let hours, rate;

    //check what name is
    if (name === "hours") {
      hours = value;
      rate = this.state.rate;
    } else if (name === "rate") {
      rate = value;
      hours = this.state.hours;
    }

    this.setState({
      [name]: value,
      total: hours && rate ? parseInt(hours) * parseInt(rate) : hours ? parseInt(hours) * this.props.rate : rate ? parseInt(rate) * this.props.hours : 0
      })
  }
  




  handleTaskUpdate = event => {
    event.preventDefault();
    let id = this.props._id;
    API.updateTask(id, {
      title: this.state.title ? this.state.title.trim() : this.props.title,
      rate: this.state.rate ? this.state.rate : this.props.rate,
      hours: this.state.hours ? this.state.hours : this.props.hours
    })
      .then(() => API.getTasks())
      .then((res) => this.setState({ tasks: res.data }))
      .catch(err => console.log(err));
  };


  
  render() {
    return (
      <>
        <div className="card-t">
          <div className="task-card-body">
            <div className="form-row align-items-center">
              <div className="col-6">
                <label className="sr-only" htmlFor="task-input">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  id="task-input"
                  placeholder="Title"
                  name="title"
                  value={this.state.title ? this.state.title : this.props.title}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="col-2">
                <label className="sr-only" htmlFor="rate-input">
                  <span className="h3">Rate</span>
                </label>
                <input
                  type="number"
                  className="form-control mb-2"
                  id="rate-input"
                  placeholder="$000.00"
                  name="rate"
                  value={this.state.rate ? this.state.rate : this.props.rate}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="col-2">
                <label className="sr-only" htmlFor="hours-input">
                  Hours
                </label>
                <input
                  type="number"
                  className="form-control mb-2"
                  id="hours-input"
                  placeholder="hours"
                  name="hours"
                  value={this.state.hours ? this.state.hours : this.props.hours}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="col-2">
                <label
                  // className="col-sm-2 col-form-label"
                  className="sr-only"
                  htmlFor="staticTotal"
                />
                <input
                  type="text"
                  readOnly
                  placeholder="Total"
                  // className="form-control-plaintext"
                  className="form-control mb-2"
                  id="static-total"
                  value={this.state.total ? this.state.total : this.props.total}
                />
              </div>
            </div>
            {/* 
            <Link to="#" className="card-link-t">
              Edit |
            </Link> */}
            {/* <Link to="#" className="card-link-t"> */}
            <span className="card-link-t" onClick={this.handleTaskUpdate}>
              Save
            </span>
            {/* </Link> */}
          </div>
        </div>
      </>
    );
  }
}
export default TaskCard;
