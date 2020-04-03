import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { RHFInput } from "react-hook-form-input";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Announce from "../components/announce";
// import Todo from '../components/Todo';
import "../announce.css";
import {
  Box,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  FormText,
  Container,
  Row,
  Col,
  Button
} from "react-bootstrap";

const Item = (props) => (
  <div onClick={props.click}>{props.data.task}</div>
)

export default class SixthComponent extends React.Component {
  state = {
    todos: [
      { task: "Wash Dishes" },
      { task: "Walk Dog" },
      { task: "Brush Teeth" }
    ],
    inputText: "",
    boxShowing: false
  }

  handleDelete = (i) => {
    let newTasks = this.state.todos.slice()
    newTasks.splice(i, 1)
    this.setState({ todos: newTasks })
  }

  render() {
    return (
      <div className="component sixth-component">
        <Container className="center-block" style={{ alignSelf: "center" }}>
          <h2>จากปรากดการณ์</h2>
          <div>
            <ReactCSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
              { this.state.todos.map((data, index) => (
                <Item key={index} data={data} click={() => this.handleDelete(index)} />
              )) }
            </ReactCSSTransitionGroup>
          </div>
          {/* <div>
            <TodoList todos={this.todos} handleDelete={handleDelete} />
            <Box isShowing={this.boxShowing} />
          </div>
          {/* <Announce /> */}
        </Container>
      </div>
    )
  }
};
