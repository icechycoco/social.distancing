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
      { task: "ห้างสรรพสินค้า" },
      { task: "ฟิตเนต" },
      { task: "โรงเรียน" },
      { task: "ตลาดนัด" },
      { task: "สนามกอล์ฟ" },
      { task: "ศูนย์แสดงสินค้า" },
      { task: "อาบ อบ นวด" },
      { task: "ร้านเสริมสวย" },
      { task: "สระว่ายน้ำ" }
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
        <h2>เมื่อประกาศขอความร่วมมือ social distancing ปิดสถานประกอบการณ์ต่างๆ</h2>

        <Container className="center-block" style={{ alignSelf: "center" }}>
          <h3 className="center-block">
            <ReactCSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
              {this.state.todos.map((data, index) => (
                <Item key={index} data={data} click={() => this.handleDelete(index)} />
              ))}
            </ReactCSSTransitionGroup>
          </h3>
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
