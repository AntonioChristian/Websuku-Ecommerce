import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import "./RegisterStyle.css"

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { username, email, password } = this.state;
    console.log(username, email, password);
    fetch("https://631993998e51a64d2be72871.mockapi.io/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      });
  }
  render() {
    return (
      <div className="register-page">
        <div className="register-form">
          <form onSubmit={this.handleSubmit}>
            <span className="span">
              <img src={logo} alt="logo" />
              <h3>Register Page</h3>
            </span>
            <div className="register-form-div">
              <input type="username" className="form-control" placeholder="Enter Username" onChange={(e) => this.setState({ username: e.target.value })} />
            </div>
            <div className="register-form-div">
              <input type="email" className="form-control" placeholder="Enter Email" onChange={(e) => this.setState({ email: e.target.value })} />
            </div>
            <div className="register-form-div">
              <input type="password" className="form-control" placeholder="Enter Password" onChange={(e) => this.setState({ password: e.target.value })} />
            </div>

            <div className="btn-register">
              <Link to={`/login`} className='register'>
              <button className="btn-register" >
                  Register
              </button> </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

