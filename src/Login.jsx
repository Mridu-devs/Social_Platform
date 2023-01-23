import React, { Component } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

class Login extends Component {
  state = {
    phone: "",
    password: "",
    message: "",
  };

  render() {
    return (
      <React.Fragment>
        <div className="login-main-container">
          <div className="loginbox">
            <input
              type="text"
              // placeholder="Email or phone number"
              placeholder="Phone number"
              className="login-inputs"
              value={this.state.phone}
              onChange={(event) => {
                this.setState({ phone: event.target.value });
              }}
            />
            <input
              type="text"
              placeholder="Password"
              className="login-inputs"
              value={this.state.password}
              onChange={(event) => {
                this.setState({ password: event.target.value });
              }}
            />

            {/* <Link to="/homepage" > */}
            <button className="login-btn" onClick={this.onLogin}>
              Log In
            </button>
            {/* </Link> */}
            <div>{this.state.message}</div>
            <div className="frgt-paswrd"> Forgot password?</div>
            <Link to="/signup">
              <button className="create-btn">Create a new account</button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }

  onLogin = async (props) => {
    var response = await fetch(
      `http://localhost:5001/users?phonenumber=${this.state.phone}&password=${this.state.password}`,
      { method: "GET" }
    );

    var body = await response.json();
    console.log(body);
    // console.log(body[0].id);
    // var id=body[0].id;

    if (body.length > 0) {
      this.setState({
        message: <span>Succesfully logged in</span>,
      });
      var id = body[0].id;
      // <useNavigate to="/homepage"/>;
      // this.props.loginId(id)

      window.location.href = `http://localhost:3004/homepage/${id}`;

      // return props.history.push("/homepage");
      // link();
      // <Link to={<Homepage/>}/>
    }
    // if(body.length<0){
    // this.setState({
    //   message: <span>Invalid Credentials</span>,
    // });
    // console.log(this.state.message)
    //   document.getElementById("loginmessage").innerHTML="Invalid Credentials"
    // }
    else {
      this.setState({
        message: <span>Invalid Credentials</span>,
      });
    }
  };
}

export default Login;
