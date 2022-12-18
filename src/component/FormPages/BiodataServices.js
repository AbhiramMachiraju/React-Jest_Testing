import axios from 'axios';


export const validate = (value) => {
    if (
      value !== null &&
      value !== "" &&
      value !== "" &&
      value !== "NULL" &&
      value !== "null" &&
      value !== "undefined" &&
      value !== undefined
    ) {
      return true;
    } else {
      return false;
    }
  };


  export const axiosRequestCall = (
    request,
    serviceName,
    method,
    callbackThen,
    callbackCatch
  ) => {
  
    if (!validate(serviceName)) {
      console.error("service name is empty in ajax call");
      return;
    }
  
    if (!validate(request)) var request = {};
  
    console.log("method : " + method);
    console.log("request : ", request);
    console.log("api + serviceName : " +serviceName);
    console.log("--=> Request --=> " + serviceName + " --=> ", request);
  
    var headersAttr = {};
      headersAttr = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      axios({
        method: method,
        data: request,
        url: serviceName,
        headers: headersAttr,
      }).then(function (response) {
          console.log("Response of " + serviceName + ": " + response);
          callbackThen(response);
        })
        .catch(function (error) {
          console.error("Error of " + serviceName + " :" + error);
          callbackCatch(error);
        });
  };