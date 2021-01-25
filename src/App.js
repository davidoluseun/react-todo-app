import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import TodosForm from "./components/TodosForm";
import AllTodos from "./components/AllTodos";
import CompletedTodos from "./components/CompletedTodos";
import ActiveTodos from "./components/ActiveTodos";
import TodosDetails from "./components/TodosDetails";
import Footer from "./components/Footer";
import Headline from "./components/Headline";

class App extends Component {
  state = {
    todos: [],
    newTask: "",
  };

  handleChange = (event) => {
    // Grab input value on change event and update the state.
    const newTask = event.target.value;
    this.setState({ newTask });
  };

  handleSubmit = (event) => {
    // Prevent default submit behavior
    event.preventDefault();

    // Grab Input field element
    let todoInput = event.target.todoInput;

    // Check if the field is fill
    if (todoInput.value) {
      // Set new todos object
      let newtodosItem = {
        id: Math.random(),
        task: this.state.newTask,
        status: "uncompleted",
      };

      // Update todos
      let todos = [...this.state.todos, newtodosItem];
      this.setState({ todos });

      // Set input value to an empty string
      todoInput.value = "";
    }
  };

  handleDelete = (id) => {
    // Filter through todos arrays
    const todos = this.state.todos.filter((todo) => todo.id !== id);

    // Update todos
    this.setState({ todos });
  };

  handleCheck = (todo) => {
    // Check clicked todo status
    const status = todo.status === "uncompleted" ? "completed" : "uncompleted";

    // Make a clone of todos, grab the clicked todo index and update is status
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);
    todos[index].status = status;

    // Update todos
    this.setState({ todos });
  };

  handleMarkAllCompleted = () => {
    // Map through all the todos and set their status to completed
    const todos = this.state.todos.map((todo) => {
      todo.status = "completed";
      return todo;
    });

    // Update todos
    this.setState({ todos });
  };

  handleClearCompleted = () => {
    // Map through all the todos and set their status to uncompleted
    const todos = this.state.todos.map((todo) => {
      todo.status = "uncompleted";
      return todo;
    });

    // Update todos
    this.setState({ todos });
  };

  render() {
    // Destructure todos state, filter activeTodos and completedTodos
    const { todos } = this.state;
    const activeTodos = todos.filter((todo) => todo.status === "uncompleted");
    const completedTodos = todos.filter((todo) => todo.status === "completed");

    return (
      <>
        <section className="content-wrap">
          <Headline todos={todos} />

          <div className="todos">
            <TodosForm
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <AllTodos
                    todos={todos}
                    onCheck={this.handleCheck}
                    onDelete={this.handleDelete}
                    {...props}
                  />
                )}
              />

              <Route
                path="/completed"
                render={(props) => (
                  <CompletedTodos
                    completedTodos={completedTodos}
                    onCheck={this.handleCheck}
                    onDelete={this.handleDelete}
                    {...props}
                  />
                )}
              />

              <Route
                path="/active"
                render={(props) => (
                  <ActiveTodos
                    activeTodos={activeTodos}
                    onCheck={this.handleCheck}
                    onDelete={this.handleDelete}
                    {...props}
                  />
                )}
              />
            </Switch>
          </div>

          <TodosDetails
            todos={todos}
            activeTodos={activeTodos}
            onMarkAllCompleted={this.handleMarkAllCompleted}
            onClearCompleted={this.handleClearCompleted}
          />
        </section>

        <Footer />
      </>
    );
  }
}

export default App;
