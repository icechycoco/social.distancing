import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import { RHFInput } from 'react-hook-form-input';
import Announce from '../components/announce';
// import Todo from '../components/Todo';
import '../announce.css';
import { Box, Form, FormGroup, FormLabel, FormControl, FormText, Container, Row, Col, Button } from "react-bootstrap"

export default () => {

  // state = {
  //   todos: [
  //     { task: "Wash Dishes" },
  //     { task: "Walk Dog" },
  //     { task: "Brush Teeth" }
  //   ],
  //   inputText: "",
  //   boxShowing: false
  // }

  // handleDelete = (i) => {
  //   let newTasks = this.state.todos.slice()
  //   newTasks.splice(i, 1)
  //   this.setState({ todos: newTasks })
  // }

  return (
    <div className="component sixth-component">
      <Container className="center-block" style={{ alignSelf: 'center', }}>
        <h2>จากปรากดการณ์</h2>
        {/* <div>
          <TodoList todos={this.todos} handleDelete={handleDelete} />
          <Box isShowing={this.boxShowing} />
        </div> */}
        {/* <Announce /> */}
      </Container >
    </div >
  );
};