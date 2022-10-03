import "./styles.css";
import React, { useState} from "react";
import ReactDOM from "react-dom";
import {Box,Grid} from "@material-ui/core"
import logo from "../../src/Image/12.jpg";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div>
      
      
      
      <Grid container direction="column" justifyContent="center" alignItems="center">
      
        <Grid item xs={12} sm={12}> 
      <div className="containerimage"><img src={logo} className="icon" alt="user"></img></div>  
        </Grid>
       <Grid item xs={12} sm={12}>
        <div className="form">
        
        <form onSubmit={handleSubmit}>
         
          <div className="input-container">
            <label >Usuario </label>
            <input type="text" name="uname" className="textLog" required />
              {renderErrorMessage("uname")}
          </div>
            <div className="input-container">
            <label>Contraseña </label>
            <input type="password" name="pass"className="textLog" required />
            {renderErrorMessage("pass")}
          </div>
        <div className="button-container">
          <input type="submit" />

        </div>
         
      </form>
      </div>
     </Grid>
     </Grid>
   
    </div>
  );

  return (
    
    <div className="login">
      <Grid container direction="column" justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={12}>
      <div className="login-form">
        {isSubmitted ? <div>User is successfully logged in</div>
        : renderForm}
      </div>
      </Grid>
      </Grid>
    </div>
    
  );
}

export default Login;