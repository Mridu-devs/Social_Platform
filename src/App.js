// import React from "react";
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Timeline from "./Timeline";
import Contactus from "./Contactus";
import CreateNewAccount from "./CreateNewAccount";
import Homepage from "./Homepage";
import Login from "./Login";
import Navbar from "./Navbar";

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this. state = {userid:"1"};
  //   console.log(this.state)
  // }
  state = { userid: "" };

  render() {
    console.log(this.state.userid);
    return (
      <React.Fragment>
        <Navbar useridFromApp={this.state.userid} />
        <Routes>
          <Route path="/" element={<Login loginId={this.updateUserId} />} />
          <Route path="/signup" element={<CreateNewAccount />} />
          <Route path="/homepage/:id" element={<Homepage />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </React.Fragment>
    );
  }

  // updateUserId = (id) => {
  //   this.setState({ userid: id });
  //   console.log(this.state);
  // };
}

export default App;

