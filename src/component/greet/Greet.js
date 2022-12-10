import React from 'react';
import PropTypes from "prop-types";

 const Greet = (props) => {
  return (
    <div>Hello {props.name}</div>
  )
}


Greet.prototype = { 
  name:PropTypes.string

}

/* 
      TypeScrpit file
    type GreetProps ={ name?:String } 
    //only for tsx,ts files
         props : GreetProps
 */

export default Greet;



