import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import "./LoginStyle.css"

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("https://631993998e51a64d2be72871.mockapi.io/login-user", {
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
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          // window.location.href = "./userDetails";
        }
      });
  }
  render() {
    return (
    <div className="login-page">
      <div className = "login-form">
      <form onSubmit={this.handleSubmit}>
       <span className="span">
        <img src={logo} alt="logo"/>
        <h3>Login Page</h3>
        </span>
        <div className="login-form-div">
          <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => this.setState({ email: e.target.value })} />
        </div>

        <div className="login-form-div">
          <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => this.setState({ password: e.target.value })} />
        </div>


        <div className="btn-login">
        <Link to={`/`} className='login'>
          <button className="btn-login" >
                  Login
          </button> </Link>
        </div>
        <div className="btn-regist">
        <p>Don't have an account? <Link to={`/register`} className='regist'>Sign Up</Link> </p>
        </div>
        {/* </p> */}
      </form>
    </div>
    </div>
    );
  }
}