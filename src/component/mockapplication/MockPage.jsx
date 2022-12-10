import React from 'react';
import PropTypes from "prop-types";

export const MockPage = (props) => {
    return (
        <div>
          <h1>Counter</h1>
          <p>{props.count}</p>
          {props.handleIncrement && (
            <button onClick={props.handleIncrement}>Increment</button>
          )}
          {props.handleDecrement && (
            <button onClick={props.handleDecrement}>Decrement</button>
          )}
        </div>
      )
}

MockPage.prototype = { 
    count:PropTypes.number,
    handleIncrement:PropTypes.func,
    handleDecrement:PropTypes.func
  }
  