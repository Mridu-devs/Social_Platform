import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreateNewAccount extends Component {
  state = {
    name: "",
    phonenumber: "",
    emailid: "",
    address: "",
    password: "",
  }
  render() {
    console.log(this.state.name);
    return (
      <React.Fragment>
        <div className="login-main-container">
          <div className="loginbox">
            <input
              type="text"
              placeholder="Name"
              value={this.state.name}
              className="login-inputs"
              onChange={(event) => {
                this.setState({ name: event.target.value });
              // console.log(this.state.name)
            }
            }
            />
            <input
              type="text"
              placeholder="Phone-Number"
              className="login-inputs"
              value={this.state.phonenumber}
              onChange={(event) => {
                {
                  this.setState({ phonenumber: event.target.value });
                }
                console.log(this.state.phonenumber)}}
            />
            <input
              type="text"
              placeholder="Email-ID"
              className="login-inputs"
              value={this.state.emailid}
              onChange={(event) => {
                this.setState({ emailid: event.target.value });
                console.log(this.state.emailid)}}
            />
            <input
              type="text"
              placeholder="Address"
              className="login-inputs"
              value={this.state.address}
              onChange={(event) => {
                this.setState({ address: event.target.value });
                console.log(this.state.address)}}
            />
            <input
              type="text"
              placeholder="Create a Password"
              className="login-inputs"
              value={this.state.password}
              onChange={(event) => {
                this.setState({ password: event.target.value });
                console.log(this.state.password)}}
            />
            {/* <input
              type="password"
              placeholder="Confirm the Password"
              className="login-inputs"
            /> */}
            <Link to="/">
              <button className="create-btn"onClick={this.onCreate}>Create a new account</button>{" "}
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
  onCreate = async () => {
    console.log("Hi")
    var newCustomer = {
      name: this.state.name,
      phonenumber: this.state.phonenumber,
      emailid: this.state.emailid,
      address: this.state.address,
      password: this.state.password,
      photo: "https://picsum.photos/200/200",

    };

    var response = await fetch("http://localhost:5001/users", {
      method: "POST",
      body: JSON.stringify(newCustomer),
      headers: { "Content-type": "application/json" },
    });
    console.log(response);
    var body= await response.json();
    console.log(body)
  };
}

export default CreateNewAccount;
