import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import NavBar from "../components/NavBar/NavBar";
import TaskCard from "../components/TaskCard/index";
import NewTaskBtn from "../components/NewTaskBtn/index";

class Tasks extends Component {
  // state = {
  //   book: {}
  // };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc

  render() {
    return (
      <Container fluid>
        <NewTaskBtn />
        <Row>
          <Col size="md-10">
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Tasks;
