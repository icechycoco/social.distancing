import React from 'react'
// import TodoItem from './TodoItem'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Todo extends React.Component {

  render() {
    const listItems = this.props.todos.map((todo, index) => <TodoItem key={index} todo={todo.task} handleDelete={() => this.props.handleDelete(index)} />)

    return (
      <div>
        <div className="item-wrapper">
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {listItems}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}


export default Todo