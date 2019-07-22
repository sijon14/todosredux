import React from "react";
import { connect } from "react-redux";
import { postTodo, postDone } from "./Actions.js/contactActions";
import "./App.css";

const App = props => {
  let { dispatch, todos } = props;

  const handleSubmit = e => {
    e.preventDefault();

    let { to_do } = e.target;
    let body = {
      name: to_do.value,
      status: false
    };
    e.target.reset();

    // dispatching the actions from view

    dispatch(postTodo(body));
    // dispatch({type: 'POST_CONTACT', payload: body})
  };

  const handleStatus = index => {
    dispatch(postDone(index));
  };

  console.log(props.todos);
  return (
    <div className="content">
      {/* post contact */}
      {/* show todos */}
      <form onSubmit={handleSubmit} className="form">
        <label className="todolabel">Add things to do</label>
        <input type="text" name="to_do" className="hello" required />
        <br />

        <button type="submit" className="btn">
          SAVE
        </button>
      </form>

      {/* <div className="things"> */}
      <h2>Things to do</h2>

      <ul>
        {todos.map((todo, i) => {
          // Chaning DONE status here
          //class terenary operator according to status
          let className = todo.status ? "completed" : "";
          return (
            <li key={i} className={className}>
              <button
                type="submit"
                className="btn2"
                onClick={() => handleStatus(i)}
              >
                DONE
              </button>
              {todo.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

//Here state to props
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

//Here connect adds props to App
export default connect(mapStateToProps)(App);
