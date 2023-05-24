import React, { Component } from "react";
import UploadAndDisplayImage from "./UploadAndDisplayImage";

export default class LoginId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./userDetails";
        }
      });
  }
  render() {

    const submitEvent = () =>{

      // alert();

          const closeFrameElement = document.getElementById("second-tag");

          const closeMain = document.getElementById("parent-div");

          

          if (closeFrameElement.style.display !== "none") {
                 closeFrameElement.style.display = "none";
                 closeMain.style.display = "block";
               } else {
                 closeFrameElement.style.display = "block";
                 closeMain.style.display = "none";
               }



      
    }
    return (
        <div 
        // className=" container card p-3 w-25"
        >
      <form onSubmit={this.handleSubmit}
      id = "parent-div" >
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
              required
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button
           type="submit"
            className="btn btn-primary"
            onClick={submitEvent}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="/sign-up">Sign Up</a>
        </p>
      </form>
      <div style = {{display : "none"}} id = "second-tag">
        <UploadAndDisplayImage />
      </div>
      </div>
    );
  }
}
