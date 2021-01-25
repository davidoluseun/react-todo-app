import React from "react";

const Headline = ({ todos }) => {
  return (
    <>
      <h1 className="app-title">Todo App</h1>

      {!todos.length ? (
        <p>
          You do not have a todo right now.
          <br />
          Enter a todo in the text field below and click 'Enter'
        </p>
      ) : null}
    </>
  );
};

export default Headline;
